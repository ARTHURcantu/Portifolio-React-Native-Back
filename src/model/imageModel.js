import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient()

const imageScrema = z.object({
    id: z.number({
        required_error: "ID é obrigatório.",
        invalid_type_error: "O ID deve ser um número inteiro.",
      }),
    nome: z.string({
        required_error: "Nome é obrigatório.",
        invalid_type_error: "O nome deve ser uma string.",
      })
      .min(3, {message: 'O nome deve ter no mínimo 3 letras.'})
      .max(200, {message: 'O nome deve ter no máximo 200 caracteres.'}),
    email: z.string({
        required_error: "O email é obrigatório.",
        invalid_type_error: "O email deve ser uma string.",
      })
      .email({message: 'Email inválido.'})
      .max(500, {message: 'O email deve ter no máximo 500 caracteres.'}),
    pass: z.string({
        required_error: "A senha é obrigatória.",
        invalid_type_error: "A senha deve ser uma string.",
      })
      .min(6, {message: 'A senha deve ter no mínimo 6 caracteres.'}),
    avatar: z.string({
        required_error: "O avatar é obrigatório.",
        invalid_type_error: "O avatar deve ser uma string.",
      })
      .url({message: 'Url do avatar inválida.'})
      .max(1000, {message: 'O avatar deve ter no máximo 1000 caracteres.'})
})








