import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr1',
  templateUrl: './qr1.page.html',
  styleUrls: ['./qr1.page.scss'],
})
export class Qr1Page implements OnInit {

   qrCodeString = 'mensaje';

  constructor() { }

  ngOnInit() {
  }

}
