# 🚀 Quick Start Guide

## Get Your Bot Running in 5 Minutes!

### Step 1: Get Discord Bot Token (2 mins)
1. Visit: https://discord.com/developers/applications
2. Click "New Application" → Name it "Marvel Rivals Bot"
3. Go to "Bot" tab → Click "Add Bot"
4. Enable "Message Content Intent" under Privileged Gateway Intents
5. Click "Reset Token" → Copy the token (keep it secret!)

### Step 2: Invite to Your Server (1 min)
1. Go to "OAuth2" → "URL Generator"
2. Check: ☑️ bot
3. Check permissions: ☑️ Send Messages, ☑️ Embed Links, ☑️ Read Message History
4. Copy URL at bottom → Paste in browser → Select your server

### Step 3: Deploy to Render (2 mins)
1. Push code to GitHub (create repo first)
2. Go to: https://render.com
3. New + → Web Service → Connect your repo
4. Settings:
   - Build: `npm install`
   - Start: `npm start`
5. Environment → Add variable:
   - Key: `DISCORD_TOKEN`
   - Value: (paste your token)
6. Click "Create Web Service"

### Step 4: Test!
Go to your Discord server and type:
```
!help
!random
!team
```

## 🎮 Most Used Commands

```
!random          → Random hero for you
!team            → Full 6-player team
!vanguard        → Random tank
!duelist         → Random DPS
!strategist      → Random support/healer
```

## 🔥 Pro Tips

- Use `!team` at start of each match for fun random comps
- Challenge friends: everyone does `!random` and plays that hero
- Type `!list` to see all 35+ heroes

## ⚠️ Important

- Keep your Discord token SECRET (never share it!)
- Free Render tier sleeps after 15 mins - use cron-job.org to keep alive
- Bot needs "Message Content Intent" enabled in Discord Developer Portal

## 🆘 Need Help?

**Bot not responding?**
→ Check Message Content Intent is ON
→ Verify bot has permissions in your server

**Bot offline?**
→ Check Render dashboard for errors
→ Verify DISCORD_TOKEN is set correctly

---

Enjoy your Marvel Rivals gaming! 🦸‍♂️🦸‍♀️
