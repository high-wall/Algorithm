function solution(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 !== 0 ? 1 : 2)
}

console.log(solution("abdea"))