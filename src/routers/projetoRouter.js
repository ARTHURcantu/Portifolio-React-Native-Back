import express from "express"
import create from "../components/imagem/Create"
import getById from "../components/imagem/getById"
import listAll from "../components/imagem/ListAll"


const router = express.router()

router.get('/', listAll)
router.get('/:id', getById)
router.post('/',create)
router.put('/:id',)
router.delete('/:id',)




export default projetoRouter