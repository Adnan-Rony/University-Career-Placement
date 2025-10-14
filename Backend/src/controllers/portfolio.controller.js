import { Portfolio } from "../models/portfolio.model.js";




export const createOrUpdatePortfolio = async (req, res) => {
  const userId = req.user.id;
  const data = req.body;

  try {
    const existing = await Portfolio.findOne({ user: userId });

    if (existing) {
      const updated = await Portfolio.findOneAndUpdate(
        { user: userId },
        data,
        { new: true }
      );
      return res.status(200).json(updated);
    }

    const newPortfolio = await Portfolio.create({ user: userId, ...data });
    res.status(201).json(newPortfolio);
  } catch (error) {
    res.status(500).json({ message: "Failed to save portfolio", error });
  }
};

export const getMyPortfolio = async (req, res) => {
  const userId = req.user.id;

  try {
    const portfolio = await Portfolio.findOne({ user: userId });

    if (!portfolio) {
      return res.status(404).json({ message: "Portfolio not found" });
    }

    res.status(200).json(portfolio);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch portfolio", error });
  }
};