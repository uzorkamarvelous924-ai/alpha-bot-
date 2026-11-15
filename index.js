
const commands = {
  "!menu": `
🤖 ALPHA BOT MENU

!menu - Show commands
!help - Get help
!rules - Group rules
!joke - Get a joke
!quiz - Start a quiz
!welcome - Welcome message
!admins - Admin information
!info - Group information
`,

  "!help": "🤖 Alpha Bot is ready to help!",

  "!rules": `
📜 GROUP RULES
1. Respect everyone.
2. No insults or bullying.
3. No spam.
4. No unwanted links.
5. Keep the group peaceful.
`,

  "!joke": "😂 Why did the computer go to the doctor? It had a virus!",

  "!quiz": "🧠 QUIZ: What is the capital of Nigeria? 🇳🇬",

  "!welcome": "🎉 Welcome to the group! Enjoy your stay with Alpha Bot!",

  "!admins": "👑 Admin information will be available when connected to a supported group system.",

  "!info": "ℹ️ Alpha Bot project is being developed."
};

function handleCommand(message) {
  const command = message.trim().toLowerCase();
  return commands[command] || "❌ Unknown command. Type !menu";
}

console.log("🤖 ALPHA BOT COMMAND SYSTEM READY!");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", (message) => {
  console.log(handleCommand(message));
});
