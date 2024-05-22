import projetoModel from '../../model/projetoModel.js'

const create = async(req, res) => {
    try {
        const projeto = req.body

        const result = projetoModel.validateProjetoToCreate(projeto)
        console.log(`num2 ${JSON.stringify(result)}`);

        if(!result.success){
            
            return res.status(404).json({
                error: `dados de cadastro inválidos`,
                fields: result.error
            })
        }
        const newUser = await projetoModel.create(result.data);
        console.log("num5  "+ "passou por aq")
        return res.json({
            success: `Usuário ${newUser.id} criado com sucesso!`,
            user: newUser
        })
    } catch (error) {
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!',
            message:error
        })
    }
    
}

export default create