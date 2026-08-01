declare const CLIENT_ROUTES: {
    name: string;
    path: string;
    router: import("express-serve-static-core").Router;
}[];
export default CLIENT_ROUTES;
