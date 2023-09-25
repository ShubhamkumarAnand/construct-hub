import { router, publicProcedure } from './trpc';

export const appRouter = router({
  sayHello: publicProcedure.query(async () => {
    return [10, 20, 30, 40, 50];
  }),
});

export type AppRouter = typeof appRouter;
