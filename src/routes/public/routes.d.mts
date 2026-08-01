declare const PUBLIC_ROUTES: {
    name: string;
    path: string;
    router: import("express-serve-static-core").Router;
}[];
export default PUBLIC_ROUTES;
