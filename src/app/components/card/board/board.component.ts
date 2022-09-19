import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  @ViewChild('cnv')
  canvasRef!: ElementRef;
  canvas!: HTMLCanvasElement;
  ctx!: CanvasRenderingContext2D;
  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    this.canvas = this.canvasRef.nativeElement as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;

  }
}
