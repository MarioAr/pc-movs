

export interface Movimiento {
    from: string;
    to: string;
    amount: number;
    type: number;
    date: Date;
    status: string;
    interes: number;
}

export interface MovimientoBuilder {
    from(from: string): MovimientoBuilder;
    to(to: string): MovimientoBuilder;
    amount(amount: number): MovimientoBuilder;
    type(type: number): MovimientoBuilder;
    date(date: Date): MovimientoBuilder;
    status(status: string): MovimientoBuilder;
    build(valuesConfig?: TConfigValues, dataPuntoData?: TPuntoData): Movimiento;
    calcularMonto(valuesConfig?: TConfigValues, dataPuntoData?: TPuntoData): void;
  }

export type MovimientoType = {
    userUserCash: number;
    userPuntoCash: number;
    userPuntoComi: number;
    userAppComi: number;
    puntoUserCash: number;
    puntoUserComi: number;
    puntoAppComi: number;
};

export type TConfigValues = {
    comisionMinima: number;
    comisionMaxima: number;
    montoMinimo: number;
    montoMaximo: number;
    comisionRecibir: number;
    comisionEnviar: number;
}

export type TPuntoData = {
    comisionRecibir: number;
    comisionEnviar: number;
}