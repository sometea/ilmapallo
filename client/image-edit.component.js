// image edit component

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

import ImagesService from './images.service';
import LoginService from './login.service';
import template from './image-edit.template.html';

@Component({
  selector: 'image-edit',
  template,
})
export default class ImageEditComponent {
  @Input() image;
  @Output() onRefresh = new EventEmitter();

  constructor(imagesService: ImagesService, loginService: LoginService) {
    this.imagesService = imagesService;
    this.loginService = loginService;
  }

  ngOnInit() {
    this.uploader = new FileUploader({ url: '/api/images/upload', authToken: this.loginService.getToken() });
    this.uploader.onCompleteItem = (item, res, status, headers) => {
      // save the uploaded image filename in the current image object
      this.image.filename = JSON.parse(res).filename;
      this.statusMessage = 'Upload completed successfully.';
    };
  }

  save() {
    this.imagesService.saveImage(this.image).subscribe(image => {
      this.image = image;
      this.statusMessage = 'Saved image.';
      this.onRefresh.emit();
    }, error => { this.error = error; });
  }

  remove() {
    if (this.image._id) {
      this.imagesService.deleteImage(this.image._id).subscribe(images => {
        this.image = null;
        this.onRefresh.emit();
      }, error => { this.error = error; });
    } else {
      this.image = null;
      this.onRefresh.emit();
    }
  }
}
