// const new_id = "...!@BaT#*..y.abcdefghijklm..";
const new_id = "=.=";

function solution(new_id) {
    let answer = '';
    answer = new_id.toLowerCase();
    answer = answer.replace(/[^\w\s-\s_\s.]/g, "");
    arr = answer.split('');
    answer = arr.map((v, i) => { return v == "." ? v != arr[i+1] ? v : '' : v });
    answer = answer.join('');
    answer = answer.replace(/^\.+|\.+$/gm, "");
    if (answer == '') answer = "a";
    if (answer.length > 15) answer = answer.slice(0, 15).replace(/^\.+|\.+$/gm, "");
    if (answer.length < 3) answer += answer.slice(-1).repeat(3 - answer.length); 
    console.log(answer);
    return answer;
}

solution(new_id); 
