/**
 * En esta clase se muestran las propiedades de los usuarios de github: id, login, avatar_url, created_at, name, location, twitter_username, blog, public_repos, followers y following.
 * El objeto se importa del componente padre usando @Input() y se renderizan en el componente hijo usando la variable githubDetails
 */

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {



  @Input() githubDetails:any


}
