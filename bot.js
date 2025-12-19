const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
require('dotenv').config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

// Marvel Rivals Heroes Database
const heroes = {
    vanguard: [
        { name: 'Captain America', difficulty: 'Easy' },
        { name: 'Doctor Strange', difficulty: 'Hard' },
        { name: 'Groot', difficulty: 'Easy' },
        { name: 'Hulk', difficulty: 'Easy' },
        { name: 'Magneto', difficulty: 'Medium' },
        { name: 'Peni Parker', difficulty: 'Hard' },
        { name: 'Thor', difficulty: 'Medium' },
        { name: 'Venom', difficulty: 'Medium' }
    ],
    duelist: [
        { name: 'Black Panther', difficulty: 'Hard' },
        { name: 'Black Widow', difficulty: 'Medium' },
        { name: 'Hela', difficulty: 'Easy' },
        { name: 'Hawkeye', difficulty: 'Medium' },
        { name: 'Iron Fist', difficulty: 'Hard' },
        { name: 'Iron Man', difficulty: 'Easy' },
        { name: 'Magik', difficulty: 'Medium' },
        { name: 'Mister Fantastic', difficulty: 'Hard' },
        { name: 'Moon Knight', difficulty: 'Medium' },
        { name: 'Namor', difficulty: 'Hard' },
        { name: 'Psylocke', difficulty: 'Hard' },
        { name: 'Scarlet Witch', difficulty: 'Hard' },
        { name: 'Spider-Man', difficulty: 'Hard' },
        { name: 'Squirrel Girl', difficulty: 'Easy' },
        { name: 'Star-Lord', difficulty: 'Easy' },
        { name: 'Storm', difficulty: 'Medium' },
        { name: 'The Punisher', difficulty: 'Easy' },
        { name: 'Winter Soldier', difficulty: 'Medium' },
        { name: 'Wolverine', difficulty: 'Easy' }
    ],
    strategist: [
        { name: 'Adam Warlock', difficulty: 'Hard' },
        { name: 'Cloak & Dagger', difficulty: 'Medium' },
        { name: 'Invisible Woman', difficulty: 'Medium' },
        { name: 'Jeff the Land Shark', difficulty: 'Easy' },
        { name: 'Loki', difficulty: 'Hard' },
        { name: 'Luna Snow', difficulty: 'Easy' },
        { name: 'Mantis', difficulty: 'Easy' },
        { name: 'Rocket Raccoon', difficulty: 'Medium' }
    ]
};

const allHeroes = [...heroes.vanguard, ...heroes.duelist, ...heroes.strategist];

// Helper function to get random hero
function getRandomHero(role = null) {
    if (role) {
        const roleHeroes = heroes[role.toLowerCase()];
        if (!roleHeroes) return null;
        return roleHeroes[Math.floor(Math.random() * roleHeroes.length)];
    }
    return allHeroes[Math.floor(Math.random() * allHeroes.length)];
}

// Helper function to get hero role
function getHeroRole(heroName) {
    for (const [role, roleHeroes] of Object.entries(heroes)) {
        if (roleHeroes.some(h => h.name.toLowerCase() === heroName.toLowerCase())) {
            return role.charAt(0).toUpperCase() + role.slice(1);
        }
    }
    return 'Unknown';
}

// Generate balanced team (2-2-2 composition)
function generateBalancedTeam() {
    const team = [];
    
    // 2 Vanguards
    const vanguards = [...heroes.vanguard].sort(() => 0.5 - Math.random()).slice(0, 2);
    team.push(...vanguards.map(h => ({ ...h, role: 'Vanguard' })));
    
    // 2 Duelists
    const duelists = [...heroes.duelist].sort(() => 0.5 - Math.random()).slice(0, 2);
    team.push(...duelists.map(h => ({ ...h, role: 'Duelist' })));
    
    // 2 Strategists
    const strategists = [...heroes.strategist].sort(() => 0.5 - Math.random()).slice(0, 2);
    team.push(...strategists.map(h => ({ ...h, role: 'Strategist' })));
    
    return team;
}

client.on('ready', () => {
    console.log(`✅ Logged in as ${client.user.tag}!`);
    console.log(`🎮 Bot is online and ready for Marvel Rivals!`);
    client.user.setActivity('Marvel Rivals | !help', { type: 'PLAYING' });
});

