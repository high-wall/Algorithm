function solution(id_list, report, k)
{
    const a = []
    const result = []
    const answer = []
    id_list.map(x => {
        a[x] = new Set()
        result[x] = 0
    })
    report.map(v => {
        v = v.split(' ')
        a[v[1]].add(v[0])
    })
    id_list.map(x => {
        if (a[x].size >= k) {
            a[x].forEach(i => {
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
solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2)