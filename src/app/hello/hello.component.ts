import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  funcionario = "Elton Teste";
  msg = 'gerou o número: ';
  nome: String;

  constructor() { }

  ngOnInit() {
  }

  getFuncionario() {
    this.funcionario;
  }

  adcionar(nome: String) {
    this.nome  = nome;
  }


}
