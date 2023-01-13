function truthCheck(collection, pre) {
    return collection.every(elem => elem.hasOwnProperty(pre) && Boolean(elem[pre]));
}