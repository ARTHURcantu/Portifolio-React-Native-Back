import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient()

const imageSchema = z.object({
    idimagem: z.number({
        required_error: "ID é obrigatório.",
        invalid_type_error: "O ID deve ser um número inteiro.",
      }),
    url: z.string({
        required_error: "A imagem é obrigatória.",
        invalid_type_error: "A imagem deve ser uma string.",
      })
      .url({message: 'Url do avatar inválida.'})
      .max(1000, {message: 'O avatar deve ter no máximo 1000 caracteres.'}),
    projeto_idprojeto: z.number({
        required_error: "O id do projeto é obrigatorio!",
        invalid_type_error: "o Id deve ser um numero inteiro",  
    }),
})

const validateImageToCreate = (imagem) => {
  const partialimageSchema = imageSchema.partial({idimagem:true})
  return partialimageSchema.safeParse(imagem)
}

const validateImageToUpdate = (imagem) => {
  const partialimageSchema = imageSchema.partial({url: true, projeto_idprojeto: true})
  return partialimageSchema.safeParse(imagem)
}

const getAll = async () => {
  return await prisma.imagem.findMany({
      select: {
          idimagem: true,
          url: true,
          projeto_idprojeto: true
      }
  })
}

const getById = async (id) => {
  return await prisma.imagem.findUnique({
      where: {
          idimagem: id
      },
      select: {
        idimagem: true,
        url: true,
        projeto_idprojeto: true
      }
  })
}

const create = async (imagem) => {
  return await prisma.imagem.create({
    where:{
      data: imagem
    }
  })
}

const remove = async (idimagem) => {
  return await prisma.imagem.delete({
      where: {
          idimagem: idimagem
      },
      
  })
}
const removeProjeto = async(idprojeto) =>{
  return await prisma.imagem.deleteMany({
    where:{
      projeto_idprojeto: idprojeto
    }
  })
}

const edit = async (imagem) => {
  return await prisma.imagem.update({
      where: {
          idimagem: imagem.idimagem
      },
      data: imagem,
      select: {
        idimagem: true,
        url: true,
        projeto_idprojeto: true
      }
  })
}

export default { getAll, getById, create, remove, removeProjeto, edit, validateImageToCreate, validateImageToUpdate}