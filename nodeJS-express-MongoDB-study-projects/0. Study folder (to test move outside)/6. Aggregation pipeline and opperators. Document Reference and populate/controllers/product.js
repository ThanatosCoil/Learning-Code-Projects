const Product = require("../models/Product");

const getProductStats = async (req, res) => {
  const result = await Product.aggregate([
    //stage 1: conditions
    {
      $match: {
        inStock: true,
        price: {
          $gte: 100,
        },
      },
    },
    //stage 2: group documents
    {
      $group: {
        _id: "$category",
        avgPrice: {
          $avg: "$price",
        },
        count: {
          $sum: 1,
        },
      },
    },
  ]);
  res.status(200).json({
    success: true,
    data: result,
  });
};

const getProductAnalysis = async (req, res) => {
  const result = await Product.aggregate([
    {
      $match: {
        category: "Electronics",
      },
    },
    {
      $group: {
        _id: null,
        totalRevenue: {
          $sum: "$price",
        },
        avgPrice: {
          $avg: "$price",
        },
        maxProductPrice: {
          $max: "$price",
        },
        minProductPrice: {
          $min: "$price",
        },
      },
    },
    {
      $project: {
        _id: 0, //Исключили из вывода
        totalRevenue: 1,
        avgPrice: 1,
        maxProductPrice: 1,
        minProductPrice: 1,
        priceRange: {
          $subtract: ["$maxProductPrice", "$minProductPrice"],
        },
      },
    },
  ]);

  res.status(200).json({
    success: true,
    data: result,
  });
};

const insertSampleProducts = async (req, res) => {
  const sampleProducts = [
    {
      name: "Laptop",
      category: "Electronics",
      price: 999,
      inStock: true,
      tags: ["computer", "tech"],
    },
    {
      name: "Smartphone",
      category: "Electronics",
      price: 699,
      inStock: true,
      tags: ["mobile", "tech"],
    },
    {
      name: "Headphones",
      category: "Electronics",
      price: 199,
      inStock: false,
      tags: ["audio", "tech"],
    },
    {
      name: "Running Shoes",
      category: "Sports",
      price: 89,
      inStock: true,
      tags: ["footwear", "running"],
    },
    {
      name: "Novel",
      category: "Books",
      price: 15,
      inStock: true,
      tags: ["fiction", "bestseller"],
    },
    {
      name: "Tragedy",
      category: "Books",
      price: 15,
      inStock: true,
      tags: ["fiction", "bestseller"],
    },
  ];
  const result = await Product.insertMany(sampleProducts);
  res.status(201).json({
    success: true,
    data: `Inserted ${result.length} sample products`,
  });
};

module.exports = { insertSampleProducts, getProductStats, getProductAnalysis };
