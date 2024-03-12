import { MovimientoType, TConfigValues, TPuntoData } from "./models/poo/Movimiento";
import { MovimientoFactory2 } from "./models/factory/MovFactory";

const types: MovimientoType = {
    userUserCash: 1,
    userPuntoCash: 2,
    userPuntoComi: 3,
    userAppComi: 4,
    puntoUserCash: 5,
    puntoUserComi: 6,
    puntoAppComi: 7,
};

const valuesConfig: TConfigValues = {
    comisionMinima: 0.1,
    comisionMaxima: 0.2,
    montoMinimo: 100,
    montoMaximo: 1000,
    comisionRecibir: 0.5,
    comisionEnviar: 0.5,
};
const puntoData: TPuntoData = {
    comisionRecibir: 0.011,
    comisionEnviar: 0.02,
}

const amount = 1000000;
const cuentaPunto = "541100000001-1001";
const cuentaCliente = "541134256025-1001";


// Todo esto iria en una clase Maker PCRecibir
const factory2 = new MovimientoFactory2(types); // Devuelve un objeto MovUserUserFactory

const builderPCRecibir = factory2.createBuilderPCRecibirEfectivo();

const builderPCRecibirComiUser = factory2.createBuilderPCRecibirEfectivoComiUser();

const builderPCComiApp = factory2.createBuilderPCRecibirEfectivoComiApp();

const movs = [builderPCRecibir, builderPCRecibirComiUser, builderPCComiApp];

movs.forEach((mov) => {
    mov.amount(amount);
    mov.from(cuentaCliente);
    mov.to(cuentaPunto);
    mov.status("pendiente");

    mov.build(valuesConfig, puntoData);
});

console.log(movs);
// Inserto movimiento y actualizo saldos.