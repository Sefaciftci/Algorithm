/* Soru 1 : [8,4,6,2,3] => output [4,2,4,2,3] birbirinden cıkarma  

const solution = (arr) =>  {
    return arr.map((d,i) => {
        for(const j = i + 1 ; j< arr.length; j++){
            if(arr[i]> arr[j]){
                arr[i] = arr[i] - arr[j]
                break
            }
        }
        return arr[i]
    })
}
console.log(solution([5,7,4,6,2]))
*/



/*Soru 2 : [ [2,3,4,-6,3,-3] , [3,-4,-6,-1,-9] , [3,-5,8,-1] ] dizisinde kaç adet negatif sayı var. 

const solution = (arr) => {
    let newArr = []
    for (let i = 0 ; i < arr.length; i++) {
        for(let j =0; j< arr[i].length; j++ ){
            if(arr[i][j] < 0){
                newArr.push(arr[i][j]);
            }
        }
    }
    return newArr.length;
}
console.log(solution([[2,3,4,-6,3,-3] , [3,-4,-6,-1,-9] , [3,-5,8,-1]]))
*/



/* Soru 3 : [33,56,767,879,3,34] çift basamaklı kaç sayı vardır. Output:3

const solution = (arr) => {
    return arr.filter(r => r.toString().length == 2 ).length
}
console.log(solution([33,56,767,879,3,34]))
*/




/*Soru 4 : n = 5 elemanlı bir dizi yap [-1,-2,0,1,2] dizinin elemanları toplamı 0 olmalı

const solution  = (num) => {
    const newArr =  []
    if(num % 2 == 1){
        newArr.push(0)
    }
    for (let i = 1 ; i < num / 2 ; i++ )  {
        newArr.push(i)
        newArr.unshift(-i)
    }
    return newArr
}
console.log(solution(5))
*/



/*Soru 5 : n = 872 dışarıdan bir sayı yolla 8*7*2 =112 her bir elemanını carp 8+7+2 = 17 her bir elemanını topla 112 - 17 = 95 ve iki sonucu birbirinden çıkar.

const solution = (num) => {
    
    const  arr = num.toString().split('').map(Number)
    return arr.reduce((a,b) => a * b , 1) - arr.reduce((a,b)=> a + b , 0)
}
console.log(solution(872))


const solution2 = (num2) => {
    let arr2 = num2.toString().split('').map(Number)
    let toplam = 0; 
    let carpim = 1;
    for(let i = 0 ; i< arr2.length ; i++){
        toplam+=arr2[i]
        carpim*=arr2[i]
    }
    return carpim -toplam
}
console.log(solution2(872))
*/



/*Soru 6 : arr= [1,2,4,2,-3,3,-1,6] tekrar eden değerleri sil kalan dizi elemanlarını topla

function solution(arr) {
    for(let i = 0 ; i< arr.length ; i++){
        
    }
}
console.log(solution([1,2,4,2,-3,3,-1,6]))
*/





