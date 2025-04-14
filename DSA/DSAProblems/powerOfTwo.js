// function powerOfTwo(n) {
//     if(n<1){
//         return false
//     }
//     for(let i=2;i<=n;i++){
//         if(i*i==n){
//             return true
//         }
//     }
//     return false
// }
// console.log(powerOfTwo(3))


// ******** ********* while loop approach ************
function powerOfTwo(n){
    if(n==1){
        return true
    }
    while(n>1){
        if(n%2!=0){
            return false
        }
        n=n/2
    }
    return true
}

// console.log(powerOfTwo(4))

// **************Recursion approach **************
function powerOfTwo(n){
    if(n==1){
        return true
    }
    if(n%2!=0 || n==0){
        return false
    }
    return powerOfTwo(n/2)
}
console.log(powerOfTwo(4))
