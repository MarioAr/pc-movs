import MovBuilder from "../models/builder/MovBuilder";

export default abstract class Maker {
    protected _movs: MovBuilder[] = [];
     
    public abstract buildMovs(): void;

    public get Movs(): MovBuilder[] {
        return this._movs;
    }

    public set Movs(mov: MovBuilder) {
        this._movs.push(mov);
    }

    public clearMovs(): void {
        this._movs = [];
    }
}