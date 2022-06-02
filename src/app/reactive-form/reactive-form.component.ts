import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  mioForm: FormGroup;
  selectedColor: FormControl = new FormControl();
  color: string = 'black';

  constructor(builder: FormBuilder) {
    this.mioForm = builder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      email: ['', Validators.compose([Validators.required, this.mailValidators()])],
      password: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  mailValidators(): ValidatorFn | null {
    return (control: AbstractControl): ValidationErrors | null => {
      return !control.value.includes('@') ? { invalidMail: true } : null;
    }
  }

  onSubmit(form: any): void {
    if (!this.mioForm.valid) {
      alert('Compilare tutti i campi!');
      return
    }
    console.log(this.mioForm.value);
    console.log(this.mioForm.controls['username'].value);
  }

  changeColor(): void{
    switch (this.selectedColor.value) {
      case '1': this.color = 'crimson'; break;
      case '2': this.color = 'seagreen'; break;
      case '3': this.color = 'purple'; break;
      default: this.color = 'black';
    }
    // console.log(this.selectedColor.value);
  }

}
