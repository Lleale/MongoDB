db.Students.find().forEach(function (std) {
    print(std.name);
    db.Subjects.find().forEach(function (sub) {
        let cnt = 0;
        db.Schedule_attendance.find({ subject_id: sub._id }, { lessons: 1, _id: 0 }).forEach(function (sch) {
            for (les of sch.lessons) {
                for (student of les.students) {
                    if (student.equals(std._id))
                        cnt += 1;
                }
            }
        })
        if (cnt > 0) print("    " + sub.name + ": " + cnt);
    })
})