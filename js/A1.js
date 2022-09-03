class q{
    constructor(){
        this.A=[]

    }
   push(data){
       this.A.push(data)
   }
   pop(){
       this.A.shift()
   }
   isempty(){
       if(this.A.length===0){
           return true
       }else{
           return false
       }
   }
   peek(){
       let b= this.A.length-1
       return this.A[b]
   }
}
let s=new q()
s.push(5)
s.push(10)
s.push(15)
s.push(20)
s.push(25)
console.log(s.pop())
console.log(s.pop())

console.log(s.isempty())

console.log(s)