client.on('messageCreate', async message => {
    if (message.author.bot) return;
    
    const prefix = '!';
    if (!message.content.startsWith(prefix)) return;
    
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    
    // !random or !hero - Random hero picker
    if (command === 'random' || command === 'hero') {
        const hero = getRandomHero();
        const role = getHeroRole(hero.name);
        
        const embed = new EmbedBuilder()
            .setColor('#E62429')
            .setTitle('🎲 Random Hero Selected!')
            .setDescription(`**${hero.name}**`)
            .addFields(
                { name: '🎭 Role', value: role, inline: true },
                { name: '📊 Difficulty', value: hero.difficulty, inline: true }
            )
            .setFooter({ text: `Selected for ${message.author.username}` })
            .setTimestamp();
        
        message.reply({ embeds: [embed] });
    }
    
    // !vanguard - Random Vanguard
    else if (command === 'vanguard') {
        const hero = getRandomHero('vanguard');
        
        const embed = new EmbedBuilder()
            .setColor('#0096FF')
            .setTitle('🛡️ Random Vanguard!')
            .setDescription(`**${hero.name}**`)
            .addFields(
                { name: '📊 Difficulty', value: hero.difficulty, inline: true }
            )
            .setFooter({ text: `Tank up for ${message.author.username}!` })
            .setTimestamp();
        
        message.reply({ embeds: [embed] });
    }
    
    // !duelist - Random Duelist
    else if (command === 'duelist' || command === 'dps') {
        const hero = getRandomHero('duelist');
        
        const embed = new EmbedBuilder()
            .setColor('#FF4655')
            .setTitle('⚔️ Random Duelist!')
            .setDescription(`**${hero.name}**`)
            .addFields(
                { name: '📊 Difficulty', value: hero.difficulty, inline: true }
            )
            .setFooter({ text: `Deal damage for ${message.author.username}!` })
            .setTimestamp();
        
        message.reply({ embeds: [embed] });
    }
    
    // !strategist - Random Strategist
    else if (command === 'strategist' || command === 'support' || command === 'healer') {
        const hero = getRandomHero('strategist');
        
        const embed = new EmbedBuilder()
            .setColor('#FFA500')
            .setTitle('💚 Random Strategist!')
            .setDescription(`**${hero.name}**`)
            .addFields(
                { name: '📊 Difficulty', value: hero.difficulty, inline: true }
            )
            .setFooter({ text: `Support your team, ${message.author.username}!` })
            .setTimestamp();
        
        message.reply({ embeds: [embed] });
    }
    
    // !team - Generate full balanced team
    else if (command === 'team') {
        const team = generateBalancedTeam();
        
        const embed = new EmbedBuilder()
            .setColor('#E62429')
            .setTitle('🦸 Random Team Composition (2-2-2)')
            .setDescription('Here\'s your balanced team!')
            .addFields(
                { 
                    name: '🛡️ Vanguards', 
                    value: team.filter(h => h.role === 'Vanguard')
                        .map(h => `• ${h.name} (${h.difficulty})`)
                        .join('\n'),
                    inline: false 
                },
                { 
                    name: '⚔️ Duelists', 
                    value: team.filter(h => h.role === 'Duelist')
                        .map(h => `• ${h.name} (${h.difficulty})`)
                        .join('\n'),
                    inline: false 
                },
                { 
                    name: '💚 Strategists', 
                    value: team.filter(h => h.role === 'Strategist')
                        .map(h => `• ${h.name} (${h.difficulty})`)
                        .join('\n'),
                    inline: false 
                }
            )
            .setFooter({ text: 'Good luck, team!' })
            .setTimestamp();
        
        message.reply({ embeds: [embed] });
    }
    
    // !list - List all heroes by role
    else if (command === 'list' || command === 'heroes') {
        const embed = new EmbedBuilder()
            .setColor('#E62429')
            .setTitle('🦸 Marvel Rivals Hero Roster')
            .setDescription('All available heroes by role')
            .addFields(
                { 
                    name: `🛡️ Vanguards (${heroes.vanguard.length})`, 
                    value: heroes.vanguard.map(h => h.name).join(', '),
                    inline: false 
                },
                { 
                    name: `⚔️ Duelists (${heroes.duelist.length})`, 
                    value: heroes.duelist.map(h => h.name).join(', '),
                    inline: false 
                },
                { 
                    name: `💚 Strategists (${heroes.strategist.length})`, 
                    value: heroes.strategist.map(h => h.name).join(', '),
                    inline: false 
                }
            )
            .setFooter({ text: `Total: ${allHeroes.length} heroes` })
            .setTimestamp();
        
        message.reply({ embeds: [embed] });
    }
    
    // !help - Show all commands
    else if (command === 'help' || command === 'commands') {
        const embed = new EmbedBuilder()
            .setColor('#E62429')
            .setTitle('🎮 Marvel Rivals Bot Commands')
            .setDescription('Here are all available commands:')
            .addFields(
                { name: '!random (or !hero)', value: 'Get a random hero from any role', inline: false },
                { name: '!vanguard', value: 'Get a random Vanguard (tank)', inline: false },
                { name: '!duelist (or !dps)', value: 'Get a random Duelist (damage)', inline: false },
                { name: '!strategist (or !support)', value: 'Get a random Strategist (healer)', inline: false },
                { name: '!team', value: 'Generate a full balanced team (2-2-2)', inline: false },
                { name: '!list (or !heroes)', value: 'List all available heroes', inline: false },
                { name: '!help', value: 'Show this help message', inline: false }
            )
            .setFooter({ text: 'Have fun gaming!' })
            .setTimestamp();
        
        message.reply({ embeds: [embed] });
    }
});

// Keep alive endpoint for Render
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Marvel Rivals Discord Bot is running! 🦸');
});

app.get('/health', (req, res) => {
    res.json({ 
        status: 'online', 
        uptime: process.uptime(),
        bot: client.user ? client.user.tag : 'Not logged in'
    });
});

app.listen(PORT, () => {
    console.log(`🌐 Web server running on port ${PORT}`);
});

// Login to Discord
client.login(process.env.DISCORD_TOKEN);
