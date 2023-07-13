import { useContext } from "react";

import RouterContext from "../context/RouterContext";

interface RouteProps {
  path: string;
  component: React.ReactNode;
}

function Route({ path, component }: RouteProps) {
  const { path: currentPath } = useContext(RouterContext);

  return <>{path === currentPath && component}</>;
}

export default Route;
