import { Component } from '@angular/core';
import { arquivo } from './arquivo'; // fiz o importe do arquivo para que eu possa pegar os dados criados nele

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'atividadepratica';
  lista_alunos = arquivo; // aqui estou passando o ista_alunos para que eu possa pegar os dados do aqruivo e chamar o ngFor passando a variável "alunos"
}
