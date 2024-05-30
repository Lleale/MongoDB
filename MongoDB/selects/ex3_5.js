function strToDate(dateString) {
    var dateParts = dateString.split('.');

    // Создаем объект Date
    var date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
    return date;
}

// Агрегационный запрос для вычисления возраста студентов
db.Students.find().forEach(function (student) {
    if (strToDate(student.date_of_birth).getMonth() === new Date().getMonth()) {
        print(student.name);
    }
});
