let handler = async (m, { reply }) => {
    const jokes = [
        [
            'Kenapa komputer suka ngantuk?',
            'Karena kebanyakan sleep mode.',
            'Kenapa?'
        ],
        [
            'Kenapa programmer susah tidur?',
            'Karena masih kepikiran bug.',
            'Kok bisa?'
        ],
        [
            'Kenapa keyboard tidak pernah marah?',
            'Karena selalu punya space.',
            'Alasannya?'
        ],
        [
            'Kenapa komputer pergi ke dokter?',
            'Karena terkena virus.',
            'Sakit apa?'
        ],
        [
            'Kenapa programmer suka kopi?',
            'Karena tanpa kopi, kode ikut ngantuk.',
            'Kenapa tuh?'
        ]
    ]

    const [question, answer, button] =
        jokes[Math.floor(Math.random() * jokes.length)]

    global.jokeAnswers = global.jokeAnswers || new Map()
    global.jokeAnswers.set(m.sender, {
        answer,
        time: Date.now()
    })

    await reply(
        `🧸 *Jokes*\n\n${question}\n\n` +
        `Ketik *.jokeanswer* untuk melihat jawaban.\n` +
        `Petunjuk tombol: *${button}*`
    )
}

handler.command = ['jokes', 'joke']
handler.limit = true

module.exports = handler
