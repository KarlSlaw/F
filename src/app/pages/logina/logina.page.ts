import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonInput, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-logina',
  templateUrl: './logina.page.html',
  styleUrls: ['./logina.page.scss'],
})
export class LoginaPage implements OnInit {
  email: any;
  password: any;
  mensaje: any;

  constructor(public alertController: AlertController,
    public toastController: ToastController,
    private router: Router) { }

  ngOnInit() {
  }
  async notificar(em: IonInput, con: IonInput)
  {
    if(em.value == "")
    {
      this.mensaje = "falta el correo";
      const toast = await this.toastController.create({
        message : "Ingrese un correo",
        duration: 2000
      })
      toast.present();
    }
    else if(em.value == "")
    {
      this.mensaje ="falta el @";
      const toast = await this.toastController.create({
        message : "Ingrese un correo valido",
        duration: 2000
      })
      toast.present();
    }
    else if(con.value == "")
    {
      this.mensaje = "falta la contraseña";
      const toast = await this.toastController.create({
        message : "Ingrese una contraseña",
        duration: 2000
      })
      toast.present();
    }
    else if(con.value == "")
    {
      this.mensaje = "Falta password";
    }
  
    else
    {
      this.mensaje = "";
      const alert = await this.alertController.create({
        header : 'Felicidades',
        subHeader : 'Ingresaste con exito',
        message: '',
        buttons: ['ok'],
        
      });
      await alert.present();
      this.router.navigate(["/menua"]);
    }
  }
    limpiar(em: HTMLInputElement, con: HTMLInputElement)
    {
      em.value = "";
      con.value = "";
    }
  }
  
