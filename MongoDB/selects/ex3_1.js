db.Groups.find().forEach(function (group) {
    console.log({ "group": group.name, "students": db.Students.find({ group_id: group._id }, { name: 1, _id: 0, budget: 1 }).toArray() });
})