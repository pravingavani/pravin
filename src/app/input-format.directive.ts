import { Directive, HostListener, ElementRef, Input } from '@angular/core';


@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input ('appInputFormat') format;

constructor(private e1: ElementRef) { }

 @HostListener('blur') onBlur(){
  let value: string = this.e1.nativeElement.value;
  if(this.format =='lowercase')
     this.e1.nativeElement.value = value.toLowerCase();
  else
    this.e1.nativeElement.value = value.toUpperCase();
 }
  
}
