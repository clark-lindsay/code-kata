function binaryChop(array, target) {
    let [low, high] = [0, array.length];
    let mid = Math.floor((low + high) / 2);
    while (low < high) {
        mid = Math.floor((low + high) / 2);
        if (array[mid] === target) {
            return mid;
        } else if (array[mid] < target) {
            low = mid;
        } else {
            high = mid;
        }
    }
    return undefined;
}

function binaryChopRecursive(array, target) {
   return binaryChopRecursiveHelper(0, array.length);

    function binaryChopRecursiveHelper(low, high) {
        if (low >= high) {
            return undefined;
        }
        const mid = Math.floor((low + high) / 2);

        if (array[mid] === target) {
            return mid;
        } else if (array[mid] < target) {
            return binaryChopRecursiveHelper(mid, high, array, target);
        } else {
            return binaryChopRecursiveHelper(low, mid, array, target);
        }
    }
}



module.exports = binaryChopRecursive;