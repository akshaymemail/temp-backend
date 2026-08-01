import bcrypt from "bcrypt";
class BcryptService {
    static saltRounds = 10;
    static async hashPassword(password) {
        return await bcrypt.hash(password, this.saltRounds);
    }
    static async comparePassword(password, hash) {
        return await bcrypt.compare(password, hash);
    }
}
export default BcryptService;
