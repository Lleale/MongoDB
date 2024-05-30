db.Groups.find({}, { name: 1, direction: 1 }).forEach(function (grp) {
    let direction = db.Directions.findOne({ _id: grp.direction }).name;
    let budget = db.Students.count({ group_id: grp._id, budget: true });
    let ne_budget = db.Students.count({ group_id: grp._id, budget: false });
    print({
        'group': grp.name,
        'direction': direction,
        'бюджет': budget,
        'внебюджет': ne_budget
    })
});