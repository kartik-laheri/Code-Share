const express = require("express");
const { nanoid } = require("nanoid");
const User = require("../model/User");
const RoomModel = require("../model/room");

exports.createRoom = async (req, res) => {
  const { userId, roomName, roomPassword } = req.body;
  if (!userId || !roomName || !roomPassword) {
    res.status(422).json({ error: "please add all field" });
    return;
  }
  const newRoom = new RoomModel({
    roomId: nanoid(6),
    // members: [{ userId: nanoid(4), name: userId }],
    admin: await User.findById(userId),
    roomName,
    roomPassword,
  });

  try {

    const savedRoom = await newRoom.save();
    res.status(200).json(savedRoom);
    console.log(savedRoom);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getRoomsOfUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const room = await RoomModel.find({
      "members.userId": userId,
    });

    res.status(200).json(room);
  } catch (e) {
    res.status(500).json(e);
  }
};

exports.joinRoom = async (req, res) => {
  const { userId, roomId, roomPassword } = req.body;

  if (!userId || !roomId || !roomPassword) {
    res.status(422).json({ error: "please add all field" });
  } else {
    RoomModel.findOne({ roomId: roomId })
      .then(async (savedRoom) => {
        if (!savedRoom) {
          res.status(422).json({ error: "Invalid Room Id or password" });
        } else if (savedRoom?.roomPassword === roomPassword) {
          // if (!user) {
            const user = await User.findById(userId);
            try {
              const newUser = { userId: userId, name: user.firstName };
              const join_room = await RoomModel.updateOne(
                { _id: savedRoom._id },
                { $push: { members: newUser } },
                { new: true }
              );

              res.status(200).json({
                UserId: newUser.userId,
                UserName: newUser.firstName,
                RoomId: roomId,
                RoomName: savedRoom.roomName,
              });
              //res.status(200).json(join_room);
              console.log(join_room);
            } catch (error) {
              res.status(422).json({ error: error.message });
            }
          // } else {
          //   if (user.RoomId == roomId && user.UserName != userName) {
          //     //console.log(`you have to login with this user name ${user.UserName}........ `)
          //     res.status(400).json({
          //       error: `you have to login with this user name ${user.UserName}`,
          //     });
          //   } else {
          //     res.status(200).json({ msg: `joined room` });
          //   }
          // }
        } else {
          res.status(422).json({ error: "Invalid room id or password" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

exports.codeSave = async (req, res) => {
  const { roomId, code } = req.body;

  await RoomModel.findOneAndUpdate(
    { roomId: roomId },
    { $set: { code: code } },
    { new: true }
  );
  return true;
};
