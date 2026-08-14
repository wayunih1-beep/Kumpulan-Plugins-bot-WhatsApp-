let handler = async (m, { sock, reply, participants }) => {
	if (!participants?.length) {
		return reply('Tidak ada member yang bisa dipilih.')
	}

	const members = participants
		.map(p => p.jid)
		.filter(Boolean)

	const target =
		members[Math.floor(Math.random() * members.length)]

	await sock.sendMessage(
		m.chat,
		{
			text:
				`*[ NOM ]*\n\n` +
				`@${target.split('@')[0]} sedang dimakan 🍴`,
			mentions: [target]
		},
		{ quoted: m }
	)
}

handler.command = ['nom']
handler.group = true
handler.limit = true

export default handler
