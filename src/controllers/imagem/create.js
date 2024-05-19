import imageModel from '../../model/imageModel.js'
const create = async() => {
    try{
        const imagem = req.body
        const result = imageModel.validateImageToCreate(imagem)

        if(!result.sucess){
            return res.status(404).json({
                error: `dados de cadastro inválidos`,
                fields: zodError
            })
        }
        const newUser = await userModel.create(result.data);
        return res.json({
            success: `Usuário ${newUser.id} criado com sucesso!`,
            user: newUser
        });
    }catch(e){
        console.log(e)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default create