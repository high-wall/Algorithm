function solution(numbers) {
    result = new Set(); 
    numbers.map((v,i) => {
        for (let j = 0; j < i; j++) {
            result.add(v + numbers[j])
        }
    })
    console.log(Array.from(result).sort((a,b) => a-b))
}

solution([5, 0, 2, 7])