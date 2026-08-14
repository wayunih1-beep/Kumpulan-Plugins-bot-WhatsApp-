let handler = async (m, { reply }) => {
    const answers = [
        'Iya, kemungkinan besar.',
        'Tidak.',
        'Sepertinya iya.',
        'Sepertinya tidak.',
        'Pasti.',
        'Jangan terlalu berharap.',
        'Coba tanya lagi nanti.',
        'Kemungkinannya sangat besar.'
    ]

    await reply(
        `🎱 *8Ball*\n\n${answers[Math.floor(Math.random() * answers.length)]}`
    )
}

handler.command = ['8ball']
handler.limit = true

module.exports = handler
