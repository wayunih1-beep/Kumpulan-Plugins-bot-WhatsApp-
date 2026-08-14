const facts = [
	'Gurita memiliki tiga jantung.',
	'Madu dapat bertahan sangat lama jika disimpan dengan baik.',
	'Pisang secara botani termasuk buah beri.',
	'Jantung manusia berdetak ribuan kali setiap hari.',
	'Kucing memiliki kemampuan mendengar frekuensi yang sangat tinggi.',
	'Air panas dapat membeku lebih cepat dalam kondisi tertentu.'
]

let handler = async (m, { reply }) => {
	const fact = facts[Math.floor(Math.random() * facts.length)]
	await reply(`*[ RANDOM FACT ]*\n\n${fact}`)
}

handler.command = ['fact', 'fakta']
handler.limit = true

export default handler
