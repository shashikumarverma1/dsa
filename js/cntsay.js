// function cntsay(A){
//     let map=new Map();
//     var k=1;
//     for(let i=0;i<A.length;i++){
        
//         if(map.has(A[i])){
//             k=map.get(A[i])
//             // console.log(k)
//             map.set(A[i],k+1);
//             // k--;
//         }else{
//             k=1;
//             map.set(A[i],k)
//         }
//     }
//     console.log(map)
// }
// let b=[1,1,1,
//     2,2,2
//     ,3,3,3
//     ,2
//     ,2,2,
//     1,4,3]
// cntsay(b)



function abc(A){
let s=0,l=A.length-1;
while(s<l){
    if(A[s]==0) s++;
    if(A[l]==2) l--;
    if(A[s]==2 && A[l] ==0){
        [A[s],A[l]] =[A[l],A[s]];
        s++;l--
    }
}
s++;l--;
console.log(A)

}
let b=[0,1,2,0,1]

abc(b)



























