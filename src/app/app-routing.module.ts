import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { CreateDocumentComponent } from './create-document/create-document.component';
import { CreateEnrollmentComponent } from './create-enrollment/create-enrollment.component';
import { CreateExamPeriodComponent } from './create-exam-period/create-exam-period.component';
import { CreateExamComponent } from './create-exam/create-exam.component';
import { CreatePaymentComponent } from './create-payment/create-payment.component';
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
import { ForAdminComponent } from './for-admin/for-admin.component';
import { ForStudentComponent } from './for-student/for-student.component';
import { ForTeacherComponent } from './for-teacher/for-teacher.component';
import { LoginComponent } from './login/login.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { EnrollmentService } from './services/enrollment.service';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentsPaymentComponent } from './students-payment/students-payment.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';
import { TeacherEditComponent } from './teacher-edit/teacher-edit.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { UpdateDocumentComponent } from './update-document/update-document.component';
import { UpdateEnrollmentComponent } from './update-enrollment/update-enrollment.component';
import { UpdateExamPeriodComponent } from './update-exam-period/update-exam-period.component';
import { UpdateExamComponent } from './update-exam/update-exam.component';
import { UpdatePaymentComponent } from './update-payment/update-payment.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'for-admin', component: ForAdminComponent},
  {path: 'students', component: StudentListComponent},
  {path: 'create-student', component: CreateStudentComponent},
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
  {path: 'create-examperiod', component: CreateExamPeriodComponent},
  {path: 'update-examperiod/:id', component: UpdateExamPeriodComponent},
  {path: 'examperiod-details/:id', component: ExamPeriodDetailsComponent},
  {path: 'exams', component: ExamListComponent},
  {path: 'create-exam', component: CreateExamComponent},
  {path: 'update-exam/:id', component: UpdateExamComponent},
  {path: 'exam-details/:id', component: ExamDetailsComponent},
  {path: 'payments', component: PaymentListComponent},
  {path: 'create-payment', component: CreatePaymentComponent},
  {path: 'update-payment/:id', component: UpdatePaymentComponent},
  {path: 'payment-details/:id', component: PaymentDetailsComponent},
  {path: 'admins', component: AdminListComponent},
  {path: 'create-admin', component: CreateAdminComponent},
  {path: 'admin-details/:id', component: AdminDetailsComponent},
  {path: 'update-admin/:id', component: UpdateAdminComponent},
  {path: 'for-teacher', component:ForTeacherComponent},
  {path: 'teacher-edit/:id', component: TeacherEditComponent},
  {path: 'for-student', component:ForStudentComponent},
  {path: 'students-payment', component:StudentsPaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
