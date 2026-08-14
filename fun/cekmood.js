const moods = [
	'Bahagia banget 😄',
	'Santai 😌',
	'Mager 😴',
	'Semangat 🔥',
	'Ngantuk 💤',
	'Random 🤪',
	'Galau 😶',
  'Galau bnget butuh lelaki penghibur🤤'
	'Produktif 💪'
]

let handler = async (m, { reply }) => {
	const mood = moods[Math.floor(Math.random() * moods.length)]
	await reply(`*[ CEK MOOD ]*\n\nMood kamu hari ini: ${mood}`)
}

handler.command = ['cekmood', 'mood']
handler.limit = true

export default handler
