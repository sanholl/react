import { useState, useCallback } from "react";

import RouterContext from "../context/RouterContext";

interface Routerprops {
  children: React.ReactNode;
}

function Router({ children }: Routerprops) {
  const [path, setPath] = useState(window.location.pathname);

  const changePath = useCallback((path: string) => {
    window.history.pushState("", "", path);
    setPath(path);
  }, []);

  return (
    <RouterContext.Provider value={{ path, changePath }}>
      {children}
    </RouterContext.Provider>
  );
}

export default Router;
