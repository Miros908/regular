
let arr=[3,4,3,4,5,5,5]

function filterNumber(arr){

   
for(let i=0;i<arr.length;i++){
    let count=0; 
let elem=arr[i] 

for(let b=0;b<arr.length;b++){

 if(arr[b]===elem){

 count++   
 }  
 
 if(count>2){arr=arr.filter((num)=> num!=elem);i=0;break}

}

}



return arr



}

let a 


console.log(a)

