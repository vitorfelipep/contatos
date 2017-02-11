"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var contatos = [
            { id: 15, nome: 'Adalberto Nunes', email: 'adalberto@gmail.com', telefone: '(21) 65989-7878' },
            { id: 16, nome: 'Vitor Felipe', email: 'vitor@gmail.com', telefone: '(21) 65989-7878' },
            { id: 17, nome: 'Lili', email: 'lili@gmail.com', telefone: '(21) 65989-7878' },
            { id: 18, nome: 'Duli', email: 'duli@gmail.com', telefone: '(21) 65989-7878' },
            { id: 19, nome: 'Mãe', email: 'mae@gmail.com', telefone: '(21) 65989-7878' }
        ];
        var carros = [
            { id: 2, nome: 'Camaro' },
            { id: 1, nome: 'Gol' }
        ];
        return {
            'contatos': contatos,
            'carros': carros
        };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map