// Определить долю ставших студентов по каждой дисциплине (не оценки или 2 считать не сдавшими)
print("Доля сдавших:");
db.Subjects.find().forEach(function (subj) {
    let cnt = 0, cool = 0;
    db.Students.find({ 'marks.subject': subj._id }).forEach(function (std) {
        for (mark of std.marks) {
            if (mark.subject.equals(subj._id)) {
                if (mark.mark > 2)
                    cool += 1;
                cnt += 1;
            }
        }
    })
    let part = 0
    if (cool && cnt) part = cool / cnt;
    print(subj.name + " " + part);
})