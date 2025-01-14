import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("layouts/page-container.tsx", [
    index("routes/home.tsx"),
    route("creatures", "routes/creatures.tsx"),
    route("creatures/:creature", "routes/creature.tsx"),
  ]),
] satisfies RouteConfig;
