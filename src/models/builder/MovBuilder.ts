import { Movimiento, MovimientoBuilder, TConfigValues, TPuntoData } from "../poo/Movimiento";


export default abstract class MovBuilder implements MovimientoBuilder {
    private _mov: Movimiento = {
        from: "",
        to: "",
        amount: 0,
        type: 0,
        date: new Date(),
        status: 0,
        interes: 0,
    };

    public get Mov(): Movimiento {
        return this._mov;
    }

    public get Params(): unknown[] {
        return [
            this._mov.from,
            this._mov.to,
            this._mov.amount,
            this._mov.type,
            this._mov.date,
            this._mov.status,
            this._mov.interes,
        ];
    }
    
    from(from: string): MovimientoBuilder {
        this._mov.from = from;
        return this;
    }
    to(to: string): MovimientoBuilder {
        this._mov.to = to;
        return this;
    }
    amount(amount: number): MovimientoBuilder {
        this._mov.amount = amount;
        return this;
    }
    type(type: number): MovimientoBuilder {
        this._mov.type = type;
        return this;
    }
    date(date: Date): MovimientoBuilder {
        this._mov.date = date;
        return this;
    }
    status(status: number): MovimientoBuilder {
        this._mov.status = status;
        return this;
    }
    interes(interes: number): MovimientoBuilder {
        this._mov.interes = interes;
        return this;
    }
    abstract build(valuesConfig?: TConfigValues, dataPuntoData?: TPuntoData): Movimiento;

    abstract calcularMonto(valuesConfig?: TConfigValues, dataPuntoData?: TPuntoData): void;
}