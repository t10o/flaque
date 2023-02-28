import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

export const initializeApollo = () => {
  const link = createHttpLink({
    fetch,
    uri: process.env.NEXT_PUBLIC_ENDPOINT,
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link,
    ssrMode: true,
  });
};
