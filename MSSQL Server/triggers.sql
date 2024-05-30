-- students
CREATE TRIGGER After_delete_students
ON Students
AFTER DELETE
AS
BEGIN
    DELETE FROM Phone_numbers
    WHERE Phone_numbers.student_id IN (SELECT id FROM deleted);

    DELETE FROM Marks
    WHERE Marks.student_id IN (SELECT id FROM deleted);

    DELETE FROM attendance
    WHERE attendance.student_id IN (SELECT id FROM deleted);
END;


CREATE TRIGGER Before_update_students
ON Students
FOR UPDATE
AS
BEGIN
    IF NOT EXISTS (SELECT id FROM Groups WHERE Groups.id = (SELECT group_id FROM inserted))
    BEGIN
        RAISERROR ('Group with this id doesn''t exist in database', 16, 1)
        ROLLBACK TRANSACTION;
        RETURN;
    END;
END;


CREATE TRIGGER Before_insert_students
ON Students
FOR INSERT
AS
BEGIN
	IF NOT EXISTS(SELECT id FROM Groups WHERE Groups.id = (SELECT group_id FROM inserted))
    BEGIN
        RAISERROR ('Group with this id doesn''t exist in database', 16, 1)
        ROLLBACK TRANSACTION;
        RETURN;
    END;
END;


-- phone_numbers

CREATE TRIGGER Before_update_phone_numbers
ON Phone_numbers
FOR UPDATE
AS
BEGIN
	IF NOT EXISTS(SELECT id FROM Students WHERE Students.id = (SELECT student_id FROM inserted))
    BEGIN
        RAISERROR ('Student with this id doesn''t exist in database', 16, 1)
        ROLLBACK TRANSACTION;
        RETURN;
    END;
END;



CREATE TRIGGER Before_insert_phone_numbers
ON Phone_numbers
FOR INSERT
AS
BEGIN
	IF NOT EXISTS(SELECT id FROM Students WHERE Students.id = (SELECT student_id FROM inserted))
    BEGIN
        RAISERROR ('Student with this id doesn''t exist in database', 16, 1)
        ROLLBACK TRANSACTION;
        RETURN;
    END;
END;



-- marks

CREATE TRIGGER Before_update_phone_numbers
ON Phone_numbers
FOR UPDATE
AS
BEGIN
	IF NOT EXISTS(SELECT id FROM Students WHERE Students.id = (SELECT student_id FROM inserted))
    BEGIN
        RAISERROR ('Student with this id doesn''t exist in database', 16, 1)
        ROLLBACK TRANSACTION;
        RETURN;
    END;
END;



CREATE TRIGGER Before_insert_phone_numbers
ON Phone_numbers
FOR INSERT
AS
BEGIN
	IF NOT EXISTS(SELECT id FROM Students WHERE Students.id = (SELECT student_id FROM inserted))
    BEGIN
        RAISERROR ('Student with this id doesn''t exist in database', 16, 1)
        ROLLBACK TRANSACTION;
        RETURN;
    END;
END;



-- attendance

CREATE TRIGGER Before_update_attendanse
BEFORE UPDATE
ON `attendance`
FOR EACH ROW
BEGIN
	IF (NOT EXISTS(SELECT id FROM Students WHERE Students.id = NEW.student_id))
    	THEN SIGNAL SQLSTATE '45000'
        	SET MESSAGE_TEXT = "Student with this id doesn't exist in database";
    END IF;
    IF (NOT EXISTS(SELECT id FROM lessons_schedule WHERE lessons_schedule.id = NEW.scedule_id))
    	THEN SIGNAL SQLSTATE '45000'
        	SET MESSAGE_TEXT = "Subject with this id doesn't exist in shedule";
    END IF;
END;



CREATE TRIGGER Before_insert_attendanse
BEFORE INSERT
ON `attendance`
FOR EACH ROW
BEGIN
	IF (NOT EXISTS(SELECT id FROM Students WHERE Students.id = NEW.student_id))
    	THEN SIGNAL SQLSTATE '45000'
        	SET MESSAGE_TEXT = "Student with this id doesn't exist in database";
    END IF;
    IF (NOT EXISTS(SELECT id FROM lessons_schedule WHERE lessons_schedule.id = NEW.scedule_id))
    	THEN SIGNAL SQLSTATE '45000'
        	SET MESSAGE_TEXT = "Subject with this id doesn't exist in shedule";
    END IF;
