var rotate = function(nums, k) {
    //right to k
    const n = nums.length;
    k = k % n;

    reverse(nums, 0, n-1);
    reverse(nums, 0, k-1);
    reverse(nums, k, n-1);
}

var reverse = function(arr, start, end) {
    while(start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}