import { z } from 'zod';

export const partnerSchema = z.object({
  contact_name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(6).max(30).regex(/^[+\d\s().-]+$/),
  property_name: z.string().trim().min(1).max(150),
  property_type: z.enum(['hotel', 'apartment']),
  city: z.string().trim().min(1).max(100),
  address: z.string().trim().min(1).max(300),
  capacity: z.coerce.number().int().min(1).max(10000),
  description: z.string().trim().min(1).max(3000),
  website: z.union([z.literal(''), z.string().trim().url().max(500).refine(v => /^https?:\/\//.test(v))]),
  language: z.enum(['fr', 'en']),
  consent: z.literal(true),
  company_url: z.string().max(0),
});