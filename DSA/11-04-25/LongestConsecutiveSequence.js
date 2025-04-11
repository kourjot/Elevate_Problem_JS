

var longestConsecutive = function(nums) {
    let max=0
    for(let i=0;i<nums.length;i++)
    {
        let j=nums[i]
        let count=1
        while(nums.includes(j+1)){
           j+=1
           count+=1
        }
        if(count>max){
            max=count
        }
    }
    return max
};


