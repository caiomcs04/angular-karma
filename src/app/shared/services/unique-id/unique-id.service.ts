import { Injectable } from "@angular/core";
import {v4 as uuidv4} from 'uuid'

@Injectable()
export class UniqueIdService{
    private numberOfgeneretedIds = 0;

    public generateUniqueIdWithPrefix(prefix:string):string{
        if(!prefix){
            throw Error('Prefix não pode estar vazio')
        }
        const uniqueId = this.generateUniqueId();
        this.numberOfgeneretedIds++;
        return `${prefix}-${uniqueId}`;

    }

    public getNumberOfGeneratedUniqueIds():number{
        return this.numberOfgeneretedIds;
    }

    private generateUniqueId():string{
        return uuidv4()
    }

}