import mongoose from "mongoose";
const { Schema } = mongoose;

const paymentSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },

    // postId: {
    //   type: String,
    //   required: true, },

    amount: {
      type: Number,
      required: true,
      min: [0, "Amount cannot be negative"],
    },

    trx_id: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: {
        values: ["pending", "success", "failed"],
        default: "pending",
        message: "{VALUE} is not a supported status",
      },
    },
  },
  { timestamps: true }
);

export const paymentModel = mongoose.model("payment", paymentSchema);
