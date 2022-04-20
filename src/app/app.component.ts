import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GalleryService } from './shared/gallery.service';
import { Image } from './shared/Image';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  showGalleryModel$!: Observable<boolean>
  images: Image[]

  constructor(private gallerySevice: GalleryService){}

  ngOnInit(): void {
    this.showGalleryModel$ = this.gallerySevice.showGalleryModel$

    this.gallerySevice.getGallery().subscribe(res =>{
      this.images = res
    })
  }



}
