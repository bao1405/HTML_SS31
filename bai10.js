function maxSubArraySum(arr, n) {
    if (n > arr.length) {
        return null;
    }
    let maxSum = 0;
    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }
    let currentSum = maxSum;
    for (let i = n; i < arr.length; i++) {
        currentSum = currentSum - arr[i - n] + arr[i];
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}

let mang = [1, 2, 5, 2, 8, 1, 5];
let n = prompt("nhap n");
let ketQua = maxSubArraySum(mang, n);

console.log(ketQua);