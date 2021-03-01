const Discord = require('discord.js');

const tokens = [
 "TOKEN HERE"
];
const chnls = [
   "VOİCE CHANNEL ID"
 
];

for (let index = 0; index < 1; index++) {
  
    const token = tokens[index];
    const client = new Discord.Client();
    client.login(token);
  
  
    let concon;
  
    client.on('ready', async () => {
        concon = await client.channels.cache.get(chnls[index]).join()
    });
  
    let ses;
    client.on('voiceStateUpdate', async (prev, cur) => {
        const yetkilirol = cur.guild.roles.cache.get("814928252367274065"); // ROLIN yerine yetkili rolünün id'sini yazın.
        if (cur.channel && (cur.channel.id === chnls[index])) {
            if ((cur.member.roles.highest.rawPosition < yetkilirol.rawPosition) && (cur.channel.members.size < 3)) {
                ses = await concon.play('');
            } else if (cur.member.roles.highest.rawPosition > yetkilirol.rawPosition) {
                ses = await concon.play('');
            }
        }
        if (prev.channel && (prev.channel.id === chnls[index]) && (prev.channel.members.size === 1) && ses) ses.end();
    });
}
