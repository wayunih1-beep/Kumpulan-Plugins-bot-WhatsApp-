let handler = async (m, { reply }) => {
    const dares = [
        'Kirim emoji 😂 sebanyak 10 kali.',
        'Sebutkan 3 hal yang kamu sukai.',
        'Kirim pesan terakhir yang kamu copy.',
        'Buat status WhatsApp yang random selama 5 menit.',
        'Kirim satu kalimat tanpa huruf A.',
        'Mention satu teman dan bilang "halo".',
        'Ketik nama crush kamu tanpa sensor.',
        'Kirim emoji favoritmu sebanyak 20 kali.'
    ]

    await reply(
        `🎯 *Dare*\n\n${dares[Math.floor(Math.random() * dares.length)]}`
    )
}

handler.command = ['dare']
handler.limit = true

module.exports = handler
