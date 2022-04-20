import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Image } from './Image';
import { Swiper } from './swiper.model';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  initData: Swiper={
    activeIndex: 0,
    startIndex: 0,
    endIndex:0,
    transtateX:0
  }
  showGalleryModel$ = new BehaviorSubject<boolean>(false)
  swiperData$ = new BehaviorSubject<Swiper>(this.initData)

  constructor(private http: HttpClient) { }

  getGallery(){
    return this.http
    .get<Image[]>('https://scaleflex.cloudimg.io/v7/0.fe_task_static/pictures.json?vh=7a646d&func=proxy')
  }

}
