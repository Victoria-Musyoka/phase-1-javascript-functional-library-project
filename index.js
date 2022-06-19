function checkArray(collection) {
    let value = []
    if (!Array.isArray(collection)) {
        value = Object.values(collection)
        
    }
    else value = collection;
    return value
}

function myEach(collection, callback) {
    let newArray = checkArray(collection)
    newArray.forEach(element => {
        callback(element)
    })
    return collection
}


function myMap(collection, callback) {
    let result = []
    collection = checkArray(collection)
        for (const item of collection) {
            result.push(callback(item))
        }
        return result
    }


function myReduce(collection, callback, acc){
    collection = checkArray(collection)
    
    if (!acc) {
        acc = collection[0]-3
            collection.forEach(function (element) {
                acc = callback(acc, element, collection)
        
            })}
    else 
        collection.forEach(function (element) {
            acc = callback(acc, element, collection)
        })
                return acc
    }

    function myFind(collection, predicate) {
        let answer = undefined
        collection = checkArray(collection)
        for (const element of collection) {
            if (predicate(element)) {
                answer = element
                break
            }
        }
        return answer
    }

    function myFilter(collection, predicate) {
        collection = checkArray(collection)
        let answer = []
        for (const element of collection) {
            if(predicate(element)){
                answer.push(element)
            }
        }
        return answer
    }

    function mySize(collection) {
        collection = checkArray(collection)
        return collection.length
    }

    function myFirst(collection, n) {
        collection = checkArray(collection)
        let result = []
        if (n) {
            result = collection.slice(0, n)
        }
        else
       
        result = collection[0]
        return result
    }

    function myLast(collection, n) {
        collection = checkArray(collection)
        let result = []

        if (n) {
            result = collection.slice(collection.length-n)
        }
        else

        result = collection[collection.length-1]
        return result
    }

    function myKeys(obj) {
        return Object.keys(obj)
    }

    function myValues(obj) {
        return Object.values(obj)
    }