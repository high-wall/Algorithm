function solution(survey, choices) {
    const types = ['RT', 'CF', 'JM', 'AN']
    const score = [0,3,2,1,0,1,2,3]
    const test = []
    const answer = []
    types.map(x => {
        test[x[0]] = 0
        test[x[1]] = 0
    })
    for (let i = 0; i < survey.length; i++) {
        const fir = survey[i][0]
        const sec = survey[i][1]

        if (choices[i] < 4) {
            test[fir] += score[choices[i]]
        } else if (choices[i] > 4) {
            test[sec] += score[choices[i]]
        }
    }

    types.map((x, i) => {
        const type = test[x[0]] >= test[x[1]] ? x[0] : x[1]
        answer.push(type)
    })
    return answer.join('')
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]))

// TCMA