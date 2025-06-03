const redis = require("redis");

const client = redis.createClient({
  host: "localhost",
  port: 6379,
});

client.on("error", (error) => {
  console.log("Redis client error occurred", error);
});

//pipelining - посылаем множество команд в Редис партией
//transaction - позволяет выполнить множество команд, как одну. Т.е. если одна не выполнится, то даже успешные будут считаться не выполнившимися

async function multiTask() {
  try {
    await client.connect();
    // //transaction
    // const multi = client.multi();

    // multi.set("key-transaction1", "value1");
    // multi.set("key-transaction2", "value2");
    // multi.get("key-transaction1");
    // multi.get("key-transaction2");

    // const results = await multi.exec();
    // console.log(results);

    // //pipeline example -> batch data operation ->
    // const pipelineOne = client.multi();

    // for (let i = 0; i < 1000; i++) {
    //   pipeline.set(`user:${i}:action`, `Action ${i}`);
    // }

    // await pipelineOne.exec();

    // //transaction example ->
    // const dummyExample = client.multi();
    // multi.decrBy("account:1234:balance", 100);
    // multi.incrBy("account:0000:balance", 100);
    // // Если decr или incr провалится, то провалятся обе операции

    // const finalResults = await multi.exec();

    // const cartExample = client.multi();
    // multi.hIncrBy("cart:1234", "item_count", 1);
    // multi.hIncrBy("cart:1234", "total_price", 10);

    // await multi.exec();

    console.log("Performance test");

    console.time("Without pipelining");

    for (let i = 0; i < 1000; i++) {
      await client.set(`user${i}`, `user_value${i}`);
    }

    console.timeEnd("Without pipelining");

    console.time("With pipelining");

    const bigPipeline = client.multi();

    for (let i = 0; i < 1000; i++) {
      bigPipeline.set(`user_pipeline_key${i}`, `user_pipeline_value${i}`);
    }

    await bigPipeline.exec();

    console.timeEnd("With pipelining");
  } catch (error) {
    console.error(error);
  } finally {
    await client.quit();
  }
}

multiTask();
