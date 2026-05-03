<div align="center">

<img src="https://files.catbox.moe/iz9aao.jpg" alt="Queen Ruva AI" width="100%" style="max-width:480px; border-radius:18px; border:3px solid #ffcc00;"/>

<br/>

# 👑 QUEEN RUVA AI — v3.0 · 2026

### *The Most Powerful WhatsApp Bot from Zimbabwe*

[![Version](https://img.shields.io/badge/Version-3.0_Stable-ffcc00?style=for-the-badge&labelColor=000000)](https://github.com/iconictech-dev/Queen-Ruva-AI-Beta)
[![Status](https://img.shields.io/badge/Status-✅_Fully_Operational-00e676?style=for-the-badge&labelColor=000000)](https://github.com/iconictech-dev/Queen-Ruva-AI-Beta)
[![Made in Zimbabwe](https://img.shields.io/badge/Made_in-🇿🇼_Zimbabwe-009a44?style=for-the-badge&labelColor=000000)](https://github.com/iconictech-dev/Queen-Ruva-AI-Beta)
[![Commands](https://img.shields.io/badge/Commands-670+-ffcc00?style=for-the-badge&labelColor=000000)](https://github.com/iconictech-dev/Queen-Ruva-AI-Beta)

<br/>

> **670+ commands · Ultra-fast response · Full dashboard control · Rock-solid stability**

<br/>

<img src="https://files.catbox.moe/hg8g3p.jpg" alt="Queen Ruva Preview" width="48%" style="border-radius:12px; border:2px solid #ffcc00; margin:4px;"/>
<img src="https://files.catbox.moe/qa030z.jpg" alt="Queen Ruva Preview 2" width="48%" style="border-radius:12px; border:2px solid #ffcc00; margin:4px;"/>

</div>

---

## 🔥 What's New in v3.0

| Improvement | Details |
|-------------|---------|
| 🛠️ **All Deployment Bugs Fixed** | Clean installs on every platform |
| ⚡ **Ultra-Fast Response** | Optimized core for instant replies |
| 🖥️ **Full Dashboard Control** | Manage your bot from a web dashboard |
| 📱 **Termux Renewed** | Fresh Android install script — works first time |
| 🔐 **Password-Protected Dashboard** | Your bot, your control, your security |

---

## ✨ Features

### 🤖 AI & Chat
- Advanced AI chatbot — responds to natural messages
- Real-time voice chat integration
- AI-powered text logo & image generation

### 🎵 Media Downloads
- **YouTube** — video & audio download
- **TikTok, Instagram, Facebook, Twitter** — full media support
- High-quality music downloader

### 🛡️ Security & Automation
- Block calls, voice notes, stickers, group links — auto-managed
- Country-code blocking
- Auto-read, auto-react, auto-like status
- Save status updates directly to DM

### 🖥️ Dashboard (NEW)
- Change your bot name remotely
- Live bot status monitor
- Sync commands live — no restart needed
- Control all features from one place
- Password-protected — only you have access

---

## 🚀 Quick Start

### Step 1 — Generate Your Session ID

1. Visit the **Session ID Generator** → [queen-ruva-ai-3d-session-id.onrender.com](https://queen-ruva-ai-3d-session-id.onrender.com/)
2. Enter your WhatsApp number
3. Copy the pairing code
4. On your phone: **WhatsApp → Settings → Linked Devices → Link a Device**
5. Paste the code to connect
6. Open your WhatsApp DM and **download `creds.json`**

### Step 2 — Deploy Your Bot

#### ☁️ Cloud Deploy (Recommended)

[![Deploy to Render](https://img.shields.io/badge/🚀_Deploy_to_Render-46E3B7?style=for-the-badge&logo=render&logoColor=white&labelColor=121217)](https://render.com/deploy)
[![Deploy to Heroku](https://img.shields.io/badge/🐬_Deploy_to_Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white&labelColor=121217)](https://heroku.com/deploy)

Or use **Bot Hosting** (get 40 free coins):
👉 [bot-hosting.net](https://bot-hosting.net/?aff=1430906124802195496)

```
1. Upload your downloaded repo as a ZIP
2. Extract the ZIP on the hosting panel
3. Delete the ZIP file
4. Move all files to root using  ../
5. Start the panel — your bot goes live in seconds!
```

#### 📱 Android (Termux)

```bash
pkg update -y && pkg upgrade -y
pkg install -y git nodejs ffmpeg imagemagick libwebp python yarn
git clone https://github.com/iconictech-dev/Queen-Ruva-AI-Beta.git
cd Queen-Ruva-AI-Beta
npm install && yarn install
node .
```

---

## 🖥️ Dashboard Access

Once your bot is active, you will receive your **dashboard password via WhatsApp DM**.

🔗 **Dashboard Link:** [queen-ruva-dashboard.zone.id](https://queen-ruva-dashboard.zone.id)

From the dashboard you can:
- 🔄 Change your bot name
- 📋 View & sync new commands live
- 📡 Monitor your bot's live status
- ⚙️ Toggle features: block calls, stickers, audio, and more
- 🔑 Change your dashboard password anytime

> ⚠️ **Never share your dashboard password.** It protects full control of your bot.

---

## ⚙️ Configuration (`config.js`)

Key settings to configure before deploying:

```js
// 👤 OWNER SETUP (required)
global.ownernumber = 'YOUR_NUMBER';   // Your WhatsApp number, no +
global.ownername   = "YOUR_NAME";

// 🤖 BOT IDENTITY
global.botname     = "👑 ǫᴜᴇᴇɴ ʀᴜᴠᴀ ᴀɪ ʙᴇᴛᴀ";
global.prefix      = '.';             // Command prefix: .help, .menu, etc.

// 🛡️ SECURITY
global.anticall    = true;   // Block calls (auto-unblocks after 5 min)
global.antilink    = true;   // Delete group links
global.audioblock  = true;   // Block voice notes
global.stickerBlock = true;  // Block stickers

// 🔒 COUNTRY BLOCKING
global.blockedCountryCodes = ["+92", "+91", "+62"];

// 🤖 AUTOMATION
global.chatbot     = true;   // AI replies to normal messages
global.autoreact   = false;  // Auto-react to messages
global.likestatus  = true;   // Auto-like status updates
global.savestatus  = true;   // Save status to DM
```

<details>
<summary>📋 View Full Configuration Reference</summary>

| Variable | Default | Description |
|----------|---------|-------------|
| `global.private` | `true` | Bot works in private/DM chats |
| `global.group` | `true` | Bot works in group chats |
| `global.welcome` | `true` | Welcome message for new group members |
| `global.autoread` | `true` | Auto-mark messages as read |
| `global.anticall` | `true` | Block callers (5-min auto-unblock) |
| `global.audioblock` | `true` | Block voice note senders |
| `global.stickerBlock` | `true` | Block sticker senders |
| `global.antilink` | `true` | Delete WhatsApp group links |
| `global.blockDM` | `false` | Block all incoming DMs |
| `global.autoreact` | `false` | Auto-react to messages |
| `global.likestatus` | `true` | Auto-like status updates |
| `global.chatbot` | `true` | AI replies to normal messages |
| `global.savestatus` | `true` | Save statuses to your DM |
| `global.statusmessg` | `true` | Reply to status updates |
| `global.chataudio` | `false` | Convert AI replies to voice (TTS) |
| `global.backenddynamic` | `false` | Color-changing terminal animation |

</details>

---

## 🛠️ Troubleshooting

| Problem | Solution |
|---------|----------|
| Bot not responding in groups | Set `global.group = true` |
| Bot not responding in DMs | Set `global.private = true` |
| Bot blocking voice notes | Set `global.audioblock = false` |
| Too many automated messages | Disable `chatbot`, `autoreact`, `likestatus` |
| Bot not starting | Check that `creds.json` is in the session folder |

---

## 🔗 Official Links

| Resource | Link |
|----------|------|
| 🌐 Official Website | [codewave-unit-force.zone.id](https://www.codewave-unit-force.zone.id) |
| 👑 Features Page | [View Features](https://www.codewave-unit-force.zone.id/features/queen_ruva) |
| 🤝 Community | [Join Community](https://www.codewave-unit-force.zone.id/features/ruva-community) |
| 📺 YouTube | [youtube.com/@iconictechdev](https://www.youtube.com/@iconictechdev) |
| 💻 GitHub | [iconictech-dev](https://github.com/iconictech-dev) |
| 📞 WhatsApp Channel | [Join Channel](https://whatsapp.com/channel/0029Vb7H0lTGZNCuwI8A7E0i) |

---

<div align="center">

**Developer Contact**

📞 +263 78 611 5435 &nbsp;|&nbsp; ✉️ unitcodewave@gmail.com

<br/>

*Made with ❤️ by **Iconic Tech** — Proudly 🇿🇼 Zimbabwean Innovation*

<br/>

[![GitHub Stars](https://img.shields.io/github/stars/iconictech-dev/Queen-Ruva-AI-Beta?style=for-the-badge&color=ffcc00&labelColor=000000)](https://github.com/iconictech-dev/Queen-Ruva-AI-Beta/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/iconictech-dev/Queen-Ruva-AI-Beta?style=for-the-badge&color=ffcc00&labelColor=000000)](https://github.com/iconictech-dev/Queen-Ruva-AI-Beta/network/members)

</div>
