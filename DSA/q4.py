class Solution:
    def isValid(self, s: str) -> bool:
        st=[]
        for i in s:
            if len(s)<=1:
                return False
            if i=="(" or i=="{" or i=="[":
                st.append(i)
            else:
                if not st:
                    return False
                elif i==")" and st[-1]!="(":
                    return False
                elif i=="}" and st[-1]!="{":
                    return False
                elif i=="]" and st[-1]!="[":
                    return False
                st.pop()
        return len(st)==0
        