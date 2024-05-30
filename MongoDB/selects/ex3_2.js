db.Students.find({ name: { $regex: /^К/i } }, { name: 1, _id: 0, group_id: 1 }).forEach(function (stud) {
    let groupV = db.Groups.findOne({ _id: stud.group_id }, { name: 1, direction: 1 });
    console.log({ name: stud.name, group: groupV.name, direction: db.Directions.findOne({ _id: groupV.direction }).name })
});
