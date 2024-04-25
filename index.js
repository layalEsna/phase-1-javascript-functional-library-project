function myEach(collection, callback) {

    if (Array.isArray(collection)) {
        for (const x of collection) {
            callback(x)
        }
    } else {
        for (const x in collection) {
            callback(collection[x])
        }
    }
    return collection
}

function myMap(collection, callback) {
    let arr = []
    if (Array.isArray(collection)) {

        for (const x of collection) {
            let xx = callback(x)
            arr.push(xx)

        }
    } else {
        for (const x in collection) {
            let xx = callback(collection[x])
            arr.push(xx)
        }
    }
    return arr
}



function myReduce(collection, callback, acc) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (acc === undefined && i === 0) {
                acc = collection[i]
            } else {
                acc = callback(acc, collection[i], i, collection)
            }
        }
    } else {
        const keys = Object.keys(collection)

        for (const key of keys) {

            if (!acc) {
                acc = collection[key]
            } else {
                acc = callback(acc, collection[key], collection)
            }
        }
    }

    return acc
}




function myFind(collection, predicate) {
    let result;
    if (Array.isArray(collection)) {
        for (const x of collection) {
            if (predicate(x)) {
                result = x
                return result
            }
        }
    } else {
        for (const x in collection) {
            if (predicate(collection[x])) {
                result = collection[x]
                return result
            }
        }
    }
    //return result
}

function myFilter(collection, predicate) {
    let result = []
    if (Array.isArray(collection)) {
        for (const x of collection) {
            if (predicate(x)) {
                result.push(x)
            }
        }
    } else {
        for (const x in collection) {
            if (predicate(collection[x])) {
                result.push(collection[x])
            }
        }
    }
    return result
}

function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length
    }
    else {
        return Object.keys(collection).length
    }
}

function myFirst(arr, n) {

    if (!n) {
        return arr[0]
    } else {
        return arr.slice(0, n)
    }


}

function myLast(arr, n) {
    if (!n) {
        return arr[arr.length - 1]
    } else {
        return arr.slice(-n)
    }
}
function myKeys(obj) {
    return Object.keys(obj)
}
function myValues(obj) {
    return Object.values(obj)
}