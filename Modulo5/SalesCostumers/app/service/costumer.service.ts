import {Injectable} from "@angular/core";
import {COSTUMERS} from "../mock/costumer-mock";
import {Costumer} from "../model/costumer";

@Injectable()
export class CostumerService{
    getCostumers(): Promise<Costumer[]>{
        return Promise.resolve(COSTUMERS);
    }

    getCostumer(id: number): Promise<Costumer> {
        return this.getCostumers()
            .then(costumers => costumers.find(costumer => costumer.id === id));
    }
}