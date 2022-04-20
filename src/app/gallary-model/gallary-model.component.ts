import { Component, Input, OnInit } from '@angular/core';
import { GalleryService } from '../shared/gallery.service';
import { Image } from '../shared/Image';

@Component({
  selector: 'app-gallary-model',
  templateUrl: './gallary-model.component.html',
  styleUrls: ['./gallary-model.component.scss']
})
export class GallaryModelComponent implements OnInit {
  @Input('items') images!: Image[]
  constructor(public galleryService: GalleryService) { }

  ngOnInit(): void {
  }

  closeModel(){
    this.galleryService.showGalleryModel$.next(false)
  }

}
