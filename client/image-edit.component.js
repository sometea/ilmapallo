// image edit component

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FILE_UPLOAD_DIRECTIVES, FileUploader } from 'ng2-file-upload';

import { ImagesService } from './images.service';
import { LoginService } from './login.service';
import template from './image-edit.template.html';

@Component({
  selector: 'image-edit',
  directives: [FILE_UPLOAD_DIRECTIVES],
  template,
})
export class ImageEditComponent {
  @Input() image;
  @Output() onRefresh = new EventEmitter;

  // uploader = new FileUploader({ url: '/api/images/upload' });

  constructor(imagesService: ImagesService, loginService: LoginService) {
    this.imagesService = imagesService;
    this.loginService = loginService;
  }

  ngOnInit() {
    this.uploader = new FileUploader({ url: '/api/images/upload', authToken: this.loginService.getToken() });
    this.uploader.onCompleteItem = (item, res, status, headers) => {
      console.log(JSON.stringify(res));
    };
  }

  save() {
    this.imagesService.saveImage(this.image).then(image => {
      this.image = image;
      this.statusMessage = 'Saved image.';
      this.onRefresh.emit();
    }).catch(error => { this.error = error; });
  }

  remove() {
    if (this.image._id) {
      this.imagesService.deleteImage(this.image._id).then(images => {
        this.image = null;
        this.onRefresh.emit();
      }).catch(error => { this.error = error; });
    } else {
      this.image = null;
      this.onRefresh.emit();
    }
  }
}
