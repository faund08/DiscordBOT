require('dotenv').config();
const {REST, Routes, ApplicationCommandOptionType} = require('discord.js');

const commands = [
    {
        name: 'hey',
        description: 'Replies with hey!',
    },
    
    {
        name: 'ward',
        description: 'Reminds you to buy some wards',
    },
    
    {
        name: 'kostya',
        description: '...',
    },
    
    {
        name: 'vitalya',
        description: '....',
    },
    
    {
        name: 'viber',
        description: 'viber',
    },
    
    {
        name: 'voin',
        description: 'voin',
    },
    
    {
        name: 'otec',
        description: 'otec',
    },
    
    {
        name: 'bible',
        description: 'bible',
    },
    
    {
        name: 'mistake',
        description: 'mistake',
    },
    
    {
        name: 'minuta',
        description: 'minuta',
    },
    {
        name: 'seagull',
        description: 'seagull',
    },
    {
        name: 'polkovnik',
        description: 'polkovnik',
    },

    {
        name: 'numbers',
        description: 'Adds and substract two numbers',
        options: [
            {
                name: 'first-number',
                description: 'the first number',
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
            {
                name: 'second-number',
                description: 'the second number',
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
        ]
    },
    {
        name: 'embed',
        description: 'Sends an embed!',
    }
];

const rest = new REST({ version : '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Registering slash commands...')
        
     await rest.put(
        Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
        { body: commands }
     )  
     
     console.log(`Slash commands where registered successfully!`);
    } catch (error) {
        console.log(`There was an error: ${error}`);
    }
})();