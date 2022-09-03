function printPrevSmaller(arr, n){
     let S = [];
     let ans=[]
    for(let i = 0; i < n; i++)
    {
   
    
        while ((S.length != 0) &&
             (S[S.length - 1] >= arr[i]))
        {
            S.pop();
        }
        if (S.length == 0)
        {
            ans.push(-1);
        }
         
        
        
        else
        {
            ans.push(S[S.length - 1]);
        }
 
        // Push this element
        S.push(arr[i]);
    }
    console.log(ans)
}


let d=[11, 6 ,7 ,5 ,11 ,11]
console.log(d)
printPrevSmaller(d,d.length)




