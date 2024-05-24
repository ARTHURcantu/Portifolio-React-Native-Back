import express from "express"
import create from "../controllers/projetos/create.js"
import getById from "../controllers/projetos/getById.js" 
import listAll from "../controllers/projetos/listAll.js"
import edit from "../controllers/projetos/edit.js"

const router = express.Router()

router.get('/', listAll)
router.get('/:id', getById)
router.post('/',create)
router.put('/:id',edit)
// router.delete('/:id',)




export default router