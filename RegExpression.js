function extractElements(string,pattern){

  if(string.match(pattern)!==null)

  { 
   if(string.match(pattern).length===1){return string.match(pattern)[0]}else{
   
    return string.match(pattern)}
  
}


  
  else{return 'Значение отсутствует'}



}



//Задача 1 

const text="Встречаемся 10-03-2023 в 11:30 для обсуждения планов на следующий год."
const pattern=/\d{2}(\/|,|-)\d{2}(\/|,|-)\d{4}/



//Задача 2 

const text2="Мой старый номер телефона: +123-4567-8901. Мой новый номер телефона +380971234567"
const pattern2=/\+380\W?\d{3}\W?\d{3}\W?\d{3}/

//Задача 3 

const text3="Красный цвет это #ff0000, зеленый #00ff00 #00ff00."
const pattern3=/(#\w{6})/g



//Задача 4 


const text4="Лучше использовать https://website.com, чем http://websitse.com"
const pattern4=/https?:\/\/\w+\.com/g



//Задача 5 ???

const text5="Айсберг, радуга, утюг, оазис, остаток."

const pattern5=/\w*[ауоиэыяюеё]{2}\w*\b/g

console.log(extractElements(text5,pattern5))

