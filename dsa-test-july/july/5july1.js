function abc(A,ans){
    let s=[]
    if(A.length===0){
        s.push(ans)
      console.log(ans)
    return
    }
    abc(A.substring(1),ans+A[0])
      abc(A.substring(1),ans)
  }
  var ans = "";
  var A = "1213";
  abc(A, ans);