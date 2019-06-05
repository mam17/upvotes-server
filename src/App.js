import express from 'express'
import routes from './server/routes'

const app = express()
const PORT = 8080
const HOST = '0.0.0.0'

app.use(routes)

app.listen(PORT)

console.log(`Server loaded on port ${PORT} and host ${HOST}!!!`)

export default app