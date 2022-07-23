absolutes = [4,7,12]
signs = [True,False,True]
def solution(absolutes, signs):
    answer = 0;
    for i in range(len(absolutes)) :
        if signs[i] == True :
            answer += absolutes[i]
        else :
            answer -= absolutes[i]
    return answer

# def solution(absolutes, signs) :
#     answer = sum(absolutes if sign else -absolutes for absolutes, sign in zip(absolutes, signs))
#     return  answer

print(solution(absolutes, signs))
