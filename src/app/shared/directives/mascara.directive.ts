import { 
  Directive, 
  HostListener, 
  Input, 
  ElementRef 
} from '@angular/core';
import { 
  NG_VALUE_ACCESSOR, ControlValueAccessor //Forms
} from '@angular/forms';

@Directive({
  selector: '[mascara]', //nome da diretiva para chamar no Html
  providers: [{
    provide: NG_VALUE_ACCESSOR, //Acesso ao campo de texto
    useExisting: MascaraDirective, 
    multi: true 
  }]
})
export class MascaraDirective implements ControlValueAccessor { //Interface responsável para retornar o valor

  onTouched: any;
  onChange: any;

  @Input('mascara') mascara: string;//Irá adicionar o formato da mascar cpf e cnpj

  constructor(private el: ElementRef) { }//Injeta o campo de texto

  //Primeiro método que é chamado quando a página carrega.
  writeValue(value: any) {
    //Se possuir o valor do campo no texto aplica a mascara e aplica o elemento
    if (value) {
       this.el.nativeElement.value = this.aplicarMascara(value);
    }
  }
  //método para quando ocorrer uma mudança no campo de texto
  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  //método voltado mais para mobile
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
  //Toda vez que pressionar uma tecla irá disparar um evento, sabendo que sempre que pressionar uma tecla ele se é validada ou não
  @HostListener('keyup', ['$event']) 
  onKeyup($event: any) {
    let valor: string = $event.target.value.replace(/\D/g, '');

    // retorna caso pressionado backspace
    if ($event.keyCode === 8) {
      this.onChange(valor);
      return;
    }

    //Faz uma separação regular, utilizando os valores que precisa
    let pad = this.mascara.replace(/\D/g, '').replace(/9/g, '_');
    if (valor.length <= pad.length) {
      this.onChange(valor);
    }
    //se for válido é chamado o método aplicarMascara() para formatar os dados
    $event.target.value = this.aplicarMascara(valor);
  }
  //Quando tirar o fodo do botão do texto e ele vai fazer uma simples validação
  @HostListener('blur', ['$event']) 
  onBlur($event: any) {
    if ($event.target.value.length === this.mascara.length) {
      return;
    }
    this.onChange('');
    $event.target.value = '';
  }

  //Regra pra aplicar as máscaras , ele pega os números e aplica os pontos sublinhados, os traços e as barras
  aplicarMascara(valor: string): string {
    valor = valor.replace(/\D/g, '');
    let pad = this.mascara.replace(/\D/g, '').replace(/9/g, '_');
    let valorMask = valor + pad.substring(0, pad.length - valor.length);
    let valorMaskPos = 0;
    
    valor = '';
    for (let i = 0; i < this.mascara.length; i++) {
      if (isNaN(parseInt(this.mascara.charAt(i)))) {
        valor += this.mascara.charAt(i);
      } else {
        valor += valorMask[valorMaskPos++];
      }
    }
    
    if (valor.indexOf('_') > -1) {
      valor = valor.substr(0, valor.indexOf('_'));
    }

    return valor;
  }

}