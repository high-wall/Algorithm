function solution(a, b) {
    let answer = 0;
    if (a == b) return a
    c = a > b ? b : a
    d = a > b ? a : b 
    for (let index = c; index <= d; index++) {
        answer += index
    }
    return answer;
}

solution(3,5)