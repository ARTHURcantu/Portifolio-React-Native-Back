import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient()

const projetoScrema = z.object({
    idprojeto: z.number({
        required_error: "ID é obrigatório.",
        invalid_type_error: "O ID deve ser um número inteiro.",
      }),
    Nome: z.string({
        required_error: "O projeto tem nome obrigatório.",
        invalid_type_error: "O projeto deve ser uma string.",
      })
      .min(3, {message: 'o nome deve ter no mnimo 3 letras.'})
      .max(200, {message: 'O avatar deve ter no máximo 200 caracteres.'}),
    imagem__capa: z.string({
        required_error: "A imagem de capa é obrigatoria",
        invalid_type_error: "A imagem deve ser uma string",
      })
      .max(2000, {message: 'O link deve ter no maximo 2000 caracteres'})
    
})

const validateProjetoToCreate = (projeto) => {
  const partialProjetoScrema = projetoScrema.partial({idprojeto:true, Nome:true, imagem__capa: true})
  return partialProjetoScrema.safeParse(projeto)
}

const validateProjetoToUpdate = (projeto) => {
  const partialProjetoScrema = projetoScrema.partial({idprojeto: true, url:true, imagem__capa: true})
  return partialProjetoScrema.safeParse(projeto)
}

const getAll = async () => {
  return await prisma.projeto.findMany({
      select: {
          idprojeto: true,
          Nome: true,
          imagem__capa: true,
          data:false
      }
  })
}

const getById = async (id) => {
  try{
  return await prisma.projeto.findUnique({
      where: {
        idprojeto: id
      },
      select: {
        idprojeto: true,
        Nome: true,
        imagem__capa: true,
        Data: false
      }
  })
}catch(e){
  console.log(e)
}
}

const create = async (project) => {
  return await prisma.projeto.create({
      data: project,
      select: {
        idprojeto: false,
        Nome: true,
        imagem__capa: true
      }
  })
}

const remove = async (id) => {
  return await prisma.projeto.delete({
      where: {
          idprojeto: id
      },
      select: {
        idprojeto: true,
        Nome: true,
        imagem__capa:true
      }
  })
}

const edit = async (projeto) => {
  return await prisma.projeto.update({
      where: {
          idprojeto: projeto.idprojeto
      },
      data: projeto,
      select: {
        idprojeto: true,
        Nome: true
      }
  })
}

export default { getAll, getById, create, remove, edit, validateProjetoToCreate, validateProjetoToUpdate}