import {Component, OnInit} from '@angular/core';
import { Router} from "@angular/router";
import { User} from "../user";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private user=  new User();
  private role : Array<string>;
  constructor(private router : Router) { }

  ngOnInit() {
    this.role= [ 'admin','utilisateur'];
  }

  register(){
    console.log(this.user.username);
  }

}
