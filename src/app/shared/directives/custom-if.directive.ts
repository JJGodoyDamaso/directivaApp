import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective {

  @Input() set customIf(condicion: boolean) {
    if(condicion){
      this.viewContainter.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainter.clear()
    }
  }

  constructor(
    private templateRef : TemplateRef<HTMLElement>,
    private viewContainter: ViewContainerRef
    ) {
        
  }

}
