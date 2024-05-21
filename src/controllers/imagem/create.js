import { ZodError } from 'zod'

import imageModel from '../../model/imageModel.js'

const create = async(req, res) => {
    try{
        const imagem = req.body
        const result = imageModel.validateImageToCreate(imagem)

        if(!result.success){
            return res.status(404).json({
                error: `dados de cadastro inválidos`,
                fields: ZodError
            })
        }
        const newimage = await imageModel.create(result.data);
        return res.json({
            success: `Usuário ${newUser.id} criado com sucesso!`,
            imagem: newimage
        });
    }catch(e){
        console.log(e)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default create