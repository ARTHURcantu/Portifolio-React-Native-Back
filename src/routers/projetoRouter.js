import express from "express"
import create from "../controllers/projetos/create.js"
import getById from "../controllers/projetos/getById.js" 
import listAll from "../controllers/projetos/listAll.js"
import edit from "../controllers/projetos/edit.js"
import DeleteProjeto from "../controllers/projetos/delete.js"

const router = express.Router()

router.get('/', listAll)
router.get('/:id', getById)
router.post('/',create)
router.put('/:id',edit)
router.delete('/:id',DeleteProjeto)




export default router