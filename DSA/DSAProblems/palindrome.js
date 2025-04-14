// input: N = 9, string: malayalam
// **************** for loop approach********************
// function isPalindrome(n,str){
//     let bag=""
//     for(let i=n-1;i>=0;i--){
//         bag+=str[i]
//     }
//     if(bag==str){
//         return true
//     }
//     return false
// }
// console.log(isPalindrome(9,"malayalam"))

// ***************** two pointer approach********************
function isPalindrome(n,str){
    let i=0
    let j=n-1
    while(i<j){
        if(str[i]!=str[j]){
            return false
        }
        i++
        j--
    }
    return true
}
// console.log(isPalindrome(8,"malayala"))


// ***************** recursion approach********************

function isPalindrome(str){
    if(str.length<=1){
        return true
    }
    if(str[0]!==str[str.length-1]){
        return false
    }
    return isPalindrome(str.slice(1,-1))
}

console.log(isPalindrome("malayalam"))