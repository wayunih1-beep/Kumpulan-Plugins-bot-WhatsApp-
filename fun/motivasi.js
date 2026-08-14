const texts = [
	'Jangan berhenti hanya karena hari ini sulit.',
	'Pelan-pelan tetap termasuk maju.',
	'Kesalahan bukan akhir, tapi bagian dari proses.',
	'Kamu tidak harus sempurna untuk mulai.',
	'Fokus pada progres, bukan perbandingan.',
	'Hari buruk bukan berarti hidupmu buruk.',
	'Kalau lelah, istirahat. Jangan menyerah.'
]

let handler = async (m, { reply }) => {
	const text = texts[Math.floor(Math.random() * texts.length)]
	await reply(`*[ MOTIVASI ]*\n\n${text}`)
}

handler.command = ['motivasi']
handler.limit = true

export default handler
