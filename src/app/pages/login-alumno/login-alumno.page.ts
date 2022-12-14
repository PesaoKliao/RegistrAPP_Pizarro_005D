import { Component, OnInit } from '@angular/core';
import { MenuController} from '@ionic/angular';

@Component({
  selector: 'app-login-alumno',
  templateUrl: './login-alumno.page.html',
  styleUrls: ['./login-alumno.page.scss'],
})
export class LoginAlumnoPage implements OnInit {

  constructor(private menuController:MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  usuario={
    email:'',
    password:'',
  }

  onSubmit(){
    console.log('Submit');
    console.log(this.usuario);
  }
}
