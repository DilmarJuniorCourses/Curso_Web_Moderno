import { TemplateParseResult } from '@angular/compiler';
import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit { //OnIniti é um siclo de vida de inicialização

  @Input('myForEm') numbers: number[]
  

  constructor(private container: ViewContainerRef, private template: TemplateRef<any>) {

   }

   ngOnInit(): void{
     for(let number of this.numbers){
       this.container.createEmbeddedView(this.template, {$implicit: number}) //Template é oque eu quero exatamente colocar na minha diretiva
     }
   }

}