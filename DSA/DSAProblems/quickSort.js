// N = 6
// arr[] = { 2, 6, 3, 0, 4, 1 }

function quickSort(arr,s,e){
    if(s<e){
        let pi=partition(arr,s,e)
        quickSort(arr,s,pi-1)
        quickSort(arr,pi+1,e)
    }
    return arr
}
function partition(arr,s,e){
    let i=s
    let pi=arr[e]
    for(let j=s;j<e;j++){
        if(arr[j]<=pi){
            let temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
            i++
        }
    }
    let temp=arr[i]
        arr[i]=arr[e]
        arr[e]=temp
    return i
}
let arr=[2,6,3,0,4,1]
let low=0
let high=arr.length-1
console.log(quickSort(arr,low,high))