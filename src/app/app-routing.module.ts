import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { CreateDocumentComponent } from './create-document/create-document.component';
import { CreateEnrollmentComponent } from './create-enrollment/create-enrollment.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { CreateTeacherComponent } from './create-teacher/create-teacher.component';
import { DocumentDetailsComponent } from './document-details/document-details.component';
import { DocumentListComponent } from './document-list/document-list.component';
import { EnrollmentDetailsComponent } from './enrollment-details/enrollment-details.component';
import { EnrollmentListComponent } from './enrollment-list/enrollment-list.component';
import { ExamDetailsComponent } from './exam-details/exam-details.component';
import { ExamListComponent } from './exam-list/exam-list.component';
import { ExamPeriodDetailsComponent } from './exam-period-details/exam-period-details.component';
import { ExamPeriodListComponent } from './exam-period-list/exam-period-list.component';
import { LoginComponent } from './login/login.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { EnrollmentService } from './services/enrollment.service';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentListComponent } from './student-list/student-list.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { UpdateDocumentComponent } from './update-document/update-document.component';
import { UpdateEnrollmentComponent } from './update-enrollment/update-enrollment.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'students', component: StudentListComponent},
  {path: 'create-student', component: CreateStudentComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'update-student/:id', component: UpdateStudentComponent},
  {path: 'student-details/:id', component: StudentDetailsComponent},
  {path: 'teachers', component: TeacherListComponent},
  {path: 'create-teacher', component: CreateTeacherComponent},
  {path: 'update-teacher/:id', component: UpdateTeacherComponent},
  {path: 'teacher-details/:id', component: TeacherDetailsComponent},
  {path: 'courses', component: CourseListComponent},
  {path: 'create-course', component: CreateCourseComponent},
  {path: 'update-course/:id', component: UpdateCourseComponent},
  {path: 'course-details/:id', component: CourseDetailsComponent},
  {path: 'documents', component: DocumentListComponent},
  {path: 'create-document', component: CreateDocumentComponent},
  {path: 'document-details/:id', component: DocumentDetailsComponent},
  {path: 'update-document/:id', component: UpdateDocumentComponent},
  {path: 'enrollments', component: EnrollmentListComponent},
  {path: 'create-enrollment', component: CreateEnrollmentComponent},
  {path: 'update-enrollment/:id', component: UpdateEnrollmentComponent},
  {path: 'enrollment-details/:id', component: EnrollmentDetailsComponent},
  {path: 'examperiods', component: ExamPeriodListComponent},
  {path: 'examperiod-details/:id', component: ExamPeriodDetailsComponent},
  {path: 'exams', component: ExamListComponent},
  {path: 'exam-details/:id', component: ExamDetailsComponent},
  {path: 'payments', component: PaymentListComponent},
  {path: 'payment-details/:id', component: PaymentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
