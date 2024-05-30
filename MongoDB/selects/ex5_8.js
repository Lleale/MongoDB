// Вывести кандидатов на отчисление (не сдан не менее двух предметов)
let sum = 0, cnt = 0;
db.Students.find().forEach(function (std) {
    let marks = std.marks;
    let flag = 0;
    for (mark of marks) {
        if (mark.mark < 3) {
            flag += 1;
        }
    }
    if (flag >= 2) print(std.name);
})