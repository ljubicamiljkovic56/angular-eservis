import { Course } from "./course";
import { ExamPeriod } from "./exam-period";
import { Student } from "./student";

export class Exam {
    public id: number;
    public examPoints: number;
    public labPoints: number;
    public datum: Date;
    public course: Course;
    public student: Student;
    public examPeriod: ExamPeriod;
}
