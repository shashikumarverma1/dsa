// function demo(A,call){
//     A.push(35) ;call()
// }
// var A=[2,3,4];
// demo(A,function(){
//     console.log("arrauy has brm modu" ,A)
// })
// [2,3,4,35]
// function fun(){
//     let y=z=0;
//     y++;
//     return y
// }
// fun()
// console.log(typeof y)
// console.log(typeof z)
// unde Number
// const avg = (...nums)=> nums.reduce((acc,val)=>acc+val,0)/nums.length
// console.log(avg(...[2,3,4]))
// console.log(avg(2,3,4))
// 3  
// let i,j,r=4;
// for( i=1;i<=r;i++){
//     for(j=1;j<=i;j++){
//         console.log(j)
//     }
// }
// 12
// 123
// 1234
// const demo = n=> [...`${n}`].map(i=>parseInt(i))
// console.log(demo(321))
// [3,2,1]
// which value is placed in base calss 
// ans is default type value
// let num= 0.1;
// if(num==0.1 f){
//     console.log(5)
// }else{
//     console.log(6)
// }
// const setting ={
//     username:'comu',
//     level:19,
//     health:90
// }
// const data=JSON.stringify(setting,['level','health'])
// console.log(data)
// {"level" : 19,"health :90"}
// function myfun(x,y,...aerg){
//     console.log(aerg)
// }
// myfun(1,2,3,4,5)
// myfun(1,2)
// [3,4,5],[]
// let i;
// let arr=[1];
// arr.length=5;
// for(let i=0;i<5;i++){
//     console.log(arr[i])
// }
// 1,4 garbage value
// let player={name:"mahi",name:"TIKKU"}
// const member=[player];
// player=null;
// console.log(member);
// console.log(player)
// tikku,null
// let A=['P','Q','R','S','T']
// const A1=A.reduce((acc,crr)=>{return acc+crr},'')
// console.log(A1)
// pqrst
// var a;
// console.log(a==undefined)
// console.log(isNaN(undefined))
// true,true
// function demo(s){
//   return s.split(/\s+/).slice(0,5).join("")

// }
// let s2="we should always be helpfull to others";
// let s3=demo(s2);
// console.log(s3)
// we should be always hel[full]
// let p=4,q=-6,r=1,s;
// s= ++p && ++q || ++r 
// console.log(p,q,r,s)
// 5,-5,1,-5
// let e= 10;
// function outer(){
//   var e=2;
//   return function inner(){
//     console.log(e)
//   }
// }
// outer()()
// console.log(e)
// 2,10
// console.log(void {})
// console.log(void "abcde")
// console.log(void (0))
// console.log(void (2==4))
// undefined,undefined,undefined,undefined
// a[3] where a is
// an
// array, is equivalent to
// all of abave

// what is type of variable that is volatile
// mutable 
// const demo =arr => arr[Math.floor(Math.random()*arr.length)]
// console.log(demo([10,15,20]))
// 10,15,20,any of them
// what is program philosophy that argues that that content and behaviar should as much as possible be kept seperate ?
// unobtrusive JavaScript is rigth ans
// const value={num:10}
// const multiply =(x={...value})=>{
//   console.log(x.num *=2)
// }
// multiply()
// multiply()
// multiply(value)
// multiply(value)
// 20,20,20,40
// var y=1;
// if(function f(){}){
//     y=y+typeof f
// }
// console.log(y)
// 1 undefined
// what is programing philosofy that argue that content should be seperate as much as piosible
// unobstructtive js
// type of vrable that is volatile
// mutable variable
// var sample=(function(a){
//     console.log(a*a)
// })(10)
// will work properly
// calling a function f with an array variable a[3]
// where a is an array is equavalent to
// all of above is right ans
// in which algorithem is each process provided a fixed time to excute
// round robin is corect answer
// which of the following does the self organizing linked list improves the efficiency of
// linear search is right answer

