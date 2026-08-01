declare class BcryptService {
    private static saltRounds;
    static hashPassword(password: string): Promise<string>;
    static comparePassword(password: string, hash: string): Promise<boolean>;
}
export default BcryptService;
