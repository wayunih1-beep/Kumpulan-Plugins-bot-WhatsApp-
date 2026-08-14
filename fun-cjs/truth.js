let handler = async (m, { reply }) => {
    const questions = [
        'Siapa orang terakhir yang kamu stalk?',
        'Pernah suka sama teman sendiri?',
        'Siapa orang yang paling sering kamu pikirkan?',
        'Apa kebiasaan buruk yang belum bisa kamu hilangkan?',
        'Pernah pura-pura tidak melihat chat seseorang?',
        'Apa hal paling memalukan yang pernah kamu lakukan?',
        'Siapa orang yang ingin kamu ajak ngobrol sekarang?',
        'Apa rahasia kecil yang belum pernah kamu ceritakan?',
        'Pernah bohong kepada orang terdekat?',
        'Apa hal yang paling kamu takutkan?'
    ]

    await reply(
        `🎭 *Truth*\n\n${questions[Math.floor(Math.random() * questions.length)]}`
    )
}

handler.command = ['truth']
handler.limit = true

module.exports = handler
