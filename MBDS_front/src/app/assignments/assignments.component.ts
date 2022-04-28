import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AssignmentsService } from '../shared/assignments.service';
import { AssignmentDetailComponent } from './assignment-detail/assignment-detail.component';
import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css'],
})
export class AssignmentsComponent implements OnInit {
  assignments: Assignment[] = [];

  constructor(private assignmentsService:AssignmentsService, private dialog: MatDialog) {}

  openDetailsDialog(assign: Assignment) {
    const dialogRef = this.dialog.open(AssignmentDetailComponent, {
      data: assign
    })
  }

  // appelé après le constructeur et AVANT l'affichage du composant
  ngOnInit(): void {
    console.log("Dans ngOnInit, appelé avant l'affichage")
    // demander les données au service de gestion des assignments...
    this.assignmentsService.getAssignmentsComplete()
    .subscribe((assignments: any) => {
      this.assignments = assignments;
    });

    console.log("Après l'appel au service");
  }
}
