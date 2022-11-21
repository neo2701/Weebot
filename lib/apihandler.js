const { json } = require("body-parser");
const express = require("express");
const axios = require("axios");
const router = express.Router();
let dbkelas = require("../database/kelas.json");

const handler = function (conn) {
	// conn.sendMessage("6285155446285@s.whatsapp.net", {
	// 	text: "Api Nyala",
	// });

	router.post("/post", async function (req, res) {
		// console.log(req.body);

		var data = req.body;

		if (data.method == "sendMessage") {
			if (!data.text) {
				return res.status(400).send(
					JSON.stringify({
						reason: "Text not declared",
					})
				);
			}
			var number = `${data.number}@s.whatsapp.net`;
			var msg = await conn.sendMessage(number, {
				text: data.text,
			});
			console.log(msg);

			return res.send(
				JSON.stringify({
					status: 200,
					msg: msg,
				})
			);
		}
		if (data.method == "newTugas") {
			if (!data.kelas) return res.status(400).send();
			var kelas = dbkelas.filter((e) => e.kelas == data.kelas.toLowerCase())[0];
			if (!kelas) return res.status(400).send();

			// var number = `${data.number}@s.whatsapp.net`;
			let text;
			text = `*Ada tugas baru nichh...* \n\n${data.tugas}\n\nUntuk melihat list semua tugas klik tombol dibawah!`;
			// console.log(text);
			let buttons = [{ buttonId: "!tugas", buttonText: { displayText: "List Tugas" }, type: 1 }];
			kelas.chats.forEach(async (chatid) => {
				await conn.sendMessage(chatid, {
					text: text,
					buttons: buttons,
				});
			});

			return res.send({
				status: "success",
			});

			// res.send();

			// if (res.data.status == 200) await msg.reply(text);
		}

		// res.send(
		// 	JSON.stringify(
		// 		conn.sendMessage("6285155446285@s.whatsapp.net", {
		// 			text: "Api Get Text",
		// 		})
		// 	)
		// );
		if (!data.method) {
			res.status(400).send({
				reason: "bad request",
			});
		}
	});

	return router;
};

module.exports = {
	router: handler,
};
