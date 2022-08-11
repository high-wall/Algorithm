function solution(price, money, count) {
    let total = 0
    for (let index = 1; index <= count; index++) {
        total += price * index
    }
    return total - money <= 0 ? 0 : total - money
}

solution(3,20,4)