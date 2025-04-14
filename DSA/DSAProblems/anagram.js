// input: N = 4, X = abcd, M = 4, Y = dacb
// function anagram(n,m,x,y){
//     if(n!=m){
//         return false
//     }
//     let s=x.split("").sort().join("")
//     let t=y.split("").sort().join("")
//     if(s==t){
//         return true
//     }
//     return false
// }
// console.log(anagram(4,4,"abcd","bcda"))

function isAnagram(n,m,x,y){
    if(n!==m){
        return false
    }
    let map={}
    for(let i=0;i<n;i++){
        if(map[x[i]]==undefined){
            map[x[i]]=1
        }
        else{
            map[x[i]]++
        }
    }
    for(let i=0;i<m;i++){
        if(map[y[i]]==undefined || map[y[i]]==0){
            return false
        }
        else{
            map[y[i]]--
        }
    }
    return true
}

console.log(isAnagram(3,3,"hcd","bcd")) 