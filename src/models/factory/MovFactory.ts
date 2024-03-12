import MovBuilder from "../builder/MovBuilder";
// import MovPCR from "../builder/MovPCR";
import MovPuntoCashComision from "../builder/MovPuntoCashComision";
import MovPuntoCashComisionApp from "../builder/MovPuntoCashComisionApp";
import MovPuntoCashRecibirEfectivo from "../builder/MovPuntoCashRecibirEfectivo";
import { MovimientoType } from "../poo/Movimiento";

// export interface MovimientoFactory {
//     createBuilder(type: MovimientoType): MovBuilder;
// }


// export default abstract class MovFactory  implements MovimientoFactory {
//     private _type: number;

//     constructor(type: number) {
//         this._type = type;
//     }

//     createBuilder(): MovBuilder {
//         const mov = new MovPCR();

//         mov.type(this._type);
//         // mov.build();
        
//         return mov;
//     }
// }

// export class MovUserUserFactory extends MovFactory {    
//     constructor(type: MovimientoType) {
//         super(type.userUserCash);
//     }
// }

// export class MovUserPuntoCashFactory extends MovFactory {
//     constructor(type: MovimientoType) {
//         super(type.userPuntoCash);
//     }
// }

export class MovimientoFactory2 {
    private _type: MovimientoType;
    constructor(type: MovimientoType) {
        this._type = type;
    }

    createBuilderPCRecibirEfectivo(): MovBuilder {
        const mov = new MovPuntoCashRecibirEfectivo();

        mov.type(this._type.userPuntoCash);
        
        return mov;
    }

    createBuilderPCEntregarEfectivo(): MovBuilder {
        const mov = new MovPuntoCashRecibirEfectivo();

        mov.type(this._type.userPuntoCash);
        
        return mov;
    }

    createBuilderPCRecibirEfectivoComiUser(): MovBuilder {
        const mov = new MovPuntoCashComision();

        mov.type(this._type.puntoUserComi);
        
        return mov;
    }

    createBuilderPCRecibirEfectivoComiApp(): MovBuilder {
        const mov = new MovPuntoCashComisionApp();

        mov.type(this._type.puntoAppComi);
        
        return mov;
    }
}