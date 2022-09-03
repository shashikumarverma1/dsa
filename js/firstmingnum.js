function missing(nums){
    let min =nums[0];
    for(let i=0;i<nums.length;i++){
        if(nums[i]<min && nums[i]>0){
            min=nums[i]
            // console.log(min)
        }
    }
    for(let i=0;i<nums.length;i++){
        if(nums.includes(min)){
            min=min+1;
            // console.log(min)
        }else{
            // console.log(min+2);
            min=min
            break;
        }
    }
    
    return min;
}
let b=[1,2,0]
abc(b)