import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //tambien se importo
import { map } from "rxjs/operators";//este para mapear los valores

@Component({
  selector: 'app-aramos',
  templateUrl: './aramos.page.html',
  styleUrls: ['./aramos.page.scss'],
})
export class AramosPage implements OnInit {
  users: any = []; //guardamos todos los datos en users.

  searchedUser: any;

  permission: boolean = false;

  event: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.permission = true;
    console.log("hooola");
    this.GetUsers().subscribe(res=>{
      console.log("Res",res)
      this.users = res;
      this.searchedUser = this.users;
    });
  }

  GetUsers(){
    return this.http
    .get("assets/files/BD.json")
    .pipe(
      map((res:any)=>{
        return res.Ramos;
      })
    )
  }

  doRefresh(event: any): void{
    this.GetUsers();
    console.log('ME CAGO EN DIOS');

    setTimeout(()=> {
      console.log('async operation has ended');
      event.target.complete();
    }, 2000)
    
  }

//searchCustomer(event){
    //const text = event.target.value;
    //this.searchedUser = this.users;
    //if(text && text.trim() != ''){
      //this.searchedUser = this.searchedUser.filter((user: any)=>{
        //return (user.name.toLowercase().indexOf(text.toLowerCase()) > -1); No me funciono la barra de busqueda EY! otro dia hacerlo
      //})
    //}

  //} 
}

