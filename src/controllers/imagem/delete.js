import imageModel from '../../model/imageModel.js'

const DeleteImagem = async (req, res) => {
    try{
        const idimagem = +req.params.id
        const result = await imageModel.remove(idimagem)
        res.json({
            success: `imagem ${idimagem} apagada com sucesso!`,
            Imagem: result
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default DeleteImagem