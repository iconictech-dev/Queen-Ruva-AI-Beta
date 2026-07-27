const { saveTeleConfig } = require('./modules/telegram');

// ─── YOUR CREDENTIALS ─────────

const BOT_TOKEN = "BOT_TOKEN";

const USER_ID   = "USER_ID";

// ───────────────────────────
saveTeleConfig(BOT_TOKEN, USER_ID)
.catch(() => {});




// Add your Telegram bot token from @BotFather
// and your Telegram user ID from @idbot.
//
// After connecting your details, your Telegram bot
// will sync with Queen Ruva AI in real time.
//
// This allows you to monitor and control your
// WhatsApp bot directly from Telegram without
// needing to use the dashboard website or manually.
//
// Your Telegram bot will support special control
// features made for Queen Ruva AI management.