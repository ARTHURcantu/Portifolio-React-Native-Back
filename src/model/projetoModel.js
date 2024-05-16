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
      .max(200, {message: 'O avatar deve ter no máximo 200 caracteres.'})
})

const validateProjetoToCreate = (projeto) => {
  const partialProjetoScrema = projetoScrema.partial({idprojeto:true, Nome:true})
  return partialProjetoScrema.safeParce(projeto)
}

const validateProjetoToUpdate = (projeto) => {
  const partialProjetoScrema = projetoScrema.partial({idprojeto: true, url:true})
  return partialProjetoScrema.safeParce(projeto)
}

const getAll = async () => {
  return await prisma.projeto.findMany({
      select: {
          idprojeto: true,
          Nome: true
      }
  })
}

const getById = async (id) => {
  return await prisma.projeto.findUnique({
      where: {
        idprojeto
      },
      select: {
        idprojeto: true,
        Nome: true
      }
  })
}

const create = async (projeto) => {
  return await prisma.projeto.create({
      data: projeto,
      select: {
        idprojeto: true,
        Nome: true
      }
  })
}

const remove = async (idprojeto) => {
  return await prisma.projeto.delete({
      where: {
          idprojeto
      },
      select: {
        idprojeto: true,
        Nome: true
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