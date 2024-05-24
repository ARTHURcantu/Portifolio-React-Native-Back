import projetoModel from '../../model/projetoModel.js';
import imageModel from '../../model/imageModel.js'
const DeleteProjeto = async (req, res) => {
    try{
        const idprojeto = +req.params.id
        await imageModel.removeProjeto(idprojeto);
        const result = await projetoModel.remove(idprojeto)
        res.json({
            success: `projeto ${idprojeto} apagado com sucesso!`,
            Projeto: result
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default DeleteProjeto