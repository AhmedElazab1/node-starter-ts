import { z } from 'zod';

const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .transform((value) => {
    return value.trim();
  });

export const userRegisterSchema = z
  .object({
    firstName: z
      .string('First name must be a string')
      .min(3, 'First name must be at least 3 characters')
      .max(20, 'First name must be less than 20 characters')
      .transform((value) => {
        return value.trim();
      }),

    lastName: z
      .string('Last name must be a string')
      .min(3, 'Last name must be at least 3 characters')
      .max(20, 'Last name must be less than 20 characters')
      .transform((value) => {
        return value.trim();
      }),

    email: z
      .string('Email must be a string')
      .email('Invalid email format')
      .max(50, 'Email must be less than 50 characters')
      .transform((value) => {
        return value.trim();
      }),

    password: passwordSchema,
    phone: z
      .string('Phone number must be a string')
      .min(10, 'Phone number must be at least 10 digits')
      .max(15, 'Phone number must be less than 15 digits')
      .transform((value) => {
        return value.trim();
      })
      .optional(),
  })
  .strict();

export const userLoginSchema = z
  .object({
    email: z
      .string()
      .email('Invalid email format')
      .transform((value) => value.trim()),
    password: passwordSchema,
  })
  .strict();
