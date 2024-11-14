import zod from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

export const schema = zod.object({
  procedures: zod.array(
    zod.object({
      id: zod.string().optional(),
      name: zod.string().min(1),
      code: zod.string().min(1),
      procedureNumber: zod.number(),
      claimed: zod.string().min(1),
      difference: zod.string().min(1),
      authorized: zod.string().min(1),
    })
  ),
});

export const resolver = zodResolver(schema);

export type EditProceduresFormValues = zod.infer<typeof schema>;
