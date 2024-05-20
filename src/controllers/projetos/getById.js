import projetoModel from "../../model/projetoModel.js"
const getById = async(req, res) => {
    try{
        const id = req.params.id
        const projeto = await projetoModel.getById(+id)
        res.json({
            success: `projeto ${id} encontrado com sucesso!`,
            projeto
        })
    }catch(e){
        console.log(e)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default getById