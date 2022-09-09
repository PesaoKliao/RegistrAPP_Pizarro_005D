import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {

  constructor(private alertController: AlertController,private menuController:MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  async escanearqr(){
    const alert = await this.alertController.create({
    message: '<img src="assets/escanearqr.png" alt="g-maps" style="border-radius: 2px">',
    buttons: ['Confirmar']
});
await alert.present();
}
}