import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import { DataProvider} from '../../providers/data/data'
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit{

loginForm: FormGroup;
username:string;
userId:string;
password:string;
userdata={
  username:"",
  password:""
}
error:string;


  constructor(public navCtrl: NavController, public navParams: NavParams,public dataService:DataProvider) {
  }

  ngOnInit(){
      this.loginForm = new FormGroup({
        username:new FormControl("",[Validators.required]),
        password:new FormControl("",[Validators.required])

      });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  doLogin(){

    this.dataService.login(this.userdata).then((res:any)=>{ 
      if(res.length > 0){
        this.userId=res[0].user_id;
        localStorage.setItem('UserId',this.userId);
        console.log(this.userId);
        this.navCtrl.push(HomePage,{UserId:this.userId})
      }
      else{
        this.error ="Sorry,something wrong there !!!"
      }


    },
    (error)=>{
        this.error=error;
    }
    )

  }

}
