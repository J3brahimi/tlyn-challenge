import { lazy } from "react";
import type { IRoute } from "src/types/Common";

import { TFunction } from "i18next";
import { BiHome } from "react-icons/bi";

const adminRoutes: (t: TFunction<"translation", undefined>) => IRoute[] = (
  t
) => [
  {
    title: t("sidebar.dashboard"),
    key: "dashboard",
    path: "/dashboard",
    component: lazy(() => import("src/pages/Dashboard")),
    showInMenu: true,
    icon: BiHome,
  },
];

export default adminRoutes;
