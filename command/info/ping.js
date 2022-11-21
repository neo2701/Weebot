const moment = require("moment-timezone");
const { isPremium } = require("./cekprem");

const ping = function (timestamp, now) {
	return moment.duration(now - moment(timestamp * 1000)).asSeconds();
};

module.exports = {
	name: "ping",
	alias: ["p", "speed"],
	category: "info",
	desc: "Bot response in second.",
	isSpam: true,
	async run({ msg }) {
		await msg.reply(`*_${ping(msg.messageTimestamp, Date.now())} second(s)_*`);
	},
};
