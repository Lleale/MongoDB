SELECT Students.name, Subjects.name AS 'subject', Groups.name AS 'group', Teachers.name AS 'teacher'
FROM subs_teachs_dirs
JOIN Subjects ON Subjects.id = subs_teachs_dirs.subject_id
JOIN Directions ON Directions.id = subs_teachs_dirs.direction_id
JOIN Teachers ON Teachers.id = subs_teachs_dirs.teacher_id
JOIN Groups ON Groups.direction_id = Directions.id
JOIN Students ON Students.group_id = Groups.id
ORDER BY Groups.name;

SELECT Subjects.name AS 'subject',COUNT(*) AS cnt
FROM subs_teachs_dirs
JOIN Subjects ON Subjects.id = subs_teachs_dirs.subject_id
JOIN Directions ON Directions.id = subs_teachs_dirs.direction_id
JOIN Groups ON Groups.direction_id = Directions.id
JOIN Students ON Students.group_id = Groups.id
GROUP BY Subjects.name
ORDER BY cnt DESC;

SELECT Teachers.name AS 'subject',COUNT(*) AS cnt
FROM subs_teachs_dirs
JOIN Teachers ON Teachers.id = subs_teachs_dirs.teacher_id
JOIN Directions ON Directions.id = subs_teachs_dirs.direction_id
JOIN Groups ON Groups.direction_id = Directions.id
JOIN Students ON Students.group_id = Groups.id
GROUP BY Teachers.name
ORDER BY cnt DESC;

SELECT Subjects.name, (SUM(IIF(Marks.mark>2, 1, 0))* 100.0 / COUNT(*)) as 'piece' FROM Subjects
JOIN subs_teachs_dirs ON subs_teachs_dirs.subject_id = Subjects.id
JOIN Marks ON Marks.std_id = subs_teachs_dirs.id
GROUP BY Subjects.name;

SELECT Subjects.name, AVG(Marks.mark) as 'avg' FROM Subjects
JOIN subs_teachs_dirs ON subs_teachs_dirs.subject_id = Subjects.id
JOIN Marks ON Marks.std_id = subs_teachs_dirs.id
WHERE Marks.mark > 2
GROUP BY Subjects.name;

SELECT Groups.name AS 'group', AVG(Marks.mark) as 'avg' FROM Groups
JOIN Students ON Students.group_id = Groups.id
JOIN Marks ON Marks.student_id = Students.id
GROUP BY Groups.name
ORDER BY AVG(Marks.mark) DESC;

-- Надо добавить проверку на присутствие отметок по всем предметам
SELECT Students.name, AVG(Marks.mark)
FROM Students
JOIN Marks ON Marks.student_id = Students.id
GROUP BY Students.name
HAVING AVG(Marks.mark) = 5.0;
-- end

SELECT Students.name
FROM Students
JOIN Marks ON Marks.student_id = Students.id
WHERE Marks.mark = 2
GROUP BY Students.name
HAVING COUNT(*)>1;
