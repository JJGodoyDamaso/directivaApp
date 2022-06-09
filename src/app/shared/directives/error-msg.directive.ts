import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  private _color: string = 'red';
  private _mensaje : string = 'Este campo es requerido';

  htmlElement: ElementRef<HTMLElement>;

  @Input() set color (value: string) {
    this._color = value;
    this.setColor();
  }

  @Input() set mensaje(value: string) {
    this._mensaje = value;
    this.setMensaje();
  }

  @Input() set valido(value: boolean) {
    this.htmlElement.nativeElement.hidden = !value;
  }

  constructor(private el: ElementRef<HTMLElement>) { 
    this.htmlElement = el;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Esto no es del todo eficiente
    // const value = changes['mensaje'].currentValue;
    // this.htmlElement.nativeElement.textContent = value;
  }

  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
    this.setEstilo();
  }

  setEstilo():void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor():void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }

}
