'use strict';

const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageAttachment } = require('discord.js');

client.on('ready', () => {
client.user.setActivity("ツ", {
  type: "PLAYING"
});

client.user.setPresence({ activity: { name: 'ツ' }, status: 'dnd' }) // idle,dnd(do not distibue),online,offline status
  .then(console.log)
  .catch(console.error)
});

client.on('ready', () => {
client.user.setActivity("ツ", {
  type: "PLAYING"
});
client.user.setPresence({ activity: { name: 'ツ' }, status: 'dnd' })
});

client.on('ready', () => {
  console.log('Succefully Logged!');
});

// CMDS START
// Create an event listener for messages
client.on('message', message => {
  // If the message is "-avatar"
  if (message.content === 'avatar') {
    // Send the user's avatar URL
    message.reply(message.author.displayAvatarURL());
  }
});


client.on('message', message => {
  // If the message is '!rip'
  if (message.content === 'rip') {
    // Create the attachment using MessageAttachment
    const attachment = new MessageAttachment('https://i.imgur.com/w3duR07.png');
    // Send the attachment in the message channel
    message.channel.send(attachment);
  }
});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(ch => ch.name === 'YOUR CHANNEL NAME');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome ${member} !`);
});

client.login('YOUR BOT TOKEN');
