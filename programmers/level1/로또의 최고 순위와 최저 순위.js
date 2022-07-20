function solution(lottos, win_nums)
{
    let rank = [6,6,5,4,3,2,1];
    let zero_cnt = 6;
    let true_cnt = 0; 
    lottos.forEach(element => {
        if (element !== 0) {
            win_nums.indexOf(element) !== -1 ? true_cnt++ : null; 
            zero_cnt--;
        } 
    });
    const t1 = zero_cnt + true_cnt;
    const t2 = true_cnt;
    const answer = [rank[t1], rank[t2]];
    return answer;
}