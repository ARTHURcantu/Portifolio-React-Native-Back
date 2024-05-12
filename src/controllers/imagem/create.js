import imageModel from '../../model/imageModel.js'
const create = () => {
    try{
        const imagem = req.body
        const result = imageModel.validateImageToCreate(imagem)

        if(!result.sucess){
            return res.status(404).json({
                error: `dados de cadastro inválidos`,
                fields: zodError
            })
        }
    }catch(e){
        console.log(e)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default create