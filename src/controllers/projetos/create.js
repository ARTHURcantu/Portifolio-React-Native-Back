import projetoModel from '../../model/projetoModel.js'
const create = async () => {
    try {
        const projeto = req.body
        const result = projetoModel.validateProjetoToCreate(projeto)

        if(!result.sucess){
            return res.status(404).json({
                error: `dados de cadastro inválidos`,
                fields: zodError
            })
        }
    } catch (error) {
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
    
}

export default create