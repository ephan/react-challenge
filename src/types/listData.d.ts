import { z } from 'zod';
import { listDataSchema } from '../schemas/listDataSchema';

export type ListData = z.infer<typeof listDataSchema>;
