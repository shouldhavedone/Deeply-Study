// /**
//  * @param {string} num1
//  * @param {string} num2
//  * @return {string}
//  */
// var multiply = function (num1, num2) {
//     // 字符串转换为数字
//     const left = '0'.charCodeAt(0)
//     // num1Arr 较短数字，num2Arr 较长数字
//     const num1Arr = (num1.length > num2.length ? num2 : num1).split('').map(item => item.charCodeAt(0) - left)
//     const num2Arr = (num1.length > num2.length ? num1 : num2).split('').map(item => item.charCodeAt(0) - left)

//     let result = []

//     for (let i = num1Arr.length - 1; i > -1; i--) {
//         for (let j = num2Arr.length - 1; j > -1; j--) {
//             const resArr = (num1Arr[i] * num2Arr[j]).toString().split('')
//             resArr.reverse()
//             const index = num2Arr.length - 1 - j + num1Arr.length - 1 - i

//         }
//     }


//     return result
// };


// let num1 = '123',
//     num2 = '456'
// let result = multiply(num1, num2)

// console.log(result)

