const AMIR = '154241692680192001'
const CERB = '154314726577405953'
const TOKEN = process.env.TOKEN

const Discord = require('discord.js')
const client = new Discord.Client({
  intents: [
    Discord.IntentsBitField.Flags.Guilds,
    Discord.IntentsBitField.Flags.GuildMembers,
    Discord.IntentsBitField.Flags.GuildMessages,
    Discord.IntentsBitField.Flags.MessageContent,
    Discord.IntentsBitField.Flags.GuildVoiceStates,
  ]
})

client.login(TOKEN)
client.on('ready', async () => {
  console.log(`Bot is connected and ready to be used!`);
  const guild = client.guilds.cache.get('154209126925336576');
  const members = await guild.members.fetch()
  members.each(member => console.log(`User ${member.user.username} has ID ${member.id}`));
});

client.on('messageCreate', message => {
  if (message.channelId === '154210023700955136') {
    console.log(`Received Message: ${JSON.stringify(message, null, 2)}`)
  }
})

client.on('voiceStateUpdate', (oldState, newState) => {
  if (newState.member.id === CERB && !oldState.channelId && newState.channelId) {
    console.log(`User ${newState.member.id} joined voice channel ${newState.channelId}`);
  }
});