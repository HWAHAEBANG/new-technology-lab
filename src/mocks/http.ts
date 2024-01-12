// 넥스트는 서버에서도 데이터를 필요로 하는데, 그 기능이 아직 불안정해서 노드를 잠시 빌림.
import express, { json } from 'express'
import cors from 'cors'
import { createMiddleware } from '@mswjs/http-middleware'
import { handlers } from './handlers'

const app = express()
const port = 9090

app.use(
  cors({ origin: 'http://localhost:3000', optionsSuccessStatus: 200, credentials: true }),
)
app.use(json())
app.use(createMiddleware(...handlers))

app.listen(port, () => console.log(`Mock Server is running on port: ${port}`))
