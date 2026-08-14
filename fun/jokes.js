import { generateWAMessageFromContent } from '@whiskeysockets/baileys'

const jokes = [
	{
		question: 'Kenapa komputer suka ngantuk?',
		button: 'Kenapa?',
		answer: 'Karena kebanyakan sleep mode. 😜'
	},
	{
		question: 'Kenapa programmer susah tidur?',
		button: 'Kok bisa?',
		answer: 'Karena masih kepikiran bug. 😈'
	},
	{
		question: 'Kenapa keyboard tidak pernah marah?',
		button: 'Alasannya?',
		answer: 'Karena selalu punya space. 😭'
	},
	{
		question: 'Kenapa WiFi suka menghilang?',
		button: 'Serius?',
		answer: 'Karena dia butuh ruang. 🗿'
	},
	{
		question: 'Kenapa programmer suka kopi?',
		button: 'Kenapa tuh?',
		answer: 'Karena tanpa kopi, kode ikut ngantuk. ☕'
	},
	{
		question: 'Kenapa komputer pergi ke dokter?',
		button: 'Sakit apa?',
		answer: 'Karena terkena virus. 💀'
	},
	{
		question: 'Kenapa mouse tidak pernah tersesat?',
		button: 'Memangnya kenapa?',
		answer: 'Karena selalu punya cursor. 😭'
	},
	{
		question: 'Kenapa HP suka panas?',
		button: 'Penyebabnya?',
		answer: 'Karena terlalu banyak memikirkan aplikasi. 🔥'
	},
	{
		question: 'Kenapa programmer suka gelap?',
		button: 'Kenapa gelap?',
		answer: 'Biar bug tidak kelihatan. 💀'
	},
	{
		question: 'Kenapa internet tidak pernah lapar?',
		button: 'Kok bisa?',
		answer: 'Karena selalu punya bandwidth. 😭'
	}
]

global.jokeSessions ??= new Map()

const handler = async (m, { sock, reply, usedPrefix }) => {
	const command = String(m.text || '')
		.trim()
		.split(/\s+/)[0]
		.replace(/^[.!#\/]/, '')
		.toLowerCase()

	if (command === 'jokeanswer') {
		const session = global.jokeSessions.get(m.sender)

		if (!session) {
			return reply(
				`Belum ada jokes.\nKetik ${usedPrefix}jokes`
			)
		}

		if (Date.now() - session.time > 5 * 60 * 1000) {
			global.jokeSessions.delete(m.sender)

			return reply(
				`Jokes sudah kedaluwarsa.\nKetik ${usedPrefix}jokes lagi.`
			)
		}

		await reply(
			` Jawabannya\n\n${session.answer}`
		)

		global.jokeSessions.delete(m.sender)
		return
	}

	const joke =
		jokes[Math.floor(Math.random() * jokes.length)]

	global.jokeSessions.set(m.sender, {
		answer: joke.answer,
		time: Date.now()
	})

	const msg = generateWAMessageFromContent(
		m.chat,
		{
			viewOnceMessage: {
				message: {
					messageContextInfo: {
						deviceListMetadata: {},
						deviceListMetadataVersion: 2
					},

					interactiveMessage: {
						body: {
							text:
								` Jokes\n\n` +
								`${joke.question}`
						},

						nativeFlowMessage: {
							buttons: [
								{
									name: 'quick_reply',
									buttonParamsJson:
										JSON.stringify({
											display_text:
												joke.button,
											id:
												`${usedPrefix}jokeanswer`
										})
								}
							]
						}
					}
				}
			}
		},
		{
			userJid: sock.user.id,
			quoted: m
		}
	)

	await sock.relayMessage(
		m.chat,
		msg.message,
		{
			messageId: msg.key.id
		}
	)
}

handler.command = [
	'jokes',
	'joke',
	'jokeanswer'
]

handler.limit = true

export default handler
