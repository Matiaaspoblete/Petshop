import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';
import { AuthService } from '../../services/auth.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usuario : Usuario[] = [];
  model: any = { name: '', password: '', admin: ''};
  public form: FormGroup;

  constructor(private authService:AuthService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      user: [
        null,
        [
          Validators.required,

        ]
      ],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12),
        ]
      ],
      admin: [
        null,
        [

        ]
      ]
    })
  }

  ngOnInit(): void {
  }
  
  onSubmit() {
    console.log(this.model.admin);
    this.authService.addUsuario(this.model).subscribe((response: Usuario)=> console.log(response));
    
  }
}
