import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { File } from '@ionic-native/file/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@awesome-cordova-plugins/file-transfer/ngx';
import { Platform, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-upload',
  templateUrl: 'upload.page.html',
  styleUrls: ['upload.page.scss'],
  providers: [File, FileChooser, FileTransfer, CommonModule]
})
export class UploadPage  {
  selectedFile: any; //file
  selectedImage: string; //img
  fileTransfer2: FileTransferObject;


  constructor( //start of file upload
    private file: File,
    private fileChooser: FileChooser,
    private fileTransfer: FileTransfer,
    private platform: Platform,
    private toastController: ToastController,
    private transfer: FileTransfer,) 

    {this.fileTransfer2 = this.transfer.create();
    } 
     

  selectFile() {
    this.fileChooser.open()
      .then(fileUri => {
        // Retrieve the file path
        if (this.platform.is('android')) {
          this.resolveFilePath(fileUri)
            .then(filePath => {
              this.selectedFile = {
                name: filePath.substr(filePath.lastIndexOf('/') + 1),
                path: filePath
              };
            })
            .catch(error => {
              this.presentToast('Error resolving file path');
            });
        } else {
          this.selectedFile = {
            name: fileUri.substr(fileUri.lastIndexOf('/') + 1),
            path: fileUri
          };
        }
      })
      .catch(error => {
        this.presentToast('Error selecting file');
      });
  }

  resolveFilePath(fileUri: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.file.resolveLocalFilesystemUrl(fileUri)
        .then(fileEntry => {
          resolve(fileEntry.nativeURL);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  uploadFile() {
    const fileTransfer: FileTransferObject = this.fileTransfer.create();
    const options: FileUploadOptions = {
      fileKey: 'file',
      fileName: this.selectedFile.name,
      chunkedMode: false,
      mimeType: 'multipart/form-data',
      headers: {}
    };

    fileTransfer.upload(this.selectedFile.path, 'https://example.com/upload', options)
      .then(data => {
        // File uploaded successfully
        this.presentToast('File uploaded successfully');
        this.selectedFile = null;
      })
      .catch(error => {
        // Handle the error
        this.presentToast('Error uploading file');
      });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }//end of file upload


  //start of image upload
  //onFileSelected(event) { orig
  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      this.selectedImage = reader.result as string;
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  uploadImage() {
    const options: FileUploadOptions = {
      fileKey: 'image',
      fileName: 'image.jpg',
      chunkedMode: false,
      headers: {},
    };

    this.fileTransfer2
      .upload(this.selectedImage, 'https://your-image-upload-endpoint', options)
      .then((data) => {
        // Handle success response
        console.log('Upload success:', data);
      })
      .catch((err) => {
        // Handle error
        console.error('Upload error:', err);
      });
  } //end of image upload


} 

