import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentListComponent } from './student-list/student-list.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  {path: 'students', component: StudentListComponent},
  {path: 'create-student', component: CreateStudentComponent},
  {path: '', redirectTo: 'students', pathMatch: 'full'},
  {path: 'update-student/:id', component: UpdateStudentComponent},
  {path: 'student-details/:id', component: StudentDetailsComponent},
  {path: 'teachers', component: TeacherListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
