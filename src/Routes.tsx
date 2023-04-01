import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";
import { faList } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Home } from "./pages/Home";
import { IRoute } from "./common/types";

const { Content } = Layout;
export function AppRoute() {
  const AppRoutes: IRoute[] = [
    {
      title: "Home",
      path: "/",
      showOnMenu: true,
      index: true,
      component: <Home />,
      icon: <FontAwesomeIcon icon={faList} />,
    },
    {
      title: "Home",
      path: "/test",
      showOnMenu: true,
      component: <Home />,
      icon: <FontAwesomeIcon icon={faList} />,
    },
  ];
  return (
    <Layout>
      <Content
        style={{
          minHeight: "100%",
          maxHeight: "100%",
          backgroundColor: "white",
        }}
      >
        <Routes>
          {AppRoutes.map((route) => {
            if (route?.index) {
              return <Route key={route.path} index element={route.component} />;
            } else {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.component}
                />
              );
            }
          })}
        </Routes>
      </Content>
    </Layout>
  );
}
