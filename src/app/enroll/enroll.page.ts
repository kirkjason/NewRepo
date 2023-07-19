import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-enroll',
  templateUrl: 'enroll.page.html',
  styleUrls: ['enroll.page.scss'],
})
export class EnrollPage {
  selectedClass: string;
  studentName: string;

  constructor(private toastController: ToastController) {}

  enroll() {
    if (this.selectedClass && this.studentName) {
      // You can implement the enrollment logic here.
      // For now, we'll just show a toast message to indicate enrollment success.
      this.presentToast(`Enrollment Successful! You are now enrolled in ${this.selectedClass}.`);
    } else {
      this.presentToast('Please choose a class and provide your name before enrolling.');
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'middle',
    });
    toast.present();
  }
}
