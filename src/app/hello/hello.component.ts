import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  
  ngOnInit(): void {
  }

  ultimoId = 0;
  nome: String;
  adicionado = false;
  funcionarios = [];

  adicionar() {
    this.adicionado = true;
    console.log("Funcionário " + this.nome + " adicionado com sucesso.");

    //Adicionado como objeto javaScript
    this.funcionarios.push({
      id: ++this.ultimoId,
      nome: this.nome
    });
  }

  ifEmptyString(string: String) {
    return string == null || string.length == 0;
  }

}
