import { useEffect, useState } from "react";

import { useAppContext } from "../context/app/context";
import { setSession } from "../context/app/action";
import axios from "axios";
import { getUserSession } from "../lib/rpc";

export function useAuthenticate() {
  const appContext = useAppContext();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const authInfo: any = await getUserSession();
        console.log(authInfo);

        if (!authInfo?._id && !window.location.href.includes("login")) {
          // window.location.replace("login");
          return;
        }
        if (!authInfo) {
          setLoading(false);
          return;
        } else {
          appContext.dispatch(setSession(authInfo._id));
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
