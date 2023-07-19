import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-popup2',
  templateUrl: './popup2.page.html',
  styleUrls: ['./popup2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Popup2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
