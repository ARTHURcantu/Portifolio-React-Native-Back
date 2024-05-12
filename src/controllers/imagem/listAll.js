import imageModel from "../../model/imageModel.js"

const listAll =  async (req, res) => {
    try{
        const imagem = await imageModel.getAll()
        res.json({
            sucess: "imagens listadas com sucesso!",
            imagem
        })
    }catch(e){
        console.log(e)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default listAll