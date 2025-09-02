import { Injectable } from '@angular/core';
import {ɵFormGroupValue, ɵTypedOrUntyped} from '@angular/forms';
import {EMPTY, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  constructor() { }

  formValue(value: ɵTypedOrUntyped<any, ɵFormGroupValue<any>, any>): Observable<void> {
    let optionalName: string = value.name;
    let optionalAge: number = value.age;

    console.log('Service Name', optionalName);
    console.log('Service Age', optionalAge);

    alert('Form submitted successfully in Service!');

    return EMPTY
  }
}
