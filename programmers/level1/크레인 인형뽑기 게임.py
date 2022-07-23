board = [
    [0,0,0,0,0],
    [0,0,1,0,3],
    [0,2,5,0,1],
    [4,2,4,4,2],
    [3,5,1,3,1]
]
moves = [1,5,3,5,1,2,1,4]
def solution(board, moves) :
    basket = []
    answer = 0
    for i in moves :
        num = 1
        pop = 0
        while board[num-1][i-1] == 0 and num < len(board):
            num += 1

        target = board[num-1][i-1];
        if target != 0 :
            board[num-1][i-1] = 0

            if len(basket) != 0 :
                pop = basket[-1]

            if pop == target :
                basket.pop()
                answer += 1
            else :
                basket.append(target)


    return answer * 2

solution(board, moves)