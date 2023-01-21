/**
 * En esta clase se recibe el nombre del usuario de github que será buscado y se hace uso del servicio UserService que llama al metido http get.
 */

import { Component, OnInit } from '@angular/core';
import { UserGit } from './classes/user-git';
import { UserServiceService } from './services/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {


  title = 'weminnovacion';

  /**
   * Variable que tendrá como valor el nombre de usuario de github a buscar.
   */
  username:String;
  constructor(private UserService:UserServiceService) {}
  /**
   * En el ngOnInit se inicializa la variable username con el valor "mojombo" y se llama al método getAUser() para realizar la busqueda del usuario "mojombo" al entrar al sitio web
   */
  ngOnInit(): void {
    this.username="mojombo"
    this.getAUser()
  }
  /**
   * Se crea el objeto userGit, el cual es de clase UserGit y posee los atributos necesarios para la búsqueda de usuario.
   */
  userGit:UserGit = new UserGit();
  errorMessage=""
  searchedUsers:UserGit[]=[]
  /**
   * Método que permite buscar un usuario de github usando el método getUser() del servicio userService
   * @returns data, la cual contiene todas las propiedades del usuario buscado
   * @returns error si el usuario buscado no existe
   * Con el fin de que la busqueda sea case insensitive, se usa el el función toLowerCase en la variable username
   */
  getAUser(){

    if(this.username==''){
      alert('por favor ingresa un usuario')
    }
    else{
      this.UserService.getUser(this.username.toLowerCase()).subscribe(data=>this.userGit=data, error=>{
        error="El usuario " + this.username + " no existe";
        this.errorMessage=error;
        alert(error)
      })
    }



  }
}
