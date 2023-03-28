import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  split,
} from "@apollo/client";

import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

export const endpoint = `http://${process.env.REACT_APP_GRAPHQL_URL}`;
const wsEndpoint = `wss://${process.env.REACT_APP_GRAPHQL_URL}`;

function createWSLink() {
  return new WebSocketLink({
    uri: `${wsEndpoint}/graphql`,
    options: {
      reconnect: true,
      connectionParams: async () => {
        return {
          headers: {
            "x-session": `${sessionStorage.getItem("x-session")};`,
          },
        };
      },
    },
  });
}
function createGraphQLHttpLink(sessionInfo?) {
  if (!sessionInfo) {
    sessionInfo = localStorage.getItem("session") || "";
  }
  return createHttpLink({
    uri: `${endpoint}/graphql`,
    headers: {
      "x-session": `${sessionStorage.getItem("x-session")};`,
    },
  });
}

export function createApolloClient(sessionInfo) {
  const tempSession = sessionInfo;
  const link = split(
    // split based on operation type
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === "OperationDefinition" &&
        definition.operation === "subscription"
      );
    },
    createWSLink(),
    createGraphQLHttpLink(tempSession)
    // createGraphQLUploadLink(sessionId)
  );

  return new ApolloClient({
    link,
    credentials: "include",
    cache: new InMemoryCache(),
  });
}
