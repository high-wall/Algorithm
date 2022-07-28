function solution(n) {
    a = n.toString(3).split("").reverse().join("");
    return parseInt(a,3);
}

solution(45)