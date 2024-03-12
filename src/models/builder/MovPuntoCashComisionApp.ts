import MovBuilder from "./MovBuilder";
import { Movimiento, TConfigValues, TPuntoData } from "../poo/Movimiento";


export default class MovPuntoCashComisionApp extends MovBuilder {
    build(valuesConfig: TConfigValues, dataPuntoData: TPuntoData): Movimiento {
        this.calcularMonto(valuesConfig, dataPuntoData);
        
        return this.Mov;
    }

    calcularMonto(valuesConfig: TConfigValues, dataPuntoData: TPuntoData): void {
        // TODO: Usar makers para traer estos datos.
        if (dataPuntoData.comisionRecibir > 0) {
            // Le cobro comision al punto
            this.from(this.Mov.to);

            this.to("0-1001"); // TODO: Usar helper para traer la cuenta de la app
        }

        let comision = this.Mov.amount * valuesConfig.comisionRecibir * dataPuntoData.comisionRecibir;

        comision = Math.abs(comision);

        this.amount(comision);
    }
}