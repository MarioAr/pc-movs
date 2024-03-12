import MovBuilder from "../../models/builder/MovBuilder";
import { MovimientoFactory2 } from "../../models/factory/MovFactory";
import { TMakerPunto } from "../../models/poo/Movimiento";
import MakerPC from "./MakerPC";

export default class MakerPCEntregar extends MakerPC {
        
    constructor(cuentaUsuario: string, cuentaPunto: string, tmaker: TMakerPunto) {
        super(cuentaUsuario, cuentaPunto, tmaker);
        
    }

    public buildMovs(): void {
        const builderPCRecibir = this.Factory.createBuilderPCEntregarEfectivo();
        builderPCRecibir.from(this.CuentaUsuario).to(this.CuentaPunto);

        const builderPCRecibirComiUser = this.Factory.createBuilderPCRecibirEfectivoComiUser();
        builderPCRecibirComiUser.from(this.CuentaUsuario).to(this.CuentaPunto);

        const builderPCComiApp = this.Factory.createBuilderPCRecibirEfectivoComiApp();
        builderPCComiApp.from(this.CuentaUsuario).to(this.CuentaPunto);
        
        this._movs.push(builderPCRecibir, builderPCRecibirComiUser, builderPCComiApp);
        
        this._movs.forEach((mov: MovBuilder) => {
            mov.amount(this.Maker.amount)
                .status(this.Maker.estados.completo);

            mov.build(this.Maker.configValues, this.Maker.puntoData);
        });
    }
}