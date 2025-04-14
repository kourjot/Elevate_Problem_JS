// input: N = 5
// A : 5 1 6 3 7
function bubbleSort(arr,n){
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-1-i;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    return arr
}

function bubbleSort(arr,n){
    for(let i=0;i<n-1;i++){
        if(arr[i]>arr[i+1]){
            let temp=arr[i]
            arr[i]=arr[i+1]
            arr[i+1]=temp
        }
    }
    return arr
}
console.log(bubbleSort([5,1,6,3,7],5))