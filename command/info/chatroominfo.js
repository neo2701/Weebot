module.exports = {
	name: "chatid",
	alias: [],
	desc: "Get Chat ID!",
	category: "info",
	// isQuoted: true,
	async run({ msg, conn }) {
		let teks = `Current Chat ID is : ${msg.from}`;
		await msg.reply(teks);
	},
};
