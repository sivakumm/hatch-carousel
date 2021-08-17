import { Component, ElementRef, HostListener, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-example-carousel',
  templateUrl: './example-carousel.component.html',
  styleUrls: ['./example-carousel.component.scss']
})
export class ExampleCarouselComponent implements OnInit {

  @ViewChild('carouselTrack') carousel: ElementRef | undefined;
  @ViewChildren('cards') cards: QueryList<ElementRef> | undefined;

  @Input()
  users: User[] = [];

  cardsPerPage: number = 3;
  page: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.onWindowResize();
  }

  getPagesCount(): number {
    return Math.max(1, Math.ceil(this.users.length / this.cardsPerPage));
  }

  showNextPage(): void {
    this.setPage(this.page + 1);
  }

  showPreviousPage(): void {
    this.setPage(this.page - 1);
  }

  setPage(page: number): void {
    this.page = Math.min(Math.max(page, 0), this.getPagesCount() - 1);
    this.cards?.forEach(card => card.nativeElement.style.transform = `translateX(-${ this.page * this.carousel?.nativeElement.offsetWidth }px)`);
  }

  @HostListener('window:resize')
  private onWindowResize(): void {
    if (window.innerWidth < 767) {
      this.cardsPerPage = 1;
    } else if (window.innerWidth < 1130) {
      this.cardsPerPage = 2;
    } else {
      this.cardsPerPage = 3;
    }
    this.setPage(this.page);
  }
}
