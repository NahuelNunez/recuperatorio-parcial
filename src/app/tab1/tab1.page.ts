import { Component,OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { Result } from '../interfaces/usuarios';
import { AlertController, LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit{
  

  
  constructor(private userService:UsuariosService,private alertController: AlertController,private loadingController: LoadingController) {
  
  }

usuarios: Result[]=[];
// metodo para cargar la informacion de los usuarios//
ngOnInit(){
this.userService.getUsers().subscribe(respuesta=>{
  this.usuarios=respuesta.results;
  console.log(this.usuarios)



})
}
// metodo para mostrar la informacion detallada de cada usuario//
async GetUserInfo(i: number){

this.userService.getUsers().subscribe(async respuesta=>{
  const alert = await this.alertController.create({

    
    header: respuesta.results[i].name.title + ' ' + respuesta.results[i].name.first + ' ' + respuesta.results[i].name.last, 
   subHeader: 'Edad:' + respuesta.results[i].dob.age ,
    message: 'Email:' + respuesta.results[i].email + '\nTelefono: ' + respuesta.results[i].phone + '\nDireccion: ' + respuesta.results[i].location.street.name + ' ' + respuesta.results[i].location.street.number + ', ' + respuesta.results[i].location.city + ', ' + respuesta.results[i].location.state + ', ' + respuesta.results[i].location.country + ', ' + respuesta.results[i].location.postcode + '\n Nacionalidad: ' + respuesta.results[i].nat,
    buttons: ['OK']
    

})
await alert.present();

})
}
}





