import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  funcionario = 'Elton Teste';
  msg = 'gerou o número: ';

  constructor() { }

  ngOnInit() {
  }

  getFuncionario() {
    this.funcionario;
  }

  adcionar() {
    const numero = Math.round(Math.random() * 100);
    this.funcionario = 'Elton Alterou' + numero;
     console.log(this.msg + numero);
  }

  exibirTextoDigitado(event: any) {
    this.funcionario = event.target.value;
  }
}
