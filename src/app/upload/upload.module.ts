import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { UploadPageRoutingModule } from './upload-routing.module';
//import { FileTransfer, FileUploadOptions, FileTransferObject } from '@awesome-cordova-plugins/file-transfer/ngx';
import { UploadPage } from './upload.page';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { RouteReuseStrategy } from '@angular/router';
//import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    UploadPageRoutingModule,
    //BrowserModule
  ],
  declarations: [UploadPage],

  providers: [
    File,
    FileOpener,
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy,
    },],
    bootstrap: [UploadPage],
})
export class UploadPageModule {}






