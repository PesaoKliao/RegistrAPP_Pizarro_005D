import { Component, OnInit } from '@angular/core';
import { MenuController} from '@ionic/angular';

@Component({
  selector: 'app-login-profesor',
  templateUrl: './login-profesor.page.html',
  styleUrls: ['./login-profesor.page.scss'],
})
export class LoginProfesorPage implements OnInit {

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
