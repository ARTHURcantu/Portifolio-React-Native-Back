import express from "express";
import {PORT, HOST} from '../.en'
import cors from 'cors'

import logger from "./middleware/logger";

const app = express()

app.use(logger)
app.use(cors({
    origin:['http://localhost:3000', 'http://localhost:8081', 'http://meusite.com'],
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    allowedHeaders: ['Content-type']
}))
app.use('/Imagem', ImagesRouter)
app.use('/Projetos', ProjetosRouter)


