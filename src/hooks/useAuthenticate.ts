import { useEffect, useState } from "react";
import { AppActions, setSession } from "../context/app/action";
import { useAppContext } from "../context/app/context";

export function useAuthenticate() {
  const appContext = useAppContext();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const authInfo: any = await localStorage.getItem("session_info");
        if (authInfo) {
          setLoading(false);
          return;
        } else {
          appContext.dispatch(setSession(authInfo));
        }
        setLoading(false);
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
