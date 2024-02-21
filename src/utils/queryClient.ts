import { QueryClient } from "@tanstack/react-query";

const ONE_MINUTE = 60 * 1000;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 5 * ONE_MINUTE },
  },
});
