import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  public isLoading: Subject<boolean> = new Subject<boolean>();

  public show(): void {
    this.isLoading.next(true);
  }

  public hide(): void {
    this.isLoading.next(false);
  }
}
