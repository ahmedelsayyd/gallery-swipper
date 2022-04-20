import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GalleryService } from '../shared/gallery.service';
import { Image } from '../shared/Image';
import { Swiper } from '../shared/swiper.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy{
  @Input('items') images: Image[]
  swiperData: Swiper

  gallerySub:Subscription


  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.gallerySub = this.galleryService.swiperData$.subscribe(res =>{
      this.swiperData= res
    })
  }

  slideNext(){
    if(this.swiperData.activeIndex == this.images?.length - 1) return

    this.galleryService.swiperData$.next({
      activeIndex: Math.abs(this.swiperData.activeIndex)+ 1,
      startIndex: 0,
      endIndex: this.images?.length,
      transtateX: (Math.abs(this.swiperData.activeIndex) + 1) * -100
    })
  }

  slidePrev(){
    if(this.swiperData.activeIndex == 0) return

    this.galleryService.swiperData$.next({
      activeIndex: Math.abs(this.swiperData.activeIndex) - 1,
      startIndex: 0,
      endIndex: this.images?.length,
      transtateX: (Math.abs(this.swiperData.activeIndex) - 1) * -100
    })
  }

  ngOnDestroy(): void {
    if(this.gallerySub) this.gallerySub.unsubscribe()
  }

}
