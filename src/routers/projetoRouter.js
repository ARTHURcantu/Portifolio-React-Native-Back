import express from "express"
import create from "../controllers/imagem/create.js"
import getById from "../controllers/imagem/getById.js" 
// import listAll from "../controllers/imagem/listAll.js"

const router = express.Router()

// router.get('/', listAll)
router.get('/:id', getById)
router.post('/',create)
// router.put('/:id',)
// router.delete('/:id',)




export default router