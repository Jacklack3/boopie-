exports.run = (client, message, args) => {
    const embed = {
        "color": 4886754,
        "fields": [{
            "name": "pong!",
            "value": new Date().getTime() - message.createdTimestamp + " ms"
        }]
    };
    message.channel.send({embed}).catch(console.error);
}