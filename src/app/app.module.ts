import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { CreateTeacherComponent } from './create-teacher/create-teacher.component';
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { DocumentListComponent } from './document-list/document-list.component';
import { CreateDocumentComponent } from './create-document/create-document.component';
import { DocumentDetailsComponent } from './document-details/document-details.component';
import { UpdateDocumentComponent } from './update-document/update-document.component';
import { EnrollmentListComponent } from './enrollment-list/enrollment-list.component';
import { EnrollmentDetailsComponent } from './enrollment-details/enrollment-details.component';
import { ExamPeriodListComponent } from './exam-period-list/exam-period-list.component';
import { ExamPeriodDetailsComponent } from './exam-period-details/exam-period-details.component';
import { ExamListComponent } from './exam-list/exam-list.component';
import { ExamDetailsComponent } from './exam-details/exam-details.component';
import { LoginComponent } from './login/login.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { CreateEnrollmentComponent } from './create-enrollment/create-enrollment.component';
import { UpdateEnrollmentComponent } from './update-enrollment/update-enrollment.component';
import { CreateExamPeriodComponent } from './create-exam-period/create-exam-period.component';
import { UpdateExamPeriodComponent } from './update-exam-period/update-exam-period.component';
import { CreateExamComponent } from './create-exam/create-exam.component';
import { UpdateExamComponent } from './update-exam/update-exam.component';
import { CreatePaymentComponent } from './create-payment/create-payment.component';
import { UpdatePaymentComponent } from './update-payment/update-payment.component';
import { ForTeacherComponent } from './for-teacher/for-teacher.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    CreateStudentComponent,
    UpdateStudentComponent,
    StudentDetailsComponent,
    TeacherListComponent,
    CreateTeacherComponent,
    UpdateTeacherComponent,
    TeacherDetailsComponent,
    CourseListComponent,
    CreateCourseComponent,
    UpdateCourseComponent,
    CourseDetailsComponent,
    DocumentListComponent,
    CreateDocumentComponent,
    DocumentDetailsComponent,
    UpdateDocumentComponent,
    EnrollmentListComponent,
    EnrollmentDetailsComponent,
    ExamPeriodListComponent,
    ExamPeriodDetailsComponent,
    ExamListComponent,
    ExamDetailsComponent,
    LoginComponent,
    PaymentListComponent,
    PaymentDetailsComponent,
    CreateEnrollmentComponent,
    UpdateEnrollmentComponent,
    CreateExamPeriodComponent,
    UpdateExamPeriodComponent,
    CreateExamComponent,
    UpdateExamComponent,
    CreatePaymentComponent,
    UpdatePaymentComponent,
    ForTeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
