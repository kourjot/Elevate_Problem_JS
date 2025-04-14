// input: N = 6
// S : [()]{}
function isBalanced(s){
    let st=[]
    for(let i=0;i<s.length;i++){
        if(s[i]=="{"|| s[i]=="["|| s[i]=="("){
            st.push(s[i])
        }
        else{
            let top=st[st.length-1]
            if(st.length==0){
                return false
            }else if(s[i]=="}" && top=="{"){
                st.pop()
            }else if(s[i]=="]"&& top=="["){
                st.pop()
            }else if(s[i]==")"&& top=="("){
                st.pop()
            }else{
                return false
            }
    
        }
    }
    if(st.length==0){
        return true
    }let top=st[st.length-1]
}
console.log(isBalanced("{[(]}"))