END;



-- groups

CREATE TRIGGER Before_delete_groups
BEFORE DELETE
ON `Groups`
FOR EACH ROW
BEGIN
	IF (EXISTS(SELECT id FROM Students WHERE Students.group_id = OLD.id))
    	THEN SIGNAL SQLSTATE '45000'
        	SET MESSAGE_TEXT = "You have students in this group. Delete them before";
    END IF;
END;



CREATE TRIGGER Before_update_groups
BEFORE UPDATE
ON `Groups`
FOR EACH ROW
BEGIN
	IF (NOT EXISTS(SELECT id FROM Directions WHERE Directions.id = NEW.direction_id))
    	THEN SIGNAL SQLSTATE '45000'
        	SET MESSAGE_TEXT = "Direction with this id doesn't exist in database";
    END IF;
END;



CREATE TRIGGER Before_insert_groups
BEFORE INSERT
ON `Groups`
FOR EACH ROW
BEGIN
	IF (NOT EXISTS(SELECT id FROM Directions WHERE Directions.id = NEW.direction_id))
    	THEN SIGNAL SQLSTATE '45000'
        	SET MESSAGE_TEXT = "Direction with this id doesn't exist in database";
    END IF;
END;



-- timetable, subjects, teachers, directions

CREATE TRIGGER Before_delete_timetable
BEFORE DELETE
ON `timetable`
FOR EACH ROW
BEGIN
	IF (EXISTS(SELECT id FROM lessons_schedule WHERE lessons_schedule.time_id = OLD.id))
    	THEN SIGNAL SQLSTATE '45000'
        	SET MESSAGE_TEXT = "You have lessons in this time. Delete them before";
    END IF;
END;




CREATE TRIGGER Before_delete_subjects
BEFORE DELETE
ON `Subjects`
FOR EACH ROW
BEGIN
	IF (EXISTS(SELECT id FROM subs_teachs_dirs WHERE subs_teachs_dirs.subject_id = OLD.id))
    	THEN SIGNAL SQLSTATE '45000'
        	SET MESSAGE_TEXT = "You have lessons on this subject. Delete them before";
    END IF;
END;




CREATE TRIGGER Before_delete_teachers
BEFORE DELETE
ON `Teachers`
FOR EACH ROW
BEGIN
	IF (EXISTS(SELECT id FROM subs_teachs_dirs WHERE subs_teachs_dirs.teacher_id = OLD.id))
    	THEN SIGNAL SQLSTATE '45000'
        	SET MESSAGE_TEXT = "You have lessons with this teacher. Delete them before";
    END IF;
END;




CREATE TRIGGER Before_delete_directions
BEFORE DELETE
ON `Directions`
FOR EACH ROW
BEGIN
	IF (EXISTS(SELECT id FROM subs_teachs_dirs WHERE subs_teachs_dirs.direction_id = OLD.id))
    	THEN SIGNAL SQLSTATE '45000'
        	SET MESSAGE_TEXT = "You have lessons with this direction. Delete them before";
    END IF;
    IF (EXISTS(SELECT id FROM Groups WHERE Groups.direction_id = OLD.id))
    	THEN SIGNAL SQLSTATE '45000'
        	SET MESSAGE_TEXT = "You have groups in this direction. Delete them before";
    END IF;
END;



-- shedule

CREATE TRIGGER Before_delete_lessons_shedule
BEFORE DELETE
ON `lessons_schedule`
FOR EACH ROW
BEGIN
	IF (EXISTS(SELECT id FROM attendance WHERE attendance.scedule_id = OLD.id))
    	THEN SIGNAL SQLSTATE '45000'
        	SET MESSAGE_TEXT = "You have attendances of students on this lesson. Delete them before";
    END IF;
END;



