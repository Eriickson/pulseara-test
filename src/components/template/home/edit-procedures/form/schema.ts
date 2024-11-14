import zod from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

export const schema = zod.object({
  procedures: zod.array(
    zod.object({
      name: zod.string(),
      code: zod.string(),
      claimed: zod.string(),
      difference: zod.string(),
      authorized: zod.string(),
    })
  ),
});

export const resolver = zodResolver(schema);

export type EditProceduresFormValues = zod.infer<typeof schema>;
