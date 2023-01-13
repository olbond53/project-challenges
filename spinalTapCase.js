function spinalCase(str) {
    let subStr1 = /\s+|_+/g;
    let subStr2 = /([a-z])([A-Z])/g;
    return str.replace(subStr1, '-').replace(subStr2, '$1-$2').toLowerCase();
}