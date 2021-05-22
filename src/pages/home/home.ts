import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { DataProvider} from '../../providers/data/data'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
today = Date.now();
userId:string;
error:string;
data :any;
projectName:string;
issueCount:string;

  constructor(public navCtrl: NavController,public dataService:DataProvider,public navParams:NavParams) {
    this.userId=navParams.get('UserId');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.projectList();
  }

  projectList(){
     let param = {"user_id": this.userId}
    this.dataService.projectList(param).then((res)=>{   
      this.data=res[0];
      this.projectName = this.data.project_name;
      console.log(this.data)
      this.usCount(this.data.project_id);
    },
    (error)=>{
        this.error=error;
    }
    )
  }

  usCount(prId){
    let param = {"project_id": prId}
   this.dataService.usCount(param).then((res)=>{   
     this.data=res;
     this.issueCount = this.data.number_of_issues;
     console.log(this.data)
   },
   (error)=>{
       this.error=error;
   }
   )
 }

}
