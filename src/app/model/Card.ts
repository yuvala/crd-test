import { Observable } from "rxjs";

export class Card {
    public zIndex: number;
    public drawIndex!: number;
    public dragging!: boolean;
    public selected!: boolean;
    public width!: number;
    public height!: number;
    public image!: HTMLImageElement;

    constructor(
        public id: number,
        public x: number,
        public y: number,
        public imageSrc: string
    ) {
        this.zIndex = 0;
    }

    public initImage(): Observable<HTMLImageElement> {
        return new Observable<HTMLImageElement>((observer) => {
            let img = new Image();
            img.src = this.imageSrc;
            this.image = img;
            img.onload = () => {
                observer.next();
                observer.complete();
            };
        });
    }
}