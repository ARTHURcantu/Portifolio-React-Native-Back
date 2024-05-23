import { ZodError } from 'zod'

import imageModel from '../../model/imageModel.js'

const edit = async(req, res) => {
    try{
        const imagem = req.body
        imagem.projeto_idprojeto = +imagem.projeto_idprojeto
        const result = await imageModel.validateImageToUpdate(imagem)
        if(!result.success){
            return res.status(404).json({
                error: `dados de cadastro inválidos`,
                fields: ZodError
            })
        }

        const editimage = await imageModel.edit(result.data);
        return res.json({
            success: `Usuário ${editimage.idimagem} editado com sucesso!`,
            imagem: editimage
        });
    }catch(e){
        console.log(e)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default edit