CREATE TRIGGER Before_update_lessons_shedule
BEFORE UPDATE
ON `lessons_schedule`
FOR EACH ROW
BEGIN
	IF (NOT EXISTS(SELECT id FROM timetable WHERE timetable.id = NEW.time_id))
    	THEN SIGNAL SQLSTATE '45000'
        	SET MESSAGE_TEXT = "Doesnt have lesson in timetable with this id.";
    END IF;
    IF (NOT EXISTS(SELECT id FROM subs_teachs_dirs WHERE subs_teachs_dirs.id = NEW.subject_id))
    	THEN SIGNAL SQLSTATE '45000'
        	SET MESSAGE_TEXT = "Doesnt have lesson with this id.";
    END IF;
END;



CREATE TRIGGER Before_insert_lessons_shedule
BEFORE INSERT
ON `lessons_schedule`
FOR EACH ROW
BEGIN
	IF (NOT EXISTS(SELECT id FROM timetable WHERE timetable.id = NEW.time_id))
    	THEN SIGNAL SQLSTATE '45000'
        	SET MESSAGE_TEXT = "Doesnt have lesson in timetable with this id.";
    END IF;
    IF (NOT EXISTS(SELECT id FROM subs_teachs_dirs WHERE subs_teachs_dirs.id = NEW.subject_id))
    	THEN SIGNAL SQLSTATE '45000'
        	SET MESSAGE_TEXT = "Doesnt have lesson with this id.";
    END IF;
END;



-- subs_teachs_dirs

CREATE TRIGGER Before_delete_subs_teachs_dirs
BEFORE DELETE
ON `subs_teachs_dirs`
FOR EACH ROW
BEGIN
	IF (EXISTS(SELECT id FROM Marks WHERE Marks.std_id = OLD.id))
    	THEN SIGNAL SQLSTATE '45000'
        	SET MESSAGE_TEXT = "You have marks of students on this lesson. Delete them before";
    END IF;
    IF (EXISTS(SELECT id FROM lessons_schedule WHERE lessons_schedule.subject_id = OLD.id))
    	THEN SIGNAL SQLSTATE '45000'
        	SET MESSAGE_TEXT = "You have this lessons in shedule. Delete them before";
    END IF;
END;



CREATE TRIGGER Before_update_subs_teachs_dirs
BEFORE UPDATE
ON `subs_teachs_dirs`
FOR EACH ROW
BEGIN
	IF (NOT EXISTS(SELECT id FROM Teachers WHERE Teachers.id = NEW.teacher_id))
    	THEN SIGNAL SQLSTATE '45000'
        	SET MESSAGE_TEXT = "Doesnt have teacher with this id.";
    END IF;
    IF (NOT EXISTS(SELECT id FROM Directions WHERE Directions.id = NEW.direction_id))
    	THEN SIGNAL SQLSTATE '45000'
        	SET MESSAGE_TEXT = "Doesnt have direction with this id.";
    END IF;
    IF (NOT EXISTS(SELECT id FROM Subjects WHERE Subjects.id = NEW.subject_id))
    	THEN SIGNAL SQLSTATE '45000'
        	SET MESSAGE_TEXT = "Doesnt have subject with this id.";
    END IF;
END;



CREATE TRIGGER Before_insert_subs_teachs_dirs
BEFORE INSERT
ON `subs_teachs_dirs`
FOR EACH ROW
BEGIN
	IF (NOT EXISTS(SELECT id FROM Teachers WHERE Teachers.id = NEW.teacher_id))
    	THEN SIGNAL SQLSTATE '45000'
        	SET MESSAGE_TEXT = "Doesnt have teacher with this id.";
    END IF;
    IF (NOT EXISTS(SELECT id FROM Directions WHERE Directions.id = NEW.direction_id))
    	THEN SIGNAL SQLSTATE '45000'
        	SET MESSAGE_TEXT = "Doesnt have direction with this id.";
    END IF;
    IF (NOT EXISTS(SELECT id FROM Subjects WHERE Subjects.id = NEW.subject_id))
    	THEN SIGNAL SQLSTATE '45000'
        	SET MESSAGE_TEXT = "Doesnt have subject with this id.";
    END IF;
END;
