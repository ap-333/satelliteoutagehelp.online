import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(200),
  subject: z.string().trim().min(3, "Please enter a subject.").max(150),
  message: z.string().trim().min(10, "Please enter a message of at least 10 characters.").max(4000),
  consent: z.literal(true, { error: "Please confirm you have read the Privacy Policy." }),
  website: z.string().max(200).optional(), // honeypot: non-empty is treated as a bot
  t: z.number().optional(), // render timestamp
});

export type ContactInput = z.infer<typeof contactSchema>;
