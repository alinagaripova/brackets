module.exports = function check(str, bracketsConfig) {
    let lastOpenBracket = '';
    let allOpenBracket = [];
    for (let i = 0; i < str.length; i++) {
        for (let p = 0; p < bracketsConfig.length; p++) {
            if (str[i] == bracketsConfig[p][0] && str[i] == bracketsConfig[p][1] ) {
                if (str[i] == lastOpenBracket) {
                    allOpenBracket.pop();
                    lastOpenBracket = allOpenBracket[allOpenBracket.length-1];
                } else {
                    lastOpenBracket = str[i];
                    allOpenBracket.push(str[i]);
                }
                break
            }
            if (str[i] == bracketsConfig[p][0] && str[i] != bracketsConfig[p][1] ) {
                lastOpenBracket = str[i];
                allOpenBracket.push(str[i]);
                break
            }
            if (str[i] == bracketsConfig[p][1] && allOpenBracket.length != 0) {
                if (lastOpenBracket == bracketsConfig[p][0]) {
                    allOpenBracket.pop();
                    lastOpenBracket = allOpenBracket[allOpenBracket.length-1];
                }
                break
            }
            if (str[i] != bracketsConfig[p][0] && str[i] == bracketsConfig[p][1] && allOpenBracket.length == 0) {
                return false
            }
        }
    }
    if (allOpenBracket.length == 0) {
        return true
    } else {
        return false
    }
}
