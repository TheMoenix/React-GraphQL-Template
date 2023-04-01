import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  split,
} from "@apollo/client";

import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

const DOMAIN = window.location.host;
const GRAPHQL_SERVICE =
  process.env.REACT_APP_GRAPHQL_SERVICE || "support_graphql";
export const endpoint =
  process.env.REACT_APP_GRAPHQL_ENDPOINT ||
  `${
    DOMAIN.includes("localhost") ? "http" : "https"
  }://${DOMAIN}/${GRAPHQL_SERVICE}`;
const wsEndpoint =
  process.env.REACT_APP_GRAPHQL_WS_ENDPOINT ||
  `wss://${DOMAIN}/${GRAPHQL_SERVICE}`;

// export const endpoint = `http://${process.env.REACT_APP_GRAPHQL_URL}`;
// const wsEndpoint = `wss://${process.env.REACT_APP_GRAPHQL_URL}`;

function createWSLink(sessionId: string) {
  return new WebSocketLink({
    uri: `${wsEndpoint}/graphql`,
    options: {
      reconnect: true,
      connectionParams: async () => {
        return {
          headers: {
            "x-session": sessionId,
          },
        };
      },
    },
  });
}
function createGraphQLHttpLink(sessionId: string) {
  if (!sessionId) {
    sessionId = localStorage.getItem("session") || "";
  }
  return createHttpLink({
    uri: `${endpoint}/graphql`,
    headers: {
      "x-session": sessionId,
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
    createWSLink(tempSession),
    createGraphQLHttpLink(tempSession)
    // createGraphQLUploadLink(sessionId)
  );

  return new ApolloClient({
    link,
    credentials: "include",
    cache: new InMemoryCache(),
  });
}
