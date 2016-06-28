// images component

import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { ImagesService } from './images.service';
import { ImageEditComponent } from './image-edit.component';
import { LoginService } from './login.service';

import template from './images.template.html';

@Component({
  directives: [ImageEditComponent],
  selector: 'images',
  template,
})
export class ImagesComponent {
  constructor(imagesService: ImagesService, loginService: LoginService, router: Router) {
    this.imagesService = imagesService;
    this.loginService = loginService;
    this.router = router;
  }

  fetchImages() {
    this.imagesService.getImages().then(images => { this.images = images; });
  }

  ngOnInit() {
    this.fetchImages();
  }

  onSelect(image) {
    this.selectedImage = image;
  }

  onNew() {
    this.selectedImage = {
      title: 'New image',
      text: 'Insert text here.',
    };
  }

  onRefresh() {
    this.fetchImages();
  }
}
