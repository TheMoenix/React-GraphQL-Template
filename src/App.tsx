import { ApolloProvider } from "@apollo/client";
import { AppRoute } from "./Routes";
import { FlexCenterColumnAndRow } from "./components/Layout";
import { Spin } from "antd";
import { createApolloClient } from "./graphql";
import { useAppContext } from "./context/app/context";
import { useAuthenticate } from "./hooks/useAuthenticate";

export function App() {
  const appContext = useAppContext();
  const { loading } = useAuthenticate();

  if (loading) {
    return (
      <FlexCenterColumnAndRow>
        <Spin size="large" />
      </FlexCenterColumnAndRow>
    );
  }
  return (
    <ApolloProvider
      client={createApolloClient(
        appContext.state.sessionInfo?.token ||
          (process.env.REACT_APP_SESSION_ID as string)
      )}
    >
      <AppRoute />
    </ApolloProvider>
  );
}
