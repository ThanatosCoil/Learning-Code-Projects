async function invalidatePostCache(redisClient, input) {
  const cachedKey = `search:${input}`;
  await redisClient.del(cachedKey);

  const keys = await redisClient.keys("search:*");
  if (keys.length > 0) {
    await redisClient.del(keys);
  }
}

module.exports = { invalidatePostCache };
