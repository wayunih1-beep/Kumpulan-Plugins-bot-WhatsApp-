const predictions = [
	'Hari ini akan ada kabar menyenangkan.',
	'Ada peluang baru yang akan datang.',
	'Jangan terlalu banyak berpikir negatif.',
	'Seseorang mungkin akan menghubungimu.',
	'Keberuntungan sedang berpihak kepadamu.',
	'Hari ini cocok untuk mencoba sesuatu yang baru.',
	'Jangan terburu-buru mengambil keputusan.'
]

let handler = async (m, { reply }) => {
	const prediction =
		predictions[Math.floor(Math.random() * predictions.length)]

	await reply(
		`*[ RAMALAN ]*\n\n${prediction}`
	)
}

handler.command = ['ramal']
handler.limit = true

export default handler
