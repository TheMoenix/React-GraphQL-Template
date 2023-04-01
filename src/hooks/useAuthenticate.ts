import { useEffect, useState } from "react";

import { useAppContext } from "../context/app/context";

export function useAuthenticate() {
  const appContext = useAppContext();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const authInfo: any = {};
        // if (!authInfo?.uid) {
        //   window.location.href = `/web/login?redirect=/support/`;
        //   return;
        // }
        if (!authInfo) {
          setLoading(false);
          return;
        } else {
          // appContext.dispatch(setOdooSession(authInfo));
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
