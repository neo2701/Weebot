const axios = require("axios");
const { e } = require("mathjs");
const moment = require("moment-timezone");

module.exports = {
	name: "tugas",
	alias: ["tugas"],
	category: "other",
	desc: "List Tugas",
	isSpam: true,
	async run({ msg, conn }, { q, map, args }) {
		await msg.reply("Sedang Memproses...");
		await axios({
			method: "get",
			url: "https://script.google.com/macros/s/AKfycbzjvk56bW7regiV92zKVe2jUstcD1LuXkTN_V0jcdeCUTpPvHbnokQtVhArH0nLG6-y/exec?method=getTugas",
		}).then(async (res) => {
			console.log(res.data);
			let text;
			text = `*List Tugas per ${moment().tz("Asia/Jakarta").format("DD/MM/YYYY")}*\n\n${res.data.text.join(
				"\n\n"
			)}`;
			if (res.data.status == 200) await msg.reply(text);
		});
		// await msg.reply(`*_${ping(msg.messageTimestamp, Date.now())} second(s)_*`);
	},
};
