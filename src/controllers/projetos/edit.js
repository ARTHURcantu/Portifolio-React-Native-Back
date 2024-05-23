import { ZodError } from 'zod'

import ProjetoModel from '../../model/projetoModel.js'

const edit = async(req, res) => {
    try{
        const projeto = req.body
        const result = await imageModel.validateImageToUpdate(imagem)
        if(!result.success){
            return res.status(404).json({
                error: `dados de cadastro inválidos`,
                fields: ZodError
            })
        }

        const editProjeto = await imageModel.edit(result.data);
        return res.json({
            success: `Usuário ${editProjeto.idprojeto} editado com sucesso!`,
            imagem: editProjeto
        });
    }catch(e){
        console.log(e)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default edit