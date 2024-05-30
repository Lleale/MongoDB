// Определить сколько студентов обучатся у каждого из преподавателей
db.Teachers.find().forEach(function (tec) {
    print(tec.name);
    let cnt = 0;
    db.Directions.find({ 'subjects.teacher': tec._id }).forEach(function (dir) {
        db.Groups.find({ direction: dir._id }).forEach(function (grp) {
            cnt += db.Students.countDocuments({ group_id: grp._id })
        })
    })
    print(cnt);
})