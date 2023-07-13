import { useContext } from "react";

import RouterContext from "../context/RouterContext";

function useRouter() {
  const { path, changePath } = useContext(RouterContext);

  function push(nextPath: string) {
    // path가 같으면 무시한다.
    if (path == nextPath) return;
    changePath(nextPath);
  }

  return push;
}

export default useRouter;
