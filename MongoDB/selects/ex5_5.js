// Определить среднюю оценку по предметам (для сдавших студентов)
print("Средние оценки:");
db.Subjects.find().forEach(function (subj) {
    let sum = 0, cnt = 0;
    db.Students.find({ 'marks.subject': subj._id }).forEach(function (std) {
        for (mark of std.marks) {
            if (mark.subject.equals(subj._id)) {
                if (mark.mark > 2) {
                    sum += mark.mark;
                    cnt += 1;
                }
            }
        }
    })
    let part = 0
    if (sum && cnt) part = sum / cnt;
    print(subj.name + " " + part);
})