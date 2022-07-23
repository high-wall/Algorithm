def solution(a, b):
    answer = sum(list( i*j for i, j in zip(a,b)))

    return answer

solution([1,2,3,4],[-3,-1,0,2])
