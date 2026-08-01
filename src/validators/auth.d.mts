declare const AuthValidators: {
    login: import("express-validator").ValidationChain[];
    signup: import("express-validator").ValidationChain[];
};
export default AuthValidators;
