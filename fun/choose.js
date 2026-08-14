let handler = async (m, { text, reply }) => {
	const options = String(text || '')
		.split('|')
		.map(v => v.trim())
		.filter(Boolean)

	if (options.length < 2) {
		return reply(
			'Masukkan minimal 2 pilihan.\n\n' +
			'Contoh:\n' +
			'.choose nasi | mie'
		)
	}

	const result =
		options[Math.floor(Math.random() * options.length)]

	await reply(
		`*[ CHOOSE ]*\n\n` +
		`Pilihan : ${result}`
	)
}

handler.command = ['choose']
handler.limit = true

export default handler
