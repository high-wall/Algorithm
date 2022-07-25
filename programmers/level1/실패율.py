N = 4
stages = [1, 2, 3, 2, 1]
# return 3214
# N = 5
# stages = [2, 1, 2, 6, 2, 4, 3, 3]
def solution (N, stages) :
    d = {}
    stage = [0 for i in range(N+1)]
    for i in stages :
        stage[i-1] += 1

    for i in range(0,N) :
        # 도달 수
        a = sum(stage[i:])
        # 클리어 수
        b = sum(stage[i+1:])
        d[i] = 0 if a == 0 else b / a
    d = sorted(d.items(), key=lambda x:x[1])

    return [i+1 for (i,j) in d]

print(solution(N, stages))

# 1 6 7 9 13 23, 24