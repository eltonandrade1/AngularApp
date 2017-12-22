import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  
  ngOnInit(): void {
  }

  funcionario = 'Elton Teste';
  adiconado = false;

  adcionar() {
    this.adiconado = true;
    console.log("Funcionário " + this.funcionario + " adiconado com sucesso.");
  }

}
