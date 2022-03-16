import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('hamburguerBtn') hamburguerBtn: any;
  navOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  setNav() {
    this.navOpen = !this.navOpen;
    this.hamburguerBtnAnimation();
  }

  hamburguerBtnAnimation() {
    const lines: any = this.hamburguerBtn.nativeElement.children;
    this.navOpen ? lines[2].style.width = "100%" : lines[1].style.width = "50%";

    [...lines].forEach((line, index) => {
      index == 0 ? line.classList.toggle("rotate-clockwise") : line.classList.toggle("rotate-anticlockwise");
    })
  }
}
