// config.js
module.exports = {
  token: process.env.DISCORD_TOKEN,
  prefix: require("./prefix.json").prefix || ".",
  enablePrefix: true,
  supportServer: "https://discord.gg/9MVAPpfs8D",

  activity: {
    name: "/help",
    type: "LISTENING", // PLAYING, LISTENING, WATCHING, STREAMING, COMPETING
  },

  express: {
    enabled: true,
    port: 5000,
  },

  emojis: {
    play: "▶️",
    pause: "⏸️",
    stop: "⏹️",
    skip: "⏭️",
    queue: "📜",
    music: "🎵",
    loop: "🔁",
    shuffle: "🔀",
    volume: "🔊",
    success: "✅",
    error: "❌",
    info: "ℹ️", 
  },

  aliases: {
    play: ['p'],
    pause: ['pa'],
    resume: ['r', 'res'],
    skip: ['s', 'next'],
    stop: ['st', 'leave', 'disconnect'],
    volume: ['v', 'vol'],
    queue: ['q'],
    nowplaying: ['np', 'current'],
    shuffle: ['sh', 'mix'],
    loop: ['l', 'repeat'],
    remove: ['rm', 'delete'],
    move: ['mv'],
    clearqueue: ['cq', 'clear'],
    '247': ['24/7', 'stay'],
    stats: ['status', 'info'],
    ping: ['latency'],
    invite: ['inv'],
    support: ['server'],
    help: ['h', 'commands', 'cmd']
  },

  lavalink: {
    nodes: [
      {
        name: "Main Node",
        [span_0](start_span)host: "lava-v4.ajieblogs.eu.org", // Updated[span_0](end_span)
        [span_1](start_span)port: 443,                       // Updated[span_1](end_span)
        [span_2](start_span)password: "https://dsc.gg/ajidevserver", // Updated[span_2](end_span)
        [span_3](start_span)secure: true,                    // Updated[span_3](end_span)
      }
    ]
  }
};

