const axios = require("axios");
const { e } = require("mathjs");
const util = require("util");
const moment = require("moment-timezone");

module.exports = {
	name: "cekresi",
	alias: ["cekresi"],
	category: "other",
	desc: "cek resi",
	isSpam: true,
	async run({ msg, conn }, { q, map, args }) {
		await msg.reply("Sedang Memproses...");
		if (!q) return await msg.reply("No AWB detected");
		await axios({
			method: "get",
			headers: {
				origin: "https://www.tokopedia.com",
			},
			url: "https://orchestra.tokopedia.com/orc/v1/microsite/tracking?airwaybill=" + q,
		}).then(async (res) => {
			var data = res.data.data[0];
			if (data.error_message == "AWB Not Found") return await msg.reply("AWB Not Found / Invalid");
			// console.log(util.inspect(res.data, false, null, true));
			var text = `Status Pengiriman\n\nNomor Resi : ${data.airwaybill}\nStatus : ${data.status}\nKurir : ${
				data.courier
			}\nLayanan : ${data.service}\n\nTracking ${data.courier}\n${(function trackingdetail() {
				var res = [];
				// console.log(data.shipping_data[0])
				data.shipping_data.forEach((e) => {
					e.forEach((e1) => {
						res.push(`${e1.title} : ${e1.content}`);
					});
				});
				return res.join("\n");
			})()}\n\nPenjual : ${data.seller.name}, ${data.seller.address}\nPembeli : ${data.buyer.name}, ${
				data.buyer.address
			}\n\nTracking\n${(function trackloop() {
				var res = [];
				data.tracking_data.forEach((element) => {
					res.push(
						`*${element.tracking_time}*\n${element.message}${
							element.partner_name != "" ? "\nKurir : " + element.partner_name : ""
						}`
					);
				});
				return res.join("\n\n");
			})()}`;
			await msg.reply(text);
		});
		// await msg.reply(`*_${ping(msg.messageTimestamp, Date.now())} second(s)_*`);
	},
};
