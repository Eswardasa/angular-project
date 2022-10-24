import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  a:string='';
  b='23';
  c=true;
  d=6305739694;
user:User[]=[];  

  document:any;

    mobiles=['eswar', 'gopi', 'praveen']
  Uesr: User[] | undefined;
  constructor(@Inject(DOCUMENT) document:Document,private testserv:TestService){
    this.document = document;
  }


  ngOnInit(): void {
  //alert('hello this is from Homecompent NgOnInt');
  alert(this.testserv.gettodaysdate());

  }

  printdata(event:any){

    alert(this.document.getElementById('doctest').value);
  }
  getdata(){
    alert(this.testserv.getMyName());
  }
  getalluserinformation(){
    this.testserv.getalluser().subscribe(user=>{
      this.user=user;
    });
  }
  
  
}

