// Snoopy Worker
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
client.login(config.token) // Replace XXXXX with your bot token

client.on('ready', () => {
    // Set bot status to: "Playing with JavaScript"
    client.user.setActivity("with Snoopy!")

    // Alternatively, you can set the activity to any of the following:
    // PLAYING, STREAMING, LISTENING, WATCHING
    // For example:
    // client.user.setActivity("TV", {type: "WATCHING"})
})

// Set the prefix
let prefix = "!!";
client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;
 
  if (message.content.startsWith(prefix + "warn")) {
    message.channel.send("Sorry! Warn command isn't available on SnoopyOS 1.0!");
  } else
  if (message.content.startsWith(prefix + "Warn")) {
    message.channel.send("Sorry! Warn command isn't available on SnoopyOS 1.0!");
  }
});
console.log("Snoopy Worker has loaded!")
client.on("message", message => {
    if (message.author.bot) return;
    // This is where we'll put our code.
    if (message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const user = message.mentions.users.first();
    const talkedRecently = new Set();
    if(command === "say") {
    if(!message.member.roles.some(r=>["Mod", "Head Mod", "Admin", "Head Admin", "Manager", "Maid", "Riley", "Dark", "Frosty"].includes(r.name)) )
        return message.reply("Sorry, you don't have permissions to use this!");
        let text = args.join(" ");
        message.delete();
        message.channel.send(text);
    } else
    if(command === "apicheck") {
      message.channel.send({embed: {
        color: 15844367,
        description: `Api Latency is **${Math.round(client.ping)}**ms`
      }});
    } else
    if(command === "shoot") {
      message.channel.send(`${message.author} shot ${user}! https://gph.is/1f1KOgp`)
    } else
    if(command === "wigsnatch") {
      message.channel.send(`${message.author} snatched ${user}'s weave! https://gph.is/2vuHYua`)
    } else
    if (message.content.startsWith(config.prefix + 'latency')) {
      message.channel.send({embed: {
        color: 15844367,
        description: `Latency is **${message.createdTimestamp - message.createdTimestamp}**ms!`
      }});
    } else
    if (message.content.startsWith(config.prefix + "banmemami")) {
      message.reply("https://imgur.com/a/XNIFUJl")
    }
    if(message.content.startsWith(config.prefix + 'rip')) {
        message.channel.send('https://gph.is/g/4MWX3bx');
    } else
    if(message.content.startsWith(config.prefix + 'cry')) {
        message.channel.send('https://media.giphy.com/media/jnQYWZ0T4mkhCmkzcn/giphy.gif')
    } else
    if (message.content.startsWith(config.prefix + 'tea')) {
        message.channel.send('https://gph.is/1IFn5eh')
    } else
    if (message.content.startsWith(config.prefix + 'channelcount')) {
      message.channel.send({embed: {
        color: 15844367,
        description: `This server has **${client.channels.size}** channels!`
      }});
    }
    if (message.content.startsWith(config.prefix + 'avatar')) {
        message.channel.send(message.author.avatarURL)
    } else
    if (message.content.startsWith(config.prefix + 'membercount')) {
      message.channel.send({embed: {
        color: 15844367,
        description: `This server has **${client.users.size}** members!`
      }});
    } else
    if (message.content.startsWith(config.prefix + "mute")) {
      let role = message.guild.roles.find(r => r.name === "Muted");
    
      // Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
      let member = message.mentions.members.first();
      if(!message.member.roles.some(r=>["Trial Mod", "Mod", "Head Mod", "Admin", "Head Admin", "Manager", "Maid", "Riley", "Dark", "Frosty"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
      // or the person who made the command: let member = message.member;
      
      // Add the role!
      member.addRole(role).catch(console.error)
      message.channel.send(`${user} has been muted by ${message.author}`);
    } else
    if (message.content.startsWith(config.prefix + "unmute")) {
      let role = message.guild.roles.find(r => r.name === "Muted");
    
      // Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
      let member = message.mentions.members.first();
      if(!message.member.roles.some(r=>["Trial Mod", "Mod", "Head Mod", "Admin", "Head Admin", "Manager", "Maid", "Riley", "Dark", "Frosty"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
      // or the person who made the command: let member = message.member;
      
      // Remove a role!
      member.removeRole(role).catch(console.error)
      message.channel.send(`${user} has been unmuted by ${message.author}`);
    } else
    if (message.content.startsWith(config.prefix + "lmao")) {
        message.channel.send("https://gph.is/g/469ALg8")
    } else
    if (message.content.startsWith(config.prefix + "hot")) {
        message.channel.send("https://media.giphy.com/media/JwLY4ToQwe4yA/giphy.gif")
    } else
    if(message.content.startsWith(config.prefix + 'help')) {
        message.channel.send({embed: {
            color: 15844367,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: "Help Embed",
            description: "This is a help embed!",
            fields: [{ 
                name: "Prefix",
                value: "!!"
              },
              {
                name: "Fun Commands",
                value: "asl, cry, rip, avatar, tea, hot, lmao, banmemami."
              },
              {
                name: "Utility Commands",
                value: "help, info, say, apicheck, latency, membercount, channelcount."
              },
              {
                name: "Mod Commands",
                value: "kick, ban, purge, mute, unmute."
              },
              {
                name: "Roleplay Commands",
                value: "shoot, wigsnatch."
              }
            ],
            footer: {
              icon_url: client.user.avatarURL,
              text: "Help Embed"
            }
          }
        });;
    } else 
    if (message.content.startsWith(config.prefix + "asl")) {
      let age = args[0]; // Remember arrays are 0-based!.
      let sex = args[1];
      let location = args[2];
      message.channel.send(`Hello ${message.author.username}, I see you're a ${age} year old ${sex} from ${location}. Wanna date?`);
    } else
    if(message.content.startsWith(config.prefix + 'info')) {
        message.channel.send({embed: {
        color: 15844367,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Snoopy Worker",
    description: "Made by joeywoah!",
    fields: [{
        name: "Server Owner",
        value: "Fwosty#7410"
      },
      {
        name: "Status",
        value: "This bot is in the beta stage since 2/28/2020."
      },
      {
          name: "Is there a problem?",
          value: "Contact joeywoah_#0001!"
      },
      {
          name: "Invite The Bot!",
          value: "[Invite](https://discordapp.com/api/oauth2/authorize?client_id=682455200212058144&permissions=8&scope=bot) Snoopy Worker!"
      },
      {
        name: "Discord.js",
        value: "This bot was made using [Discord.js](https://discord.js.org/#/)!"
      }
    ],
    footer: {
      icon_url: client.user.avatarURL,
      text: "Informational Embed"
    }
  }
    });
    }});

    client.on('message', message => {
        // Voice only works in guilds, if the message does not come from a guild,
        // we ignore it
        if (!message.guild) return;
      
        if (message.content === '/join') {
          // Only try to join the sender's voice channel if they are in one themselves
          if (message.member.voiceChannel) {
            message.member.voiceChannel.join()
              .then(connection => { // Connection is an instance of VoiceConnection
                message.reply('I have connected to the voice channel!');
              })
              .catch(console.log);
          } else {
            message.reply('You need to join a voice channel!');
          }
        }
      });

      client.on("message", async message => {
        // This event will run on every single message received, from any channel or DM.
        
        // It's good practice to ignore other bots. This also makes your bot ignore itself
        // and not get into a spam loop (we call that "botception").
        if(message.author.bot) return;
        
        // Also good practice to ignore any message that does not start with our prefix, 
        // which is set in the configuration file.
        if(message.content.indexOf(config.prefix) !== 0) return;
        
        // Here we separate our "command" name, and our "arguments" for the command. 
        // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
        // command = say
        // args = ["Is", "this", "the", "real", "life?"]
        const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        
        // Let's go with a few common example commands! Feel free to delete or change those.
        
        if(command === "kick") {
          // This command must be limited to mods and admins. In this example we just hardcode the role names.
          // Please read on Array.some() to understand this bit: 
          // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
          if(!message.member.roles.some(r=>["Mod", "Head Mod", "Admin", "Head Admin", "Manager", "Maid", "Riley", "Dark", "Frosty"].includes(r.name)) )
            return message.reply("Sorry, you don't have permissions to use this!");
          
          // Let's first check if we have a member and if we can kick them!
          // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
          // We can also support getting the member by ID, which would be args[0]
          let member = message.mentions.members.first() || message.guild.members.get(args[0]);
          if(!member)
            return message.reply("Please mention a valid member of this server");
          if(!member.kickable) 
            return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
          
          // slice(1) removes the first part, which here should be the user mention or ID
          // join(' ') takes all the various parts to make it a single string.
          let reason = args.slice(1).join(' ');
          if(!reason) reason = "No reason provided";
          
          // Now, time for a swift kick in the nuts!
          await member.kick(reason)
            .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
            message.channel.send({embed: {
              color: 3447003,
              author: {
                name: client.user.username,
                icon_url: client.user.avatarURL
              },
              title: "Kick Action",
              fields: [{
                  name: "Moderator",
                  value: `${message.author.tag}`
                },
                {
                  name: "User Banned",
                  value: `${member.user.tag}`
                },
                {
                  name: "Reason",
                  value: `${reason}`
                }
              ],
              timestamp: new Date(),
              footer: {
                icon_url: client.user.avatarURL,
                text: "Snoopy Worker"
              }
            }
          });
      
        }
        
        if(command === "ban") {
          // Most of this command is identical to kick, except that here we'll only let admins do it.
          // In the real world mods could ban too, but this is just an example, right? ;)
          if(!message.member.roles.some(r=>["Mod", "Head Mod", "Admin", "Head Admin", "Manager", "Maid", "Riley", "Dark", "Frosty"].includes(r.name)) )
            return message.reply("Sorry, you don't have permissions to use this!");
          
          let member = message.mentions.members.first();
          if(!member)
            return message.reply("Please mention a valid member of this server");
          if(!member.bannable) 
            return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");
      
          let reason = args.slice(1).join(' ');
          if(!reason) reason = "No reason provided";
          
          await member.ban(reason)
            .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
            message.channel.send({embed: {
              color: 3447003,
              author: {
                name: client.user.username,
                icon_url: client.user.avatarURL
              },
              title: "Ban Action",
              fields: [{
                  name: "Moderator",
                  value: `${message.author.tag}`
                },
                {
                  name: "User Banned",
                  value: `${member.user.tag}`
                },
                {
                  name: "Reason",
                  value: `${reason}`
                }
              ],
              timestamp: new Date(),
              footer: {
                icon_url: client.user.avatarURL,
                text: "Snoopy Worker"
              }
            }
          });
        }
        
        if(command === "purge") {
          // This command removes all messages from all users in the channel, up to 100.
          if(!message.member.roles.some(r=>["Mod", "Head Mod", "Admin", "Head Admin", "Manager", "Maid", "Riley", "Dark", "Frosty"].includes(r.name)) )
            return message.reply("Sorry, you don't have permissions to use this!");
          // get the delete count, as an actual number.
          const deleteCount = parseInt(args[0], 10);
          
          // Ooooh nice, combined conditions. <3
          if(!deleteCount || deleteCount < 2 || deleteCount > 100)
            return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
          
          // So we get our messages, and delete them. Simple enough, right?
          const fetched = await message.channel.fetchMessages({limit: deleteCount});
          message.channel.bulkDelete(fetched)
            .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
        }
      });
