// function abc(A, n) {
//     let ans = 0
//     let max=[]
//     for (let i = 0; i < n-2; i++) {
//        for(let j=i+1;j<n;j++){
//         for(let k=j+1;k<n;k++){
//             console.log(A[i],A[j],A[k])
//              ans=(Math.abs((A[i] -A[j])))*A[k]
//              console.log(ans)
//             max.push(ans)
//         }
//        }

//     }
//     let ans1=max[0]
//     for(let i=1;i<max.length;i++){
// ans1=Math.max(ans1 ,max[i])
//     }
    
//     return ans1
// }
// let b = [5,4,0,2,4];
// console.log(abc(b, b.length))

// function abc(n,k,q){
// 	let ans=[]
// while(q--){
// 	let arr =[];
// arr = readline().split(" ").map(Number);
// let x=arr[0];
// let y=arr[1];
// if(Math.abs(x-y)>=k){
// 	ans.push(1)
// }else{
// 	ans.push(0)
// }
// }
// // console.log(ans)
// return ans
// }
// let tc = parseInt(readline());
// while(tc--){
// 		let A =[];
// A = readline().split(" ").map(Number);
// let n=A[0];
// let k=A[1];
// let q=A[2];
// let abcd=[...abc(n,k,q)]
// // console.log(abcd)
// abcd.map((e)=>{
// 	console.log(e)
// })
// }