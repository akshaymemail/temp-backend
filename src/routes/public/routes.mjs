import submissionRouter from "./submisson/route.mjs";
const PUBLIC_ROUTES = [
    {
        name: "Public Submission",
        path: "/submission",
        router: submissionRouter,
    },
];
export default PUBLIC_ROUTES;
