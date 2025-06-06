import { z } from 'zod/v4';

const User = z.object({
  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  age: z.number(),
  gender: z.string(),
});

export type User = z.infer<typeof User>;

export default User;
