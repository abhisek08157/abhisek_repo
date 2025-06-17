import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { AccessGrantedComponent } from './access-granted/access-granted.component';

const routes: Routes = [
  { path: '', component: StudentListComponent },
  { path: 'student/:id', component: StudentDetailsComponent },
  { path: 'access-granted', component: AccessGrantedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
