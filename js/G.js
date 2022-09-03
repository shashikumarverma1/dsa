function isprime(n){
    var t=[]
  for(let i=2;i<n;i++){
      
      if(n%i===0){
        //   console.log(i)
          t.push(i)
      }
    //   console.log(t)

  }

    // console.log(t)
    if(t.length>0){
        return true;
    }else{
        return false;
    }
}
function cntprime(n){
    var cnt=0
    for(let i=3;i<n;i++){
        if(isprime(i)){
            cnt++
            console.log(cnt)
        }
    }
    console.log(cnt)
}

console.log(cntprime(20))