import MovBuilder from "../../models/builder/MovBuilder";
import { MovimientoFactory2 } from "../../models/factory/MovFactory";
import { TMakerPunto } from "../../models/poo/Movimiento";
import Maker from "../Maker";

export default abstract class MakerTransferencia extends Maker {
    private _maker: TMakerPunto;
    private _factory: MovimientoFactory2;
    private from: string;
    private to: string;
    
    constructor(cuentaUsuario: string, cuentaPunto: string, tmaker: TMakerPunto) {
        super();
        this._maker = tmaker;
        this._factory = new MovimientoFactory2(tmaker.tipos);
        this.from = cuentaUsuario;
        this.to = cuentaPunto;
    }

    public get From(): string {
        return this.from;
    }

    public get To(): string {
        return this.to;
    }

    public get Factory(): MovimientoFactory2 {
        return this._factory;
    }

    public get Maker(): TMakerPunto {
        return this._maker;
    }

    public abstract buildMovs(): void;
    // public buildMovs(): void {
    //     const builderPCRecibir = this._factory.createBuilderPCEntregarEfectivo();
    //     builderPCRecibir.from(this._maker.cuentaUsuario).to(this._maker.cuentaPunto);

    //     const builderPCRecibirComiUser = this._factory.createBuilderPCRecibirEfectivoComiUser();
    //     builderPCRecibirComiUser.from(this._maker.cuentaUsuario).to(this._maker.cuentaPunto);

    //     const builderPCComiApp = this._factory.createBuilderPCRecibirEfectivoComiApp();
    //     builderPCComiApp.from(this._maker.cuentaUsuario).to(this._maker.cuentaPunto);
        
    //     this._movs.push(builderPCRecibir, builderPCRecibirComiUser, builderPCComiApp);
        
    //     this._movs.forEach((mov: MovBuilder) => {
    //         mov.amount(this._maker.amount)
    //             .status(this._maker.estados.completo);

    //         mov.build(this._maker.configValues, this._maker.puntoData);
    //     });
    // }
}