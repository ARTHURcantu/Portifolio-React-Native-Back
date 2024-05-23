import projetoModel from '../../model/projetoModel.js'

const create = async(req, res) => {
    try {
        const projeto = req.body
        const result = await projetoModel.validateProjetoToCreate(projeto)

        if(!result.success){
            
            return res.status(404).json({
                error: `dados de cadastro inválidos`,
                fields: result.error
            })
        }

        const newUser = await projetoModel.create(result.data);
        return res.json({
            success: `Usuário ${newUser.id} criado com sucesso!`,
            projeto: newUser
        })
    } catch (error) {
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!',
            message:error
        })
    }
    
}

export default create