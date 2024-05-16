import projetoModel from "../../model/projetoModel.js"
const getById = async(req, res) => {
    try{
        const id = req.params.id
        const user = await projetoModel.getById(+id)
        res.json({
            success: `Usuário ${id} encontrado com sucesso!`,
            user
        })
    }catch(e){
        console.log(e)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default getById