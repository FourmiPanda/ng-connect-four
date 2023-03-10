import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

/**
 * Dialog component to show game result
 */
@Component({
  selector: 'app-end-game-dialog',
  templateUrl: './end-game-dialog.component.html',
  styleUrls: ['./end-game-dialog.component.scss'],
})
export class EndGameDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { isDraw: boolean; color: string },
    private router: Router,
    public dialogRef: MatDialogRef<EndGameDialogComponent>
  ) {}

  /**
   * Return to home page
   */
  goHome() {
    this.router.navigate(['home']);
    this.dialogRef.close();
  }
}
