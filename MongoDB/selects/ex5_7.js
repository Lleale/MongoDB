// Вывести студентов со всем оценками отлично и не имеющих несданный экзамен
let sum = 0, cnt = 0;
db.Students.find().forEach(function (std) {
    let marks = std.marks;
    let flag = 0;
    for (mark of marks) {
        if (mark.mark != 5) {
            flag = 1;
            break;
        }
    }
    if (!flag) print(std.name);
})