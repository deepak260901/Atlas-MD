const axios = require("axios");

module.exports = {
  name: "truth",
  alias: ["t"],
  desc: "truth",
  cool: 3,
  react: "🙄",
  category: "Fun",
  start: async (Miku, m, { text, prefix }) => {
    const shibam = await axios.get(
      "https://smiling-hosiery-bear.cyclic.app/weeb/truth"
    );

    await Miku.sendMessage(m.from, {image: { url: botImage3 },caption: `*${shibam.data}*`,}, { quoted: m });
  },
};
