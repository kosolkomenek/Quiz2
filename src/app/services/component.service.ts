import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComponentService {
  input = new Subject<number>();
  mode = new BehaviorSubject('isPrime');
  constructor() {}
}
