import imageModel from '../../model/imageModel.js'
const getById = async(req, res) => {
    try{
        const id = req.params.id
        const imagem = await imageModel.getById(+id)
        res.json({
            success: `imagem ${id} encontrada com sucesso!`,
            imagem
        })
    }catch(e){
        console.log(e)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default getById





