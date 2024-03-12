import { TMakerPunto } from "../../models/poo/Movimiento";
import MakerPC from "../pc/MakerPC";
import MakerTransferencia from "./MakerTransferencia";

export default class MakerTransferenciaSimple extends MakerTransferencia {
    
    constructor(from: string, to: string, tmaker: TMakerPunto) {
        super(from, to, tmaker);
    }

    public buildMovs(): void {
        const builderPCRecibir = this.Factory.createBuilderPCEntregarEfectivo();
        builderPCRecibir
            .from(this.From)
            .to(this.To)
            .amount(this.Maker.amount)
            .status(this.Maker.estados.completo)
            .build(this.Maker.configValues, this.Maker.puntoData);

        this.Movs = builderPCRecibir;
    }
}