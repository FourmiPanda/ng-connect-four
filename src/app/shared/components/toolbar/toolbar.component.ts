import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SettingsDialogComponent } from '../../dialogs/settings-dialog/settings-dialog.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  constructor(
    private translate: TranslateService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  @Input() quitButton = false;

  /**
   * Open settings dialog
   */
  openSettingsDialog() {
    this.dialog.open(SettingsDialogComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: 'fit-content',
      width: 'fit-content',
    });
  }

  /**
   * Set app language
   *
   * @param {string} language The language code
   */
  setLanguage(language: string) {
    this.translate.use(language);
  }

  /**
   * Get flag image corresponding to current selected language
   *
   * @returns {string} Filepath to th flag image
   */
  getCurrentLangImg() {
    return `assets/${this.translate.currentLang}.png`;
  }

  /**
   * Navigate to home page
   */
  quit() {
    this.router.navigate(['home']);
  }
}
