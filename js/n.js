function abc(a,b,c){
    let d=[];
    let e=[];
    let n=a.length-1+b.length-1 +c.length-1 ;
    for(let i=0;i<n ;i++){
        if(b.includes(a[i])){
            d.push(a[i])
        }
    }
    for(let i=0;i<n;i++){
        if(d.includes(c[i])){
            e.push(c[i])
        }
    }
    console.log(e)
}
let a=[1,5,4,6,7];
let b=[11,3,4,2,10];
let c=[12,4,33,6,9]
abc(a,b,c)