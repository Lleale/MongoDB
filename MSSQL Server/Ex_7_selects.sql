SELECT Subjects.name, lessons_schedule.date, COUNT(*)
FROM Subjects
JOIN subs_teachs_dirs ON subs_teachs_dirs.subject_id = Subjects.id
JOIN lessons_schedule ON lessons_schedule.subject_id = subs_teachs_dirs.id
JOIN attendance ON attendance.scedule_id = lessons_schedule.id
WHERE attendance.presense=1
GROUP BY Subjects.name, lessons_schedule.date;


SELECT subjects.name, lessons_schedule.date, COUNT(*)
FROM subjects
JOIN subs_teachs_dirs ON subs_teachs_dirs.subject_id = subjects.id
JOIN lessons_schedule ON lessons_schedule.subject_id = subs_teachs_dirs.id
JOIN attendance ON attendance.scedule_id = lessons_schedule.id
WHERE attendance.presense=0
GROUP BY subjects.name, lessons_schedule.date;


SELECT Teachers.name, lessons_schedule.date, COUNT(*)
FROM Teachers
JOIN subs_teachs_dirs ON subs_teachs_dirs.teacher_id = Teachers.id
JOIN lessons_schedule ON lessons_schedule.subject_id = subs_teachs_dirs.id
JOIN attendance ON attendance.scedule_id = lessons_schedule.id
WHERE attendance.presense=1
GROUP BY Teachers.name, lessons_schedule.date;


SELECT Students.name, Subjects.name, lessons_schedule.date, COUNT(*)*1.5
FROM Students
JOIN attendance ON attendance.student_id = Students.id
JOIN lessons_schedule ON lessons_schedule.id = attendance.scedule_id
JOIN subs_teachs_dirs ON subs_teachs_dirs.id = lessons_schedule.subject_id
JOIN Subjects ON Subjects.id = subs_teachs_dirs.subject_id
WHERE attendance.presense=1
GROUP BY Students.name, Subjects.name, lessons_schedule.date;