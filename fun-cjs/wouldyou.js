let handler = async (m, { reply }) => {
    const questions = [
        'Punya uang banyak tapi tidak punya waktu, atau punya banyak waktu tapi uang sedikit?',
        'Bisa membaca pikiran atau melihat masa depan?',
        'Hidup tanpa musik atau tanpa film?',
        'Selalu jujur atau selalu beruntung?',
        'Tinggal di kota atau di desa?',
        'Bisa teleportasi atau bisa terbang?',
        'Punya banyak teman atau satu sahabat terbaik?',
        'Terkenal atau kaya raya?'
    ]

    await reply(
        `🤔 *Would You Rather*\n\n${questions[Math.floor(Math.random() * questions.length)]}`
    )
}

handler.command = ['wouldyou', 'wyr']
handler.limit = true

module.exports = handler
