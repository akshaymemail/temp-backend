declare const modules: {
    name: string;
    path: string;
    routes: {
        name: string;
        path: string;
        router: import("express-serve-static-core").Router;
    }[];
}[];
export default modules;
