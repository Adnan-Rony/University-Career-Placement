import mongoose from "mongoose";
const { Schema } = mongoose;

const paymentSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    postId: {
      type: String,
      required: true,
    },

    amount: {
      type: Number,
      required: true,
      min: [0, "Amount cannot be negative"],
    },
    status: {
      type: String,
      enum: {
        values: ["pending", "success", "failed"],
        message: "{VALUE} is not a supported status",
      },
    },
  },
  { timestamps: true }
);

export const paymentModel = mongoose.model("payment", paymentSchema);
