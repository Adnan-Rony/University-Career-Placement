import { Portfolio } from "../models/portfolio.model.js";
import slugify from "slugify";

export const generateSlug = (name) => {
  const slugBase = slugify(name, { lower: true, strict: true });
  const randomStr = Math.random().toString(36).substring(2, 8); // 6 char, letters+numbers
  return `${slugBase}-${randomStr}`;
};

export const createOrUpdatePortfolio = async (req, res) => {
  const userId = req.user.id;

  const data = req.body;

  try {
    const existing = await Portfolio.findOne({ user: userId });

    if (existing) {
      if (!existing.slug && data.basicInfo?.name) {
        existing.slug = generateSlug(data.basicInfo.name);
        await existing.save();
      }

      const updated = await Portfolio.findOneAndUpdate({ user: userId }, data, {
        new: true,
      });
      return res.status(200).json(updated);
    }

    let slug = null;
    if (data.basicInfo?.name) {
      slug = generateSlug(data.basicInfo.name);
    }

    const newPortfolio = await Portfolio.create({
      user: userId,
      slug,
      ...data,
    });
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


//Public Portfolio url
export const getPortfolioBySlug = async (req, res) => {
  const { slug } = req.params;

  try {
    const portfolio = await Portfolio.findOne({ slug });

    if (!portfolio) {
      return res.status(404).json({ message: "Portfolio not found" });
    }

   
    const safePortfolio = portfolio.toObject();
    delete safePortfolio.user; 
    delete safePortfolio._id;  
    
    res.status(200).json(safePortfolio);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch public portfolio", error });
  }
};
