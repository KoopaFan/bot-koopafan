const prefix = `!`
if (message.content.toLowerCase().startsWith(prefix + "say")) 
 {
  let MSG = message.content.split(" ");
  let Query = MSG.slice(1).join("+");
  let QueryD = MSG.slice(1).join(" ");
  if (!Query) message.reply("Veuillez préciser ce que je dois dire !")
  else
  {
    message.channel.send(QueryD + " -" + message.author.tag)
}
}