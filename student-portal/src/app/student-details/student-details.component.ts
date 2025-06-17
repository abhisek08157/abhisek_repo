import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  studentId: number = 0;
  age: number = 0;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.studentId = Number(this.route.snapshot.paramMap.get('id'));
  }

  submitAge() {
    if (this.age >= 18) {
      this.router.navigate(['/access-granted']);
    } else {
      alert('Access Denied. Age must be 18 or above.');
    }
  }
}
