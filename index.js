const emojis = [
  {
    "emoji": "💬",
    "name": "balão de fala"
  },
  {
    "emoji": "💭",
    "name": "balão de pensamento"
  },
  {
    "emoji": "💪",
    "name": "bíceps flexionados"
  },
  {
    "emoji": "😱",
    "name": "carinha gritando de medo"
  },
  {
    "emoji": "😉",
    "name": "carinha piscando"
  },
  {
    "emoji": "😊",
    "name": "carinha risonha e olhos sorridentes"
  },
  {
    "emoji": "💛",
    "name": "coração amarelo"
  },
  {
    "emoji": "💙",
    "name": "coração azul"
  },
  {
    "emoji": "🤍",
    "name": "coração branco"
  },
  {
    "emoji": "🧡",
    "name": "coração laranja"
  },
  {
    "emoji": "🤎",
    "name": "coração marrom"
  },
  {
    "emoji": "🖤",
    "name": "coração preto"
  },
  {
    "emoji": "💜",
    "name": "coração roxo"
  },
  {
    "emoji": "💚",
    "name": "coração verde"
  },
  {
    "emoji": "❤️",
    "name": "coração vermelho"
  },
  {
    "emoji": "👇",
    "name": "dorso de mão com indicador apontando para baixo"
  },
  {
    "emoji": "👉",
    "name": "dorso de mão com indicador apontando para a direita"
  },
  {
    "emoji": "⭐",
    "name": "estrela"
  },
  {
    "emoji": "🤩",
    "name": "estrelas nos olhos"
  },
  {
    "emoji": "🚀",
    "name": "foguete"
  },
  {
    "emoji": "🔥",
    "name": "incêndio"
  },
  {
    "emoji": "💡",
    "name": "lâmpada"
  },
  {
    "emoji": "🚨",
    "name": "luz de viatura policial"
  },
  {
    "emoji": "👀",
    "name": "olhos"
  },
  {
    "emoji": "⬇",
    "name": "seta para baixo"
  },
  {
    "emoji": "☀️",
    "name": "sol"
  }
]

function renderEmoji (data) {
  const { emoji, name } = data

  const div = document.createElement('div')
  div.setAttribute('class', 'emoji')
  div.setAttribute('title', name)
  div.innerText = emoji

  div.addEventListener('click', (emojiSelected) => {
      navigator.clipboard.writeText(emojiSelected.target.innerText);
  })

  const element = document.querySelector('#emojis')
  element.appendChild(div)
}

function renderEmojis (emojis) {
  for (const emoji of emojis) {
    renderEmoji(emoji)
  }
}

window.addEventListener('load', () => {
  renderEmojis(emojis)
})