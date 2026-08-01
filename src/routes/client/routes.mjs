import submissonRouter from "./submission/route.mjs";
const CLIENT_ROUTES = [
    {
        name: "Client Example",
        path: "/submission",
        router: submissonRouter,
    },
];
export default CLIENT_ROUTES;
