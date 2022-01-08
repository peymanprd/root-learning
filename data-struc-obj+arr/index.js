/**
 * @a {start}
 * @b {end}
 * @step {addStep}
 * [return array of start and end with step count]
 */
function range(a, b, step) {
    let arr = [a]
    if (step && step != 1) while (a + step <= b) arr.push((a += step))
    else while (a <= b) arr.push((a += 1))
    return arr
}

console.log(range(2, 12, 3))

/**
 * @nums {arrayOfNumbers}
 * [return sum all items in nums array]
 */
function sum(nums) {
    let sum = 0
    nums.forEach((i) => (sum += i))
    return sum
}

console.log(sum(range(1, 10, 2)))

let arr = [1, 2, 3, 4, 5]
/**
 * @arr {array}
 * [return revers array]
 */
function reversArray(arr) {
    let newArr = []
    arr.forEach((i) => newArr.unshift(i))
    return newArr
}
