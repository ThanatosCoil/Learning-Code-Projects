const redis = require("redis");

const client = redis.createClient({
  host: "localhost",
  port: 6379,
});

client.on("error", (error) => {
  console.log("Redis client error occurred", error);
});

async function testAdditionalFeatures() {
  try {
    await client.connect();

    const subscriber = client.duplicate(); //Создает нового клиента, но разделяет тоже самое подключение
    await subscriber.connect(); //коннектимся к серверу Редис от саба

    //подписываем саба на канал
    await subscriber.subscribe("channel-1", (message, channel) => {
      console.log(`Received message from ${channel}:${message}`);
    });

    //публикуем сообщение в канал-1
    await client.publish("channel-1", "Some message with info");

    await client.publish("channel-1", "Second message to the channel");

    await new Promise((resolve) => setTimeout(resolve, 3000)); //для наглядности задержка

    await subscriber.unsubscribe("channel-1"); // отписываемся от канала
    await subscriber.quit(); // закрывает подключение саба
  } catch (error) {
    console.error(error);
  } finally {
    await client.quit();
  }
}

testAdditionalFeatures();
