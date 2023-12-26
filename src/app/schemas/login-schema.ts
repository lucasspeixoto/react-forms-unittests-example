import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'E-mail é obrigatório!')
    .email('E-mail em formato inválido!')
    .toLowerCase(),
  password: z.string().min(6, 'A senha precisa conter no mínimo 6 caracteres!'),
});

export type LoginFormData = z.infer<typeof loginSchema>;
