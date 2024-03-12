import { MovimientoType, TConfigValues, TPuntoData } from "./models/poo/Movimiento";
import { MovimientoFactory2 } from "./models/factory/MovFactory";
import MakerPCRecibir from "./makers/pc/MakerPCRecibir";
import MakerTransferenciaSimple from "./makers/transferencias/MakerTransferenciaSimple";

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
    comisionRecibir: 0.6,
    comisionEnviar: 0.6,
};
const puntoData: TPuntoData = {
    comisionRecibir: 0.011,
    comisionEnviar: 0.02,
}

const amount = 1000000;
const cuentaPunto = "541100000001-1001";
const cuentaCliente = "541134256025-1001";

const options = {
    amount,
    cuentaUsuario: cuentaCliente,
    cuentaPunto,
    configValues: valuesConfig,
    puntoData,
    estados: { completo: 1, suspendido: 2},
    tipos: types,
};
const makerPCR = new MakerPCRecibir(cuentaCliente, cuentaPunto, options);
const makerPCEntregar = new MakerPCRecibir(cuentaCliente, cuentaPunto, options);

makerPCR.buildMovs();

console.log(makerPCR.Movs);

console.log('||||||||||||||||||||||||||||||||||||||||');

makerPCEntregar.buildMovs();

console.log(makerPCEntregar.Movs);

const trans = new MakerTransferenciaSimple(cuentaCliente, cuentaPunto, options);

trans.buildMovs();

console.log('||||||||||||||||||||||||||||||||||||||||');

console.log(trans.Movs);