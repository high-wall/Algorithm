function solution(arr, divisor) {
    const answer = arr.filter(v => v% divisor == 0)
    
    return answer.length > 0 ? answer.sort((a, b) => a - b) : [-1];
}

console.log(solution([2, 36, 1, 3],1))