import AppConst from "../constants/app.mjs";
import ADMIN_ROUTES from "./admin/routes.mjs";
import CLIENT_ROUTES from "./client/routes.mjs";
import PUBLIC_ROUTES from "./public/routes.mjs";
const { MODULE } = AppConst;
const modules = [
    {
        name: MODULE.ADMIN,
        path: `/${MODULE.ADMIN}`,
        routes: ADMIN_ROUTES,
    },
    {
        name: MODULE.CLIENT,
        path: `/${MODULE.CLIENT}`,
        routes: CLIENT_ROUTES,
    },
    {
        name: MODULE.PUBLIC,
        path: `/${MODULE.PUBLIC}`,
        routes: PUBLIC_ROUTES,
    },
];
export default modules;
