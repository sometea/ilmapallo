// images component

import { Component } from '@angular/core';

import ImagesService from './images.service';
import ImageEditComponent from './image-edit.component';
import LoginService from './login.service';

import template from './images.template.html';

@Component({
  // directives: [ImageEditComponent],
  selector: 'images',
  template,
})
export default class ImagesComponent {
  constructor(imagesService: ImagesService, loginService: LoginService) {
    this.imagesService = imagesService;
    this.loginService = loginService;
  }

  fetchImages() {
    this.imagesService.getImages().subscribe(images => { this.images = images; });
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
