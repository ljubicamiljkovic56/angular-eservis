import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { CreateDocumentComponent } from './create-document/create-document.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { CreateTeacherComponent } from './create-teacher/create-teacher.component';
import { DocumentDetailsComponent } from './document-details/document-details.component';
import { DocumentListComponent } from './document-list/document-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentListComponent } from './student-list/student-list.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { UpdateDocumentComponent } from './update-document/update-document.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';

const routes: Routes = [
  {path: 'students', component: StudentListComponent},
  {path: 'create-student', component: CreateStudentComponent},
  {path: '', redirectTo: 'students', pathMatch: 'full'},
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
  {path: 'update-document/:id', component: UpdateDocumentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
