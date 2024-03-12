import MovBuilder from "./MovBuilder";
import { Movimiento, TConfigValues, TPuntoData } from "../poo/Movimiento";


export default class MovPuntoCashRecibirEfectivo extends MovBuilder {
    build(valuesConfig: TConfigValues, dataPuntoData: TPuntoData): Movimiento {

        this.calcularMonto(valuesConfig, dataPuntoData);
        
        return this.Mov;
    }
    
    calcularMonto(valuesConfig: TConfigValues, dataPuntoData: TPuntoData): void {
        
    }
}