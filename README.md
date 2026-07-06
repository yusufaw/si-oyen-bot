# si-oyen-bot (mbot)

A Telegram bot that meows and learns custom auto-responses per chat.

Built with Node.js, [Telegraf](https://github.com/telegraf/telegraf), and Express, with MongoDB (via Mongoose) for storage. Make sure you have a MongoDB instance running before starting the bot.

## Features

- **Custom responses** — teach the bot keyword-based replies per chat:
  - `/respon [keyword] [response]` — add a response for a keyword (adding again appends another variant, and one is picked at random when triggered)
  - `/respon [keyword] []` — delete all responses for a keyword
  - `/list` — list the saved keywords for the current chat
- **Meows** — any message containing "oyen" gets a reply that grows into a random string of `Miaaw miaaw miaaw...`
- **Misc** — `/start` and `hi` reply with `Miaaw!`, `/help` asks for a sticker, stickers get a 👍, and `/about` links to this repo
- **Health check** — an Express server responds on `/` so you can verify the bot is up

## Project structure

```
app.js                  # Bot commands, message handlers, Express app
bin/www                 # HTTP server entry point (default port 3000)
lib/config.js           # Reads env vars
lib/db.js               # MongoDB connection
model/CommandModel.js   # Mongoose schema for saved responses
service/CommandService.js # CRUD for saved responses
routes/index.js         # Health-check route
```

## Setup

1. Install dependencies:

   ```sh
   npm install
   ```

2. Create a `.env` file (see [example.env](example.env)) with:

   | Variable | Description |
   | --- | --- |
   | `MBOT_TOKEN` | Telegram bot token from [@BotFather](https://t.me/BotFather) |
   | `MONGO_URL` | MongoDB connection string (without the database name) |
   | `MONGO_DB_NAME` | Database name |
   | `PORT` | HTTP server port (optional, defaults to `3000`) |

3. Run the bot:

   ```sh
   npm start
   ```
