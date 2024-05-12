import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient()

const imageScrema = z.object({
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
  const partialImageScrema = imageScrema.partial({idimagem:true, url:true, projeto_idprojeto: true})
  return partialImageScrema.safeParce(imagem)
}

const validateImageToUpdate = (imagem) => {
  const partialImageScrema = imagemScema.partial({idimagem: true, url:true})
  return partialImageScrema.safeParce(imagem)
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
          idimagem
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
      data: imagem,
      select: {
        idimagem: true,
        url: true,
        projeto_idprojeto: true
      }
  })
}

const remove = async (idimagem) => {
  return await prisma.imagem.delete({
      where: {
          idimagem
      },
      select: {
        idimagem: true,
        url: true,
        projeto_idprojeto: true
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

export default { getAll, getById, create, remove, edit, validateImageToCreate, validateImageToUpdate}