// const A = (v1,v2 , epsilon =0.001)=>(Math.abs(v1-v2))<epsilon ;
// console.log(A(Math.PI/2.0,1.5708))
// console.log(A(Math.PI/5.0,1.5708))
// true / false
// -----------------------------------------------------------------------------------------
// (()=>
// {
//     let x,y;
//     try{
//         throw new Error()
//     }catch(x){
//         (x=1),(y=2);
//         console.log(x);
//         console.log(y)
//     }
//     console.log(x);
//     console.log(y)
// }
// )()
// 1,2,undefined ,2
// --------------------------------------------------------------------------------------------------------
// let i,j,cnt;
// cnt=0 ;
// i=0
// for(j=-4;j<=4;j++){
//     if((j>=0)&& (i++))
//     cnt=cnt+j
// }
// cnt=cnt+i;
// console.log(cnt)
// 15 is right ans
// --------------------------------------------------------------
// v- e + f =2 is formulla where v is vertice 
// e is edge and f is faces
// console.log(2-16+29)

// console.log(isNaN(undefined))
// true
// ---------------------------------------------------------------------------------------------------------
// let a=40,b=35,c=20,d=10;
// // console.log(a*b/c-d) 60
// // console.log(a*b/(c-d)) 140
// console.log(140-60)
// -----------------------------------------------------------------------------
//  1, time complextity of binary search in linkedlist is o(n)=>true
// 2. space complexty in revercing doubly 
//    linkedlist is o(1)                                 => true
// 3.binary search is not possible in linked list ;        => false
// it is possible to reverce singlylinkedlist in o(1)      =>   ans is false
// ------------------------------------------------------------------------------

// const demo =(Arr,val)=>Arr.reduce((A,v)=>(v===val ? A+1 :A),0)
// console.log(demo([1,1,2,1,2,3],1))
// how many 1 
// ans is 3
// function t(){
//     console.log('wow')
// }() no
// var tr =function t(){
//     console.log('wow')
// }()   true
// -------------------------------------------------------------------
// time complexity of linkedlist in insertion
// front o(1)
// end(n)
// time complexity of linkedlist in deletion
// front o(1);
// end o(n)
// -------------------------------------------------------------------------------------
// transemission speed and the propagation speed in token ring network 
// is 10**7bps and 200 meters/micro second respectively. 1-bit delay in 
// this network will be
//  equal to what meters of cable ?


// Best answer

// As, token ring network

//   So,        transmission delay = length / bandwidth

//                   transmission delay = 1/10^7 = 0.1micro sec.

//    as,  propagation speed =200m/micro sec.

//          In , 1micro sec.  it covers 200m

//   than in 0.1micro sec. it is 20metres.
// mac address is an instance of whice of the following layer ?
// ans is data link layer
// function outer (f=inner()){
//     function inner(){
//         console.log('inner')
//     }
// }
// -------------------------------------------------------------------------
// outer() refrence erroer
// const {car:myCar}={car:"ford"}
// console.log(car)
// refernce console.error();
// ---------------------------------------------------------------------------------
// let a=10;let b,c;
// b=a++;
// c=a
// console.log(a,b,c)
// 11,10,11
// ---------------------------------------------------------------------------------
// var list =['green','blue','orange'];
// list.unshift('yellow','purple');
// list.pop();
// console.log(list)
// yellow purple green blue
// -----------------------------------------------------------------------
// type of schedule are long short medium
//---------------------------------------------------------------
// what are the name of the protocol that allows to send a broadcast with MAC address and receive an ip address in reply ?
// ARP is coorect answer
//--------------------------------------------------------------------------------------------
// datastucture maintained by the operating system for every process ?
// pcb process controll block


// let v1=5,v2=10
// for(let i=1;i<=2;i++){
//     console.log(v1++,--v2)
//     console.log(v2--,++v1)
// }
// // 59,97,77,79
// let x=3,y=4,z=2
// let a=(x>y)?((x>z)?x:z):((y>z)?y:z)
// console.log(a)=>4













 
















































