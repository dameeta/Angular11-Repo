export class Employee {

    id: string | undefined;
    name: string | undefined;
    private _age: number | undefined;
    public get age(): number | undefined {
        return this._age;
    }
    public set age(value: number | undefined) {
        this._age = value;
    }
    address : string | undefined;
}
