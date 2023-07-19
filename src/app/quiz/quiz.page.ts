import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController} from '@ionic/angular';
import { Popup2Page } from '../popup2/popup2.page';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
  standalone: false,
})
export class QuizPage implements OnInit {

  constructor(private router: Router, public popoverController: PopoverController) { }

  ngOnInit() {
  }
  async presentPopover(ev: any){
    const popover = await this.popoverController.create({
      component: Popup2Page,
      event: ev,
      mode: 'ios',
      translucent: true,
    });

    await popover.present();
    const { role } = await popover.onDidDismiss();
  }
  goBack(){
    this.router.navigate(['quiz']);
  }
    

}


