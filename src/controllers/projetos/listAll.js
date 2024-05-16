import projetoModel from "../../model/projetoModel.js"

const listAll =  async (req, res) => {
    try{
        const projeto = await projetoModel.getAll()
        res.json({
            sucess: "projetos listados com sucesso!",
            projeto
        })
    }catch(e){
        console.log(e)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default listAll