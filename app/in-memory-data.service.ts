import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Contato } from './contatos/contato.model';

export class InMemoryDataService implements InMemoryDbService {

    createDb(): {} {
        let contatos: Contato[] = [
            { id: 15, nome: 'Adalberto Nunes', email: 'adalberto@gmail.com', telefone: '(21) 65989-7878'},
            { id: 16, nome: 'Vitor Felipe', email: 'vitor@gmail.com', telefone: '(21) 65989-7878'},
            { id: 17, nome: 'Lili', email: 'lili@gmail.com', telefone: '(21) 65989-7878'},
            { id: 18, nome: 'Duli', email: 'duli@gmail.com', telefone: '(21) 65989-7878'},
            { id: 19, nome: 'Mãe', email: 'mae@gmail.com', telefone: '(21) 65989-7878'}
        ]

        let carros: any[] = [
            {id:2, nome: 'Camaro'},
            {id:1, nome: 'Gol'}
        ]

        return {
           'contatos': contatos,
           'carros': carros
        };
    }
}