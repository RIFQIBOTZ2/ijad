let handler = async m => m.reply(`https://telegra.ph/file/819b81e3af8bbfe8b2b6e.jpg
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler