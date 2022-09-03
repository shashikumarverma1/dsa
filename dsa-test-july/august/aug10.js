// function abc(A,n){
//     let fans=0;
//    let res=[];
//    for(let i=0;i<n;i++){
//     res.push(A[i])
//    }
//    console.log(res)
//    let ans=[...res];
//    ans.reverse()
//    console.log(ans)
//    let mid=Math.floor(n/2)
//    for(let i=0;i<mid;i++){
//     let diff1=Math.abs((`${res[i]}`.charCodeAt()) -(`${ans[i]}`.charCodeAt()))
//     let diff2=Math.abs((`${res[i]}`.charCodeAt())-((`${res[i]}`.charCodeAt()) -(122-(`${ans[i]}`
//     .charCodeAt()))))
//     let min=Math.min(diff1,diff2)
//     fans=fans+min
//     console.log(res[i],(`${res[i]}`.charCodeAt()),ans[i],(`${ans[i]}`
//     .charCodeAt()),diff1,diff2,min,fans)

//    }
//    console.log('final answer is ',fans)

// }
function abc(A, n) {
  
    let fans=0
    let res = []
    let map = new Map()
    for (let i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) {
        map.set(String.fromCharCode(i), i - 96)
    }
    //  console.log(map)
    for (let i = 0; i < n; i++) {
        res.push(A[i])
    }
    let ans = [...res]
    //  console.log(res,ans)
    ans.reverse()
    console.log(res, ans)
    let mid = Math.floor(n / 2)
    for (let i = 0; i < mid; i++) {

        let a = Math.abs((map.get(`${res[i]}`)) - map.get(`${ans[i]}`))
        let b =26- Math.abs( (map.get(`${res[i]}`)) - map.get(`${ans[i]}`))
        console.log(map.get(res[i]),a,`${map.get(ans[i])}`, b)
      let min=Math.min(a,b)
      console.log('min',min)
    fans=fans+min
    }
console.log(fans)
}

// let b = 'knkl'

// abc(b, b.length)
function abc(A,n,k){
    if(n===k) return 1;
    if(n<k) return 0;
    let ans=[]
    let map=new Map();
    for(let i=0;i<n;i++){
        if(map.has(A[i])){
       let f=map.get(A[i]);
       map.set(A[i],f+1)
        }else{
            map.set(A[i],1)
        }
    }
    console.log(map)
    let even=0;
    let odd=0;
    let one=0;
    let bkt=0
    map.forEach((e)=>{
       console.log(e)
       if(e !=1 && e%2 ===1){
        bkt++;
        ans.push(e)
        console.log('bkt',bkt)
       }else if(e%2===0){
        bkt++;
        ans.push(e)
        console.log('bkt',bkt)
       }else {
        one++
       }
    })
    console.log('bkt',bkt)
    let remainingBKT=k-bkt
    for(let i=0;i<remainingBKT;i++){
        ans.push(1);
        one--
    }
    for(let i=0;i<k;i++){
        if(ans[i]%2===0){
            ans[i]=ans[i] + 1;
            one--
        }
    }
    console.log(ans,bkt,one)

}
let b=[33,33]
console.log(abc(b,b.length,1))
























































