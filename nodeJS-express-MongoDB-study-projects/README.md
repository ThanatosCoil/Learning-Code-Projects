# Что я сделал и изучил

Этот репозиторий содержит мои учебные проекты и эксперименты с Node.js, Express и MongoDB (за исключением приложения с микросервисной архитектурой, которое будет в отдельном репозитории).

## Ниже — описание каждого подпроекта и чему я научился:

# 1. Task manager

- Реализовал базовый API для управления задачами на Express и MongoDB.
- Практиковался в CRUD-операциях, REST-маршрутизации и подключении к MongoDB через Mongoose.
- Изучил обработку ошибок и структуру небольших backend-приложений.

---

# 2. Data filtering, search, etc.

- Реализовал расширенные фильтрацию, поиск и работу с запросами в Express.
- Практиковался в создании гибких эндпоинтов для фильтрации, сортировки и пагинации данных.
- Улучшил навыки работы с query-параметрами и динамическими запросами к MongoDB.

---

# 3. Json Web Tokens

- Изучил аутентификацию с помощью JWT (JSON Web Tokens) в Express.
- Научился генерировать, подписывать и проверять токены для аутентификации пользователей.
- Практиковался в защите маршрутов и безопасном управлении сессиями.

---

# 4. Auth and Tokens API

- Создал более полный API для аутентификации с регистрацией, входом и управлением токенами.
- Практиковался в хешировании паролей, истечении срока действия токенов и безопасном хранении данных.
- Улучшил понимание аутентификационных потоков в REST API.

---

# 5. Role auth, file upload, Tokens, Pass change, Pagination and Sorting

- Реализовал ролевую авторизацию и управление правами пользователей.
- Добавил загрузку файлов через Cloudinary.
- Практиковался в смене пароля, обновлении токенов, продвинутой пагинации и сортировке.
- Научился совмещать несколько backend-фич в одном проекте.

---

# 6. Aggregation pipeline and operators. Document Reference and populate

- Изучил агрегационные пайплайны MongoDB для сложной обработки данных.
- Практиковался в использовании операторов для группировки, фильтрации и преобразования данных.
- Научился работать с ссылками между документами и использовать populate для реляционных данных.

---

# 7. Sockets with chat app

- Реализовал чат-приложение в реальном времени с помощью Socket.io и Express.
- Практиковался в работе с WebSocket-соединениями, рассылке сообщений и управлении чат-комнатами.
- Улучшил понимание real-time коммуникаций в Node.js.

---

# 8. GraphQL

- Изучил основы GraphQL и реализовал API с запросами и мутациями.
- Практиковался в интеграции GraphQL с MongoDB и Express.
- Изучил проектирование схем, резолверы и работу с Apollo Server.

---

# 9. NodeJS with TypeScript

- Перевёл проект Node.js на TypeScript для типизации.
- Практиковался в определении интерфейсов, типов и использовании TypeScript с Express и Mongoose.
- Улучшил качество и поддерживаемость кода благодаря статической типизации.

---

# 10. CORS, Custom Errors, Version Check, Rate Limit

- Реализовал настройку CORS и middleware для обработки ошибок.
- Практиковался в версионировании API и согласовании контента.
- Добавил ограничение частоты запросов для защиты API.

---

# 11. Redis

- Изучил Redis для кэширования, pub/sub и работы со структурами данных в Node.js.
- Практиковался в подключении к Redis, хранении/извлечении данных и использовании продвинутых возможностей Redis.
- Научился оптимизировать производительность и работать с real-time данными.

---

# Параметры .env

- PORT — Порт, на котором запускается сервер Express.
- MONGO_URI — Строка подключения к MongoDB.
- JWT_SECRET — Секретный ключ для подписи/проверки JWT-токенов.
- JWT_LIFETIME — Время жизни JWT-токена (например, 30d).
- NODE_ENV — Режим окружения (development, production и т.д.).
- REDIS_URL — Строка подключения к Redis (для кэша или сессий).
- CLOUDINARY_CLOUD_NAME — Имя облака Cloudinary (для загрузки файлов).
- CLOUDINARY_API_KEY — API-ключ Cloudinary.
- CLOUDINARY_API_SECRET — Секретный ключ Cloudinary.
