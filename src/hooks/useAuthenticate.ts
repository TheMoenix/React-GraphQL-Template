import { useEffect, useState } from "react";

import { useAppContext } from "../context/app/context";
import { setSession } from "../context/app/action";
import { getUserSession } from "../lib/rpc";
import { ISessionInfo } from "../common/types";

export function useAuthenticate() {
  const appContext = useAppContext();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const localSession = localStorage.getItem("x-session");
        if (!localSession) {
          if (!window.location.href.includes("login")) {
            window.location.replace("login");
          } else {
            setLoading(false);
          }
          return;
        } else {
          const authInfo: any = await getUserSession(localSession);
          if (!authInfo || !authInfo?.token || authInfo.status === "expired") {
            localStorage.removeItem("x-session");
            window.location.replace("login");
            setLoading(false);
            return;
          } else {
            localStorage.setItem("x-session", authInfo.token);
            // const state: ISessionInfo = {
            //   token: authInfo.token,
            //   lastActivityAt: authInfo.lastActivityAt,
            //   status: authInfo.status,
            //   user: {
            //     username: authInfo.user.username,
            //     name: authInfo.user.name,
            //     email: authInfo.user.email,
            //     roll: authInfo.user.roll,
            //   },
            // };
            appContext.dispatch(setSession(authInfo));
          }

          setLoading(false);
        }
      } catch (e) {
        setLoading(false);
        console.log(e);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    loading,
  };
}
