import { z } from 'zod';

const toolSchema = z.object({
  title: z.string().min(1, { message: 'Tool Name is required' }),
  link: z.string().min(1, { message: 'Tool Link is required' }),
  description: z.string().min(1, { message: 'Tool Description is required' }),
  tags: z.string().min(1, { message: 'Tags is required' }),
});

export default toolSchema;
