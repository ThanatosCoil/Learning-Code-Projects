const Search = require("../models/Search");
const logger = require("../utils/logger");

const searchController = async (req, res) => {
  logger.info("Searching endpoint hit");
  try {
    const { query } = req.query;

    //cache
    const cacheKey = `search:${query}`;
    const cachedResults = await req.redisClient.get(cacheKey);

    if (cachedResults) {
      return res.status(200).json(JSON.parse(cachedResults));
    }

    const results = await Search.find(
      { $text: { $search: query } },
      { score: { $meta: "textScore" } }
    )
      .sort({ score: { $meta: "textScore" } })
      .limit(10);

    //save to cache
    await req.redisClient.setex(cacheKey, 300, JSON.stringify(results));

    res.status(200).json({
      success: true,
      message: "Search results",
      results,
    });
  } catch (error) {
    logger.error("Error searching post", error);
    res.status(500).json({
      success: false,
      message: "Error searching post",
    });
  }
};

module.exports = { searchController };
