// Определить группу с максимальной средней оценкой (включая не сдавших)
let max_sum = 0, max_group = 0;
db.Groups.find().forEach(function (grp) {
    let sum = 0, cnt = 0;
    db.Students.find({ group_id: grp._id }).forEach(function (std) {
        let marks = std.marks;
        for (mark of marks) {
            sum += mark.mark;
            cnt += 1;
        }
    })
    let mid = sum / cnt;
    if (mid > max_sum) {
        max_sum = mid;
        max_group = grp.name;
    }
})
print(max_group + " " + max_sum);