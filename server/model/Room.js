const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

const roomSchema = new mongoose.Schema(
  {
    roomName: {
      type: String,
      required: true,
      trim: true,
    },
    roomId: {
      type: String,
      require: true,
    },
    roomPassword: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      default: "",
    },
    admin: {
      // User database ne point kare  // popout // populate
      type: ObjectId,
      ref: "User",
      required: true,
    },
    members: {
      type: Array,
      userId: {
        type: String,
      },
      name: {
        type: String,
      },
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Room", roomSchema);
