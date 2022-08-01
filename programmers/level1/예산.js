// .sort()만으로는 정렬이 안됨.
// .sort()는 배열을 문자열로 간주하고 비교하기 때문에
// 예시로 [100, 300, 20]을 .sort()로 정렬하면 각 원소의 첫 번째 값을 비교해서 [100, 20, 300]이 됨. 

function solution(d, budget) {
    let answer = 0
    d.sort((a,b) => a - b)
    d.map((v, i) => {
        if (budget < d[i]) {
            return false 
        }
        budget = budget - d[i]
        answer += 1
    })
    return answer
}   
solution([1, 3, 2, 5, 4], 9)