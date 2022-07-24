# reserve에서 lost 제거 = 여벌의 체육복을 가져온 사람이 도난 당했을 경우
# lost+1 or lost-1이 reserve에 있으면 두 배열에서 해당 값 제거
# n-len(lost) = result

n = 7
lost = [2,4,3,7]
reserve = [1,3,5,6]

def solution(n, lost, reserve) :
    new_lost = list(set(lost) - set(reserve))
    new_reserve = list(set(reserve) - set(lost))
    for i in new_reserve :
        if new_lost.__contains__(i+1) : # new_lost.__contains__(i+1) => i+1 in new_lost
            new_lost.remove(i+1)
        elif new_lost.__contains__(i-1) :
            new_lost.remove(i-1)

    return n-len(new_lost)

print(solution(n,lost,reserve))
