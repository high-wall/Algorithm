function solution(a, b) {
    const dayOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const date = new Date(2016, a-1, b).getDay();

    return dayOfWeek[date]
}

solution(5,25)