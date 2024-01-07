function randomNumber (){


let random=Math.random()


if(random>0.5){return 1}

if(random<0.5){return 0}


}


function randomArr(curElem){

let arr=[]

let count1=0;
let count0=0;

for(let i=0;i<curElem;i++){

let random=randomNumber()

if(count0>=count1){arr.push(1);count1++}else{   arr.push(random); if(random===1){count1++}else{count0++}   }







}
return arr

}

randomArr(7)