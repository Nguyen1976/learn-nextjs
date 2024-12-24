import { z } from "zod";

export const configSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string(),
});

const configProject = configSchema.safeParse({
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
});

if (!configProject.success) {
  throw new Error("Giá trị khai bao trong file .env không hợp lệ");
}

const envConfig = configProject.data;
export default envConfig;
