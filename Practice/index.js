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




/*Soru 6 : arr = [-2,2,5,1,-2,1] output = 6 arr = [-2,2,5,1] dizi içinde tekrar eden değerleri sil yeni diziyi topla

const solution = (arr) => {
    const newArr = [...new Set(arr)] //set veri yapısı  bize tekrar eden dizileri atar ve yeni bir dizi oluştururuz.
    // geriye kalan işlemde yeni dizi içindeki elemanları toplama bunu for ya da reduce ile yapalım 
    //return newArr.reduce((a,b) => a + b , 0 )
    toplam = 0;
    for(let i = 0 ; i < newArr.length ; i++){
        toplam = toplam + newArr[i];
    }
    return toplam
}   
console.log(solution([-2,2,5,1,-2,1]))
*/

/*Soru 7: input: 123 output: 321 , input:120 output:21 , input : -123 , output:-321   verilen sayıyı ters cevir ve yazdır verilen şartlarra uyarak 

function solution(num){ 
    let arr = num.toString().split('') //reverse() te kullanabilrdik diziyi ters cevirmemizi sağlar
    let newArr = []
    for(let uzunluk = arr.length-1;  0 <= uzunluk; uzunluk--){ 
        newArr.push(arr[uzunluk]);
    }
    let sayi = newArr.reduce((a,b)=> a + b , '');    
    return Number(sayi);
}
console.log(solution(1030))


function solution2(num){
    return num < 0 ?  -1 * Number(num.toString().split('').filter(r => r!= '-').reverse().join('')) 
    : Number(num.toString().split('').filter(r => r!= '-').reverse().join(''));
}
console.log(solution2(-123));

*/


//Soru 8: Arr = [2,4,12,21] , num : 6  => 2+4 =6 return [0,1] indexlerini bize dön


const solution = (arr , num) => {
    for(let i = 0 ; i < arr.length-1; i++){
        for(let j= 0; j < arr.length; j++){
            if(arr[i] + arr[j] == num){
                return [i,j];
            }
        }
    }   
}
console.log(solution([2,4,12,21,5], 7))
















