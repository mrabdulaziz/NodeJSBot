const Telegraf = require("telegraf");

const bot = new Telegraf("");

// bot.start((ctx) => {
//   ctx.reply(
//     ctx.from.first_name +
//       " HAVE ENTERED START and it is" +
//       ctx.updateSubTypes[0]
//   );
// });

// bot.help((ctx) => {
//   ctx.reply("YOU HAVE ENTERED HELP");
// });

// bot.settings((ctx) => {
//   ctx.reply("YOU HAVE ENTERED SETTINGS");
// });

// bot.command("test", (ctx) => {
//   ctx.reply("Hello world");
// });

// bot.hears("Abdulaziz", (ctx) => {
//   ctx.reply("PRO");
// });

// bot.on("text", (ctx) => {
//   ctx.reply("This is the text message");
// });

const helpMessage = `
Say something to me
/start - start the bot
/help - command reference
`;

bot.use((ctx, next) => {
  if (ctx.updateSubTypes[0] == "text") {
    //console.log(ctx.from.username + " said " + ctx.message.text);
    bot.telegram.sendMessage(
      ,
      ctx.from.username + " said " + ctx.message.text
    );
  } else {
    // console.log(ctx.from.username + " said " + ctx.updateSubTypes);
    bot.telegram.sendMessage(
      ,
      ctx.from.username + " said " + ctx.message.updateSubTypes
    );
  }
  console.log(ctx.chat);
  next();
});

bot.start((ctx) => {
  ctx.reply("Hi I am echo bot");
  ctx.reply(helpMessage);
});

bot.help((ctx) => {
  ctx.reply(helpMessage);
});

bot.command("echo", (ctx) => {
  let input = ctx.message.text;
  let inputArray = input.split(" ");
  console.log(inputArray);

  let message = "";

  if (inputArray.length == 1) {
    message = "You said echo";
  } else {
    inputArray.shift();
    message = inputArray.join(" ");
  }

  ctx.reply(message);
});

bot.launch();
