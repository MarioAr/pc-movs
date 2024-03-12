import MovBuilder from "../../models/builder/MovBuilder";
import { TMakerPunto } from "../../models/poo/Movimiento";
import MakerPC from "./MakerPC";

export default class MakerPCRecibir extends MakerPC {

    constructor(cuentaUsuario: string, cuentaPunto: string, tmaker: TMakerPunto) {
        super(cuentaUsuario, cuentaPunto, tmaker);
    }

    public buildMovs(): void {
        const builderPCRecibir = this.Factory.createBuilderPCRecibirEfectivo();

        const builderPCRecibirComiUser = this.Factory.createBuilderPCRecibirEfectivoComiUser();

        const builderPCComiApp = this.Factory.createBuilderPCRecibirEfectivoComiApp();

        this._movs.push(builderPCRecibir, builderPCRecibirComiUser, builderPCComiApp);

        this._movs.forEach((mov: MovBuilder) => {
            mov.amount(this.Maker.amount)
                .from(this.CuentaUsuario)
                .to(this.CuentaPunto)
                .status(this.Maker.estados.completo);

            mov.build(this.Maker.configValues, this.Maker.puntoData);
        });
    }
}