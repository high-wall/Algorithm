function solution(sizes) {
    let a = [] , b = [] 
    sizes.map(v => {
        a.push(v[0] > v[1] ? v[0] : v[1])
        b.push(v[0] < v[1] ? v[0] : v[1])
    })      
    return Math.max(...a) * Math.max(...b)
}

console.log(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]))