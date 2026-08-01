declare class AppUitls {
    static pickFields<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>;
}
export default AppUitls;
