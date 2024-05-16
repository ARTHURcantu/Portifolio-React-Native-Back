import express from "express";
import cors from 'cors'

import logger from './middleware/logger.js'
import {HOST, PORT} from './config.js'
import imagemRouter from "./routers/imagemRouter.js";
import projetosRouter from './routers/projetoRouter.js'

const app = express()

app.use(logger)
app.use(cors({
    origin:['http://localhost:3000', 'http://localhost:8081', 'http://meusite.com'],
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    allowedHeaders: ['Content-type']
}))
app.use('/imagem', imagemRouter)
app.use('/projetos', projetosRouter)

app.listen(PORT, () => {
    console.log(`Server running on ${HOST}:${PORT}`)
  })