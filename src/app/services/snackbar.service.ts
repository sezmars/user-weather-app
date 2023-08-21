import {Injectable} from '@angular/core';
import {timer} from "rxjs";

import {
  SnackbarComponent,
  SnackbarType,
  TSnackbarPosition
} from "~shared/components/snackbar/snackbar.component";

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  private snackbarComponent?: SnackbarComponent;

  public setSnackbarComponent(snackbarComponent: SnackbarComponent) {
    this.snackbarComponent = snackbarComponent;
  }

  public openSnackbar(message: string, type: SnackbarType, position: TSnackbarPosition = 'bottom', duration: number = 5000) {
    if (this.snackbarComponent) {
      this.snackbarComponent.message$.next(message);
      this.snackbarComponent.type = type;
      this.snackbarComponent.show$.next(true);
      this.snackbarComponent.position = position;

      if (duration && (duration > 0)) {
        timer(duration).subscribe(() => {
          console.log('subscribe')
          this.closeSnackbar();
        });
      }
    }
  }

  public closeSnackbar() {
    if (this.snackbarComponent) {
      this.snackbarComponent.show$.next(false);
    }
  }
}
