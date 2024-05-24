import { ZodError } from 'zod'
import ProjetoModel from '../../model/projetoModel.js'

const edit = async(req, res) => {
    try{
        const idprojeto = +req.params.id
        const projetoedit = req.body
        const projeto = {idprojeto, ...projetoedit}
        const result = await ProjetoModel.validateProjetoToUpdate(projeto)
        if(!result.success){
            return res.status(404).json({
                error: `dados de cadastro inválidos`,
                fields: ZodError
            })
        }
        const editProjeto = await ProjetoModel.edit(result.data);
        return res.json({
            success: `Usuário ${editProjeto.idprojeto} editado com sucesso!`,
            projeto: editProjeto
        });
    }catch(e){
        console.log(e)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default edit