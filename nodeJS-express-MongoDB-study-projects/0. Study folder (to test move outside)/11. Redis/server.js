const redis = require("redis");

const client = redis.createClient({
  host: "localhost",
  port: 6379,
});

//event listener

client.on("error", (error) => {
  console.log("Redis client error occurred", error);
});

async function testRedisConnection() {
  try {
    await client.connect();
    console.log("Connected to Redis");

    await client.set("keyName", "value 2");

    const extractValue = await client.get("keyName");
    console.log(extractValue);

    const deleteCount = await client.del("keyName");
    console.log(deleteCount);

    const extractUpdatedValue = await client.get("keyName");
    console.log(extractUpdatedValue);

    await client.set("count", "10");
    const incrementCount = await client.incr("count");
    console.log(incrementCount);

    const decrementCount = await client.decr("count");
    client.decr("count");
    client.decr("count");
    client.decr("count");
    console.log(await client.get("count"));
  } catch (error) {
    console.error(error);
  } finally {
    await client.quit();
  }
}

testRedisConnection();
