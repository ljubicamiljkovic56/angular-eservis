import { Course } from "./course";
import { Student } from "./student";

export class Enrollment {
    public id: number;
    public startDate: Date;
    public endDate: Date;
    public course: Course;
    public student: Student;
}
