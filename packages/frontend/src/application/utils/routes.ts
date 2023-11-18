import React from "react";
import { routeNames } from "./route.names";
const Home = React.lazy(() => import("application/pages/home/index"));
const NewPersona = React.lazy(
  () => import("application/pages/newPersona/index")
);
const PersonaDetail = React.lazy(
  () => import("application/pages/personaDetail/index")
);

export const routes: {
  path: string;
  Component: React.LazyExoticComponent<React.ComponentType<any>>;
}[] = [
  {
    path: routeNames.home,
    Component: Home,
  },
  {
    path: routeNames.newPersona,
    Component: NewPersona,
  },
  {
    path: routeNames.persona,
    Component: PersonaDetail,
  },
];
