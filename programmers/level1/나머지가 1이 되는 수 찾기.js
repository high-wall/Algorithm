function solution(n) {
    let i = 1
    while (i < n) {
        if (n % i == 1) { 
            break
        }
        i++ 
    }

    return i
}

solution(10)