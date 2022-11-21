// const moment = require("moment-timezone");
// const { isPremium } = require("./cekprem");

// const ping = function (timestamp, now) {
// 	return moment.duration(now - moment(timestamp * 1000)).asSeconds();
// };

// module.exports = {
// 	name: "test",
// 	alias: ["t"],
// 	category: "owner",
// 	desc: "Bot response in second.",
// 	isSpam: true,
// 	isOwner: true,
// 	async run({ msg, conn }) {
// 		const templateButtons = [
// 			{
// 				index: 1,
// 				urlButton: { displayText: "⭐ Star Baileys on GitHub!", url: "https://github.com/adiwajshing/Baileys" },
// 			},
// 			{ index: 2, callButton: { displayText: "Call me!", phoneNumber: "+1 (234) 5678-901" } },
// 			{
// 				index: 3,
// 				quickReplyButton: {
// 					displayText: "This is a reply, just like normal buttons!",
// 					id: "id-like-buttons-message",
// 				},
// 			},
// 		];

// 		const templateMessage = {
// 			text: "Hi it's a template message",
// 			footer: "Hello World",
// 			templateButtons: templateButtons,
// 			viewOnce: true,
// 		};
// 		await conn.sendMessage(msg.sender, templateMessage);
// 		// await msg.reply(`*_${ping(msg.messageTimestamp, Date.now())} second(s)_*`);
// 	},
// };
