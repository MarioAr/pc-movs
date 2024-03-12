import MovBuilder from "./MovBuilder";
import { Movimiento, TConfigValues, TPuntoData } from "../poo/Movimiento";


/**
 * Se da por hecho que 'from' es el usuario y 'to' es el punto.
 */
export default class MovPuntoCashComision extends MovBuilder {
    build(valuesConfig: TConfigValues, dataPuntoData: TPuntoData): Movimiento {

        this.calcularMonto(valuesConfig, dataPuntoData);

        return this.Mov;
    }

    calcularMonto(valuesConfig: TConfigValues, dataPuntoData: TPuntoData): void {
        // TODO: Usar helpers para calcular comisiones y montos.
        if (dataPuntoData.comisionRecibir < 0) {
            // El punto paga, el usuario recibe
            const userCuenta = this.Mov.from;
            this.from(this.Mov.to);
            this.to(userCuenta);
        }

        // Calculo el monton con la comision
        let comision = this.Mov.amount * dataPuntoData.comisionRecibir;
        
        comision = Math.abs(comision); 
    
        this.amount(comision);
    }
}