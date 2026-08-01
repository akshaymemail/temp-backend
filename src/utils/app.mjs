class AppUitls {
    static pickFields(obj, keys) {
        return keys.reduce((acc, key) => {
            if (obj[key] !== undefined) {
                acc[key] = obj[key];
            }
            return acc;
        }, {});
    }
}
export default AppUitls;
