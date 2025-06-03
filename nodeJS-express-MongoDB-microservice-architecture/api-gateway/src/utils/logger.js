const winston = require("winston");
//библиотека логирования

//Создем новый экземпляр логгера с конфигурацией
const logger = winston.createLogger({
  level: process.env.NODE_ENV === "production" ? "info" : "debug", //Уровни логирования при info будут показываться выше него и он - info, warn, error
  //Настриваем формат лога с использованием нескольких форматировщиков
  format: winston.format.combine(
    winston.format.timestamp(), //Добавляет временную метку в логи
    winston.format.errors({ stack: true }), //Включает трассировки стека ошибок в логах
    winston.format.splat(), //Включает интерполяцию строк для %d, %s и т. д.
    winston.format.json() //Выводит логи в формате JSON
  ),
  defaultMeta: { service: "api-gateway" }, // Каждый журнал будет включать: "service": "identity-service"

  //Настраиваем, куда следует выводить логи (транспорты)
  transports: [
    //Консольный транспорт: выходы на консоль/терминал
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(), //Добавляет цвета к разным уровням лога
        winston.format.simple() // Упрощенный формат вывода для консоли
      ),
    }),

    //Транспорт файла error: регистрирует только ошибки
    new winston.transports.File({
      filename: "error.log", // Сохраняем в файл error.log
      level: "error", //Регестрируем только сообщения уровня error
    }),
    //Транспорт файла combined: регестрирует все
    new winston.transports.File({ filename: "combined.log" }),
  ],
});
// По итогу возникновения ошибки - logger.error('Critical Error') Формат лога пойдет в консоль, файл error.log и файл combined.log

module.exports = logger;
