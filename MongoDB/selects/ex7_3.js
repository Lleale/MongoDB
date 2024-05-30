db.Schedule_attendance.find().forEach(function (sch) {
    print(db.Teachers.findOne({ _id: sch.teacher_id }).name + " - " + db.Subjects.findOne({ _id: sch.subject_id }).name);
    let cnt = 0;
    for (les of sch.lessons)
        cnt += les.students.length;
    print("    " + cnt);
})