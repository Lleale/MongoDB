// Определить, какую дисциплину изучает максимальное количество студентов
let max_cnt = 0;
let max_sub = '';
db.Subjects.find().forEach(function (subj) {
    let cnt = 0;
    db.Directions.find({ "subjects.name": subj._id }).forEach(function (dir) {
        db.Groups.find({ direction: dir._id }).forEach(function (grp) {
            cnt += db.Students.countDocuments({ group_id: grp._id });
        })
    })
    if (cnt > max_cnt) {
        max_sub = subj.name;
        max_cnt = cnt;
    }
})
print(max_sub);