const express = require('express')
const rendertron = require('rendertron-middleware')
const PORT = process.env.PORT || 3000
const app = express()

const BOTS = rendertron.botUserAgents.concat('googlebot')
const BOT_UA_PATTERN = new RegExp(BOTS.join('|'), 'i')

app.use(rendertron.makeMiddleware({
  proxyUrl: 'https://rendertron-dev.herokuapp.com/render',
  userAgentPattern: BOT_UA_PATTERN
}))

app.use(express.static('public'))

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)
})
