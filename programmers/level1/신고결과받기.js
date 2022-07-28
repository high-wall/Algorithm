function solution(id_list, report, k) {
    const map = []
    const result = []
    answer = []
    id_list.forEach(v => {
        map[v] = []
        result[v] = 0
    })
    report.forEach(v => {
        r = v.split(' ');
        map[r[1]].push(r[0])
    })
    id_list.forEach(v => {
        a = new Set(map[v]) 
        if (a.size >= k) {
            a.forEach(i => {
                result[i] += 1
            })
        }
    })
    for (let key of Object.keys(result)) 
    {
        answer.push(result[key])
    }
    return answer
}

solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 2)