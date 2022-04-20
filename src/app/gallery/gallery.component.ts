import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GalleryService } from '../shared/gallery.service';
import { Image } from '../shared/Image';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  AllImages: Image[]

  @Input('items') set images(res: Image[]){
    this.AllImages = res
  }

  // get images (){
  //   return this.images;
  // }

  images$!: Observable<Image[]>

  constructor( private gallerySevice: GalleryService) { }

  ngOnInit(): void {
    this.images$ = this.gallerySevice.getGallery()
  }



  openModel(id: string, index: number){
    this.gallerySevice.showGalleryModel$.next(true)
    this.gallerySevice.swiperData$.next({
      activeIndex: index,
      startIndex: 0,
      endIndex: this.AllImages?.length,
      transtateX: index * -100
    })
  }

}
