console.log("hi")
let array = [0,1,1];

function fibonaciSeq(number)
{
    
    if(number < 2)
      return;
    
    else
    {
      fibonaciSeq(number-1)
      array[number]= array[number-1]+array[number-2]
    }



}
fibonaciSeq(8)
console.log(array)

