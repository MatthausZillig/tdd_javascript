const keyValueToString = ([key, value]) => {
    if(typeof value === 'object' && !Array.isArray(value)) {
        throw new Error('Please check your params');
    }
    return `${key}=${value}`
};

module.exports.queryString = (obj) => Object.entries(obj).map(keyValueToString).join("&");

module.exports.parse = (string) => {
    return Object.fromEntries(
        string.split('&').map(item => {
            let [key, value] = item.split('=')
            console.log(key, value)
            if(value.indexOf(',') > -1) {
                value = value.split(',');
                console.log(value)
            }
            return [key, value];
        })
    );
}