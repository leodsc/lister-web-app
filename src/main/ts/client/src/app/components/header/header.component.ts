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
    [...lines].forEach((line, index) => {
      line.style.width = "100%";
      index == 0 ? line.classList.toggle("rotate-clockwise") : line.classList.toggle("rotate-anticlockwise")
    })
  }
}
