import { Component } from '@angular/core';

@Component({
    selector: 'page-planos',
    templateUrl: 'planos.html',
    styleUrls: ['planos.scss']
})
export class PagePlanos {
    planos: Array<{valor: string, text: string, url:string}>;
    planosMax: Array<{valor: string, text: string, url:string}>;
    constructor (

    ) {
        //Mock de Planos
        this.planos  = [
            {valor: '18,00', text: 'NAÇÃO JR', url:'../assets/imgs/cartoes/junior.png'},
            {valor: '29,90', text: 'TRADIÇÃO', url:'../assets/imgs/cartoes/tradicao.png'},
            {valor: '39,90', text: 'RAÇA', url:'../assets/imgs/cartoes/raca.png'},
            {valor: '69,90', text: '+RAÇA', url:'../assets/imgs/cartoes/maisraca.png'},
            {valor: '99,90', text: 'AMOR', url:'../assets/imgs/cartoes/amor.png'},
            {valor: '129,90', text: '+AMOR', url:'../assets/imgs/cartoes/maisamor.png'},
            {valor: '159,90', text: 'PAIXÃO', url:'../assets/imgs/cartoes/paixao.png'},
            {valor: '199,90', text: '+PAIXÃO', url:'../assets/imgs/cartoes/maispaixao.png'},            
        ];
         //Mock de Planos
         this.planosMax  = [
            {valor: '199,90', text: '+PAIXÃO', url:'../assets/imgs/cartoes/maispaixao.png'},            
        ];
        
    }
}