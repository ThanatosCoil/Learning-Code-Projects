const amqp = require("amqplib");
const logger = require("./logger");

let connection = null;
let channel = null;

const EXCHANGE_NAME = "post-events";

async function connectRabbitMQ() {
  try {
    connection = await amqp.connect(process.env.RABBITMQ_URL);
    channel = await connection.createChannel();

    await channel.assertExchange(EXCHANGE_NAME, "topic", { durable: false });
    logger.info("Connected to RabbitMQ");
    return channel;
  } catch (error) {
    logger.error("Failed to connect to RabbitMQ", error);
    throw error;
  }
}

async function publishEvent(routingKey, message) {
  if (!channel) {
    await connectRabbitMQ();
  }
  channel.publish(
    EXCHANGE_NAME,
    routingKey,
    Buffer.from(JSON.stringify(message))
  );
  logger.info(`Event published to RabbitMQ: ${routingKey}`);
}

async function consumeEvent(routingKey, callback) {
  if (!channel) {
    await connectRabbitMQ();
  }
  const q = channel.assertQueue("", { exclusive: true }); //Создает новую очередь со случайным именем. exclusive: true означает, что очередь будет удалена при закрытии соединения
  await channel.bindQueue(q.queue, EXCHANGE_NAME, routingKey); //Привязывает очередь к обменнику используя указанный routingKey. Это определяет, какие сообщения будут получать очередь
  // Начинает получать сообщения из очереди
  await channel.consume(q.queue, (msg) => {
    if (msg !== null) {
      const content = JSON.parse(msg.content.toString()); //JSON в объект из буфера
      callback(content); //Вызывает предоставленную callback функцию с распарсенным содержимым сообщения
      channel.ack(msg); //Подтверждает завершение обработки сообщения для RabbitMQ. Это удаляет сообщение из очереди
    }
  });
  logger.info(`Consuming events for routing key: ${routingKey}`);
}

module.exports = { connectRabbitMQ, publishEvent, consumeEvent };
