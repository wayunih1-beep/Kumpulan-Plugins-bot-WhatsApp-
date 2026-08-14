const pantun = [
	'Pergi ke pasar membeli ketan,\nPulang membawa buah delima.\nKalau kamu sedang kesepian,\nSini biar aku temani bersama.',
	'Naik sepeda ke kota tua,\nBerhenti sebentar membeli jamu.\nKalau ingin punya teman setia,\nJangan lupa tetap jadi dirimu.',
	'Pergi pagi membawa bekal,\nBekalnya nasi dengan pepaya.\nKalau hati sedang gagal,\nTenang, masih ada hari bahagia.'
]

let handler = async (m, { reply }) => {
	const result = pantun[Math.floor(Math.random() * pantun.length)]
	await reply(`*[ PANTUN ]*\n\n${result}`)
}

handler.command = ['pantun']
handler.limit = true

export default handler
