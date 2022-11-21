const axios = require("axios");
const { e } = require("mathjs");
const moment = require("moment-timezone");

module.exports = {
	name: "spinkelompok",
	alias: ["sk"],
	use: "<banyak kelompok + nama tugas>",
	category: "other",
	desc: "Untuk Spin Kelompok.",
	isSpam: true,
	async run({ msg, conn }, { q, map, args }) {
		console.log(q, args);
		if (args.length < 1) return await msg.reply("Masukkan Jumlah Kelompok!");
		if (isNaN(args[0])) return await msg.reply("Masukkan Jumlah Kelompok!");
		if (args[0] < 2) return await msg.reply("Minimal 2 Kelompok!");
		await msg.reply("Sedang Memproses...");
		await axios({
			method: "get",
			url:
				"https://script.google.com/macros/s/AKfycbzjvk56bW7regiV92zKVe2jUstcD1LuXkTN_V0jcdeCUTpPvHbnokQtVhArH0nLG6-y/exec?method=grouping&kel=" +
				args[0],
		}).then(async (res) => {
			console.log(res.data);
			console.log(args[1] != null);
			let text;
			if (args[1]) {
				var arr = args.splice(1).join(" ");
				text = `*• Kelompok ${arr}*\n\n${res.data.text.join("\n\n")}\n\nSpinned At : ${moment()
					.tz("Asia/Jakarta")
					.format("DD/MM/YYYY HH:mm:ss")}`;
			} else {
				text = `${res.data.text.join("\n\n")}\n\nSpinned At : ${moment()
					.tz("Asia/Jakarta")
					.format("DD/MM/YYYY HH:mm:ss")}`;
			}
			if (res.data.status == 200) await msg.reply(text);
		});
		// await msg.reply(`*_${ping(msg.messageTimestamp, Date.now())} second(s)_*`);
	},
};
