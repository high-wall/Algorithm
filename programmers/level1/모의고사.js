function solution(answers) {
    const a = [1, 2, 3, 4, 5]
    const b = [2, 1, 2, 3, 2, 4, 2, 5]
    const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    const d = [0, 0, 0]
    const e = new Map();

    answers.map((v, i) => {
        d[0] += v === a[i] ? 1 : 0
        d[1] += v === b[i] ? 1 : 0
        d[2] += v === c[i] ? 1 : 0
    })
    d.map((x, i) => {
        e.set(i + 1, x)
    })
    const f = [...e]
    f.sort((a, b) => a[1] - b[1])
    const answer = []
    f.map(x => {
        if (x[1] != 0) {
            answer.push(x[0])
        }
    })
    return answer
}

solution([1, 3, 2, 4, 2])