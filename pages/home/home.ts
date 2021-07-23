import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  pain: any;

  painArray: any = [];
  constructor(public navCtrl: NavController) {}
  ngOnInit() {
    this.painArray = JSON.parse(localStorage.getItem('painArray'));
  }

  save() {
    if (this.pain) {
      debugger;
      this.painArray.push({ pain: this.pain, time: new Date() });
      localStorage.setItem('painArray', JSON.stringify(this.painArray));
    } else {
      alert();
    }
  }
}
