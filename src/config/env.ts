import z from 'zod';

const envSchema = z.object({
  NODE_ENV: z.string(),
  PORT: z.string(),
  MONGODB_URI: z.string(),
});

const env = envSchema.safeParse(process.env);

if (!env.success) {
  throw new Error('Invalid environment variables');
}

export default {
  NODE_ENV: env.data.NODE_ENV,
  PORT: env.data.PORT,
  MONGODB_URI: env.data.MONGODB_URI,
};
