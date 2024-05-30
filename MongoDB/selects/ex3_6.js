db.Directions.find({}, { name: 1 }).forEach(function (dir) {
    let cnt = 0;
    db.Groups.find({ direction: dir._id }, { _id: 1 }).forEach(function (grp) {
        cnt += db.Students.count({ group_id: grp._id });
    });
    print({
        direction: dir.name,
        cnt_students: cnt
    })
});