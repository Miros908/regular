
function sum (a,b){

let sumarr=[]


for(let i=0;i<a.length||i<b.length;i++){
let sum=[]

for(let c=0;c<a[i].length||c<b[i].length;c++){

let asum=0;
let bsum=0;

if(a[i][c]!==undefined){

asum=a[i][c]  
}
if(b[i][c]!==undefined){
 bsum=b[i][c] 
}

sum.push(asum+bsum)






}


sumarr.push(sum)

}



  return sumarr



}











const matrixA = [
    [1, 2, 3,4,55,5,5,5,5,5,,5,5,5,5,5],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
  const matrixB = [
    [9, 8, 7,5,5,5,55,5,5,5],
    [6, 5, 4],
    [3, 2, 1],
    
  ];
  

  sum(matrixA,matrixB)