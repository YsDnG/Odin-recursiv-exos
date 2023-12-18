let array=[5,4,25,3,4,6,27]


function mergesort(array)
{
    if(array.length <= 1)
        return array

    const middle=Math.floor(array.length/2)
    const left=(array.slice(0,middle))
    const right =array.slice(middle)

    const leftsorted  = mergesort(left)
    const rightsorted = mergesort(right)

    return mergeArray(mergesort(leftsorted),mergesort(rightsorted))
}

function mergeArray(left,right){

    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Comparez les éléments des deux moitiés et fusionnez-les dans l'ordre.
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Ajoutez les éléments restants des deux moitiés (s'il y en a).
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}


const sorted= mergesort(array)
console.log(sorted)



