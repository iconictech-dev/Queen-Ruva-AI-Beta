const { fs, path, chalk } = {
  fs: require('fs'),
  path: require('path'),
  chalk: require('chalk')
};

// Queen Ruva AI - Bot identity
global.queenruva = "QUEEN RUVA";

// Command prefix for bot interaction
global.prefix = ".";

// Menu version style
global.iconictechMenu = "v1";

// Bot version
global.version = "3.0";

// Auto recording indicator in chats
global.autoRecording = true;

// Dynamic backend control toggle
global.backenddynamic = false;

// Auto typing indicator in chats
global.autoTyping = true;

// Save viewed status updates
global.savestatus = true;

// Handle unavailable DM behavior
global.dmUnavailable = true;

// Anti message deletion system
global.antidelete = true;

// Anti message edit detection
global.antiedit = true;

// Auto record type behavior toggle
global.autorecordtype = false;

// Auto-read incoming messages
global.autoread = true;

// Auto bio update system
global.autobio = true;

// Welcome message system for groups
global.welcome = true;

// Anti-call protection system
global.anticall = true;

// Block audio messages
global.audioblock = true;

// Block sticker messages
global.stickerBlock = true;

// Anti-link protection in chats
global.antilink = true;

// Audio chat mode
global.chataudio = false;

// Like status automatically
global.likestatus = true;

// Enable chatbot in private chat
global.chatbot = false;

// Enable chatbot in groups
global.chatbotgroup = false;

// Auto reaction system
global.autoreact = false;

// Status message feature toggle
global.statusmessg = false;

// Default status text
global.statusText = "✌️ hope";

global.blockedCountryCodes = ["91,61"];
// Codewave - Iconic Tech portal site for advanced tools and services
global.codewave = 'codewave-unit-force.zone.id';

// SilentByte Platforms Inc - next-generation Iconic Tech experience hub
global.silentbyte_plantforms_inc = 'https://silentbyte-plantforms-inc.zone.id';
// Importance of the dashboard: control your bot through your dashboard after activating the bot
global.queen_ruva_dashboard = 'queen-ruva-dashboard.zone.id';
// Codewave API endpoint - powered by Codewave Unit Force
global.codewaveapis = 'apis-codewave-unit-force.zone.id';

// Owner identity (display name for bot/system)
global.ownername = "ICONICS-TECH";

// Owner / bot contact number (used for system linking & admin control)
global.ownernumber = '263786115435';

// YouTube channel (official presence)
global.ytname = "YouTube: https://www.youtube.com/@iconic-tech";

// GitHub organization / source code hub
global.socialm = "GitHub: https://github.com/iconictech-dev";

// Bot & developer location
global.location = "Zimbabwe, Bulawayo";

// Bot identity
global.botname = "Queen Ruva";
global.packname = "Queen Ruva";

// Author / developer credit
global.author = "Iconic Tech dev";

// Official WhatsApp channel
global.iconic_channel = "https://whatsapp.com/channel/0029Vak32nE4o7qP75htEB3I";

global.mess = {
    antilink: "⚠️ Link sharing is not allowed in this group!",
    owner: "⛔ This command is reserved for the bot owner only!",
    wait: "⏳ Please wait while I process your request...",
    done: "✅ Operation completed successfully!",
    prem: "🌟 This feature requires premium access. Upgrade to unlock!",
    admin: "⛔ You must be an administrator to use this command",
    botAdmin: "🤖 I need admin permissions to perform this action",
    error: "❌ An error occurred. Please try again later",
    group: "💬 This feature is only available in group chats",
    private: "📩 Please use this command in our private chat"
};

const file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`🔄 Updated '${__filename}'`));
    delete require.cache[file];
    require(file);
});
// Load random thumbnail from QueenMedia folder (do not modify unless you know what you're doing)
const thumbnails = ["ruva.jpg", "ruva2.jpg"],
  randomThumb = thumbnails[Math.floor(Math.random() * thumbnails.length)];

global.thumb = fs.readFileSync(path.join("./QueenMedia", randomThumb));

console.log(chalk.green('QUEEN RUVA AI - Configuration loaded successfully.'));

// Read documentation: ./information/doc.txt