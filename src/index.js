require("dotenv/config")

const { OpenAI } = require('openai');
const { Client, IntentsBitField, EmbedBuilder } = require('discord.js');


const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});


client.on('ready', (c) => {
    console.log(`✅${c.user.username} is ready!✅`)
});

const IGNORE_PREFIX = "!";

const openai = new OpenAI({
        apiKey: process.env.OPENAI_KEY,
})

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if ( message.content.startsWith(IGNORE_PREFIX) ) return;
    if ( !message.mentions.users.has(client.user.id)) return;
    
    const response = await openai.chat.completions
    .create({
        model: '',
        messages: [
            {
                //name:
                role: 'system',
                content: "faund's BOT is a friendly bot)"
            },
            {
                //name:
                role: 'user',
                content: message.content,
            }
        ]
    }).catch((error) => console.error('OpenAI Error:\n', error));

    message.reply(response.choices[0].message.content);
});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand) return;

    if ( interaction.commandName === 'hey') {
        interaction.reply('Hey!');
    }
    
    if ( interaction.commandName === "ward" ) {
        interaction.reply("Suka, buy some wards, all map is black!!!!");
    }
    
    if ( interaction.commandName === "kostya" ) {
        interaction.reply("Kostya, ti pussy");
    }
    
    if ( interaction.commandName === "vitalya" ) {
        interaction.reply("Vitalya, hvatit delat' labi");
    }
    
    if ( interaction.commandName === "viber" ) {
        interaction.reply(`"Як тут в вайбері гіфки відправлять" 
        Костя  Arizend`);
    }
    
    if ( interaction.commandName === "voin" ) {
        interaction.reply("50, нахуй, воинов, блять алло, женщина? я ж приду, ебало тебе сломаю");
    }
    
    if ( interaction.commandName === "otec" ) {
        interaction.reply("Я здесь отец, моё все!");
    }
    
    if ( interaction.commandName === "bible" ) {
        interaction.reply("Сиди в своем Библе, в горах дрочи! Но знай, один пшик и вжик");
    }
    
    if ( interaction.commandName === "mistake" ) {
        interaction.reply("Оп, ошибочка...");
    }
    
    if ( interaction.commandName === "minuta" ) {
        interaction.reply("На минуту позже чем раньше....");
    }
    
    if ( interaction.commandName === "seagull" ) {
        interaction.reply("В мене чайка зламалася, давайте нову");
    }
    if ( interaction.commandName === "polkovnik" ) {
        interaction.reply(`Эдик: Я полковник
        Костя: Посадки штурмовать будешь?
        Эдик: Нет, мне похуй
        ...
        А где моя награда?`);
    }

    if ( interaction.commandName === "numbers" ) {
        const num1 = interaction.options.get('first-number').value;
        const num2 = interaction.options.get('second-number').value;

        console.log(`First number is ${num1}`);
        console.log(`First number is ${num2}`);

        interaction.reply(`The first number is ${num1}.
        The second number is ${num2}.
        The sum of your number is ${num1+num2} and the substract of your numbers is ${num1-num2}`);
    }

    if ( interaction.commandName === "embed" ) {
        const embed = new EmbedBuilder()
        .setTitle("Made by faund")
        .setDescription("Also visit my Steam account by clicking on my nickname above)))")
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'This is my first bot', value: 'And it is very cool', inline: true },
            { name: 'Just look at its icon', value: 'Or how it add or substract', inline: true },
            { name: 'Dont know what add here', value: 'And here too)))', inline: true },
        )
        .setColor('Random')
        .setAuthor({ name: 'faund', iconURL: 'https://i.pinimg.com/564x/20/4f/3f/204f3fd4600ba7dd9b3c2eb96f453aae.jpg', url: 'https://steamcommunity.com/id/faund/'})
        .setThumbnail('https://i.pinimg.com/564x/c3/06/cc/c306ccffdc3d21aabb3bf9ec0d1baeb0.jpg')
        .setImage('https://i.pinimg.com/236x/28/8c/e9/288ce988715d88b4abe039c2d1682eb0.jpg')
        .setFooter( { text: 'What are you looking for?' })

        interaction.reply({ embeds: [embed] });
    }
});


client.login(process.env.TOKEN);
