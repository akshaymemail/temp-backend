import authRoutes from "./auth/route.mjs";
import projectRoutes from "./project/route.mjs";
import userRoutes from "./user/route.mjs";
const ADMIN_ROUTES = [
    {
        name: "Admin Authentication",
        path: "/auth",
        router: authRoutes,
    },
    {
        name: "Admin User",
        path: "/user",
        router: userRoutes,
    },
    {
        name: "Admin Project",
        path: "/project",
        router: projectRoutes,
    },
];
export default ADMIN_ROUTES;
