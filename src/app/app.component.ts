import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {FormServiceService} from './service/form-service.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, NgIf],
  providers: [FormServiceService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'simple-form';

  form: FormGroup;

  constructor(private fb: FormBuilder, private myService: FormServiceService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted:', this.form.value);
      this.myService.formValue(this.form.value).subscribe()
    } else {
      alert('Please fill out all fields correctly.');
    }

  }
}
