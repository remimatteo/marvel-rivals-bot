# Marvel Rivals Discord Bot 🦸

A feature-rich Discord bot for Marvel Rivals that helps you and your squad pick heroes randomly, build balanced teams, and have fun!

## Features

- 🎲 **Random Hero Picker** - Get a random hero from the entire roster
- 🛡️ **Role-Specific Random** - Pick random Vanguards, Duelists, or Strategists
- 🦸 **Team Builder** - Generate balanced 6-player teams (2-2-2 composition)
- 📋 **Hero List** - View all available heroes organized by role
- ❓ **Help Command** - Easy-to-use command reference

## Commands

| Command | Description |
|---------|-------------|
| `!random` or `!hero` | Get a random hero from any role |
| `!vanguard` | Get a random Vanguard (tank) |
| `!duelist` or `!dps` | Get a random Duelist (damage) |
| `!strategist` or `!support` | Get a random Strategist (healer) |
| `!team` | Generate a full balanced team (2-2-2) |
| `!list` or `!heroes` | List all available heroes |
| `!help` | Show all commands |

## Setup Instructions

### 1. Create Discord Bot

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Click "New Application" and give it a name
3. Go to the "Bot" tab and click "Add Bot"
4. Under "Privileged Gateway Intents", enable:
   - ✅ Message Content Intent
   - ✅ Server Members Intent (optional)
5. Copy your bot token (you'll need this later)

### 2. Invite Bot to Your Server

1. Go to the "OAuth2" > "URL Generator" tab
2. Select scopes:
   - ✅ bot
3. Select bot permissions:
   - ✅ Send Messages
   - ✅ Embed Links
   - ✅ Read Message History
   - ✅ Use External Emojis
4. Copy the generated URL and open it in your browser
5. Select your server and authorize

### 3. Local Setup (Testing)

```bash
# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env and add your Discord token
DISCORD_TOKEN=your_token_here

# Run the bot
npm start
```

### 4. Deploy to Render (24/7 Hosting)

#### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit: Marvel Rivals Discord Bot"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/marvel-rivals-bot.git
git push -u origin main
```

#### Step 2: Deploy on Render

1. Go to [Render.com](https://render.com/) and sign up/login
2. Click "New +" and select "Web Service"
3. Connect your GitHub repository
4. Configure your service:
   - **Name**: `marvel-rivals-bot` (or your choice)
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free (or paid for better reliability)

5. Add Environment Variable:
   - Click "Advanced" or go to "Environment" tab
   - Add: `DISCORD_TOKEN` = `your_bot_token_here`

6. Click "Create Web Service"

#### Step 3: Keep it Running

Render free tier spins down after 15 minutes of inactivity. To keep it alive:

**Option A: Use a cron job service**
- Use [Cron-Job.org](https://cron-job.org/) (free)
- Create a job that hits `https://your-app.onrender.com/health` every 10 minutes

**Option B: Upgrade to paid tier**
- Render's $7/month plan keeps services running 24/7

## Hero Roster

The bot includes all Marvel Rivals heroes with their roles and difficulty ratings:

### 🛡️ Vanguards (8)
Captain America, Doctor Strange, Groot, Hulk, Magneto, Peni Parker, Thor, Venom

### ⚔️ Duelists (19)
Black Panther, Black Widow, Hela, Hawkeye, Iron Fist, Iron Man, Magik, Mister Fantastic, Moon Knight, Namor, Psylocke, Scarlet Witch, Spider-Man, Squirrel Girl, Star-Lord, Storm, The Punisher, Winter Soldier, Wolverine

### 💚 Strategists (8)
Adam Warlock, Cloak & Dagger, Invisible Woman, Jeff the Land Shark, Loki, Luna Snow, Mantis, Rocket Raccoon

## Troubleshooting

**Bot not responding?**
- Check that Message Content Intent is enabled
- Verify bot has proper permissions in your server
- Check Render logs for errors

**Bot keeps going offline?**
- Free Render services sleep after inactivity
- Set up a cron job or upgrade to paid plan

**Commands not working?**
- Make sure you're using the correct prefix: `!`
- Bot needs "Send Messages" and "Embed Links" permissions

## Future Features Ideas

- 🎯 Hero counters/synergies database
- 📊 Track which heroes are picked most
- 🏆 Leaderboard for most played heroes
- 🎮 Integration with Marvel Rivals API (when available)
- 🎲 Mystery hero mode (reveal after round)

## Support

Need help? Found a bug? Want to add a feature?
- Open an issue on GitHub
- Message me on Discord

## License

MIT License - Feel free to modify and use!

---

Made with ❤️ for Marvel Rivals players
