// Вывести списки групп каждому предмету с указанием преподавателя
db.Subjects.find().forEach(function (subj) {
    print(subj.name);
    db.Directions.find({ "subjects.name": subj._id }).forEach(function (dir) {
        db.Groups.find({ direction: dir._id }).forEach(function (grp) {
            print("\t" + grp.name + " " + db.Teachers.findOne({ _id: sub.teacher }).name);
        })
    })
})