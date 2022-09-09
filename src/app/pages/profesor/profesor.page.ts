import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.page.html',
  styleUrls: ['./profesor.page.scss'],
})
export class ProfesorPage implements OnInit {

  constructor(private alertController: AlertController,private menuController:MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  async generarqr(){
    const alert = await this.alertController.create({
    message: '<img src="assets/qrGenerico.png" alt="g-maps" style="border-radius: 2px">',
    buttons: ['Confirmar']
});

await alert.present();

}
}
