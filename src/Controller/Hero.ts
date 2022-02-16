import { Power } from './Power'

export interface Hero {
    name: string,
    age: number,
    weight: number,
    power: Power,
    weapon: string,
    dmgMultiplier?: number,
    getDmgMultiplier?: (enemy: Hero) => void,  
}

export class CreateHero implements Hero {
    id: string;
    name: string;
    age: number;
    weight: number;
    power: Power;
    weapon: string;
    dmgMultiplier: number;

    constructor(id: string, name: string, age: number, weight: number, power: Power, weapon: string){
        this.id = id
        this.name = name 
        this.age = age 
        this.weight = weight 
        this.power = power 
        this.weapon = weapon 
        this.dmgMultiplier = 1 
    }

    getDmgMultiplier (enemy: Hero){
        if(this.power.goodAgainst == enemy.power.type)
            this.dmgMultiplier = 2
        else if(this.power.weakAgainst == enemy.power.type)
            this.dmgMultiplier = 0.5
        else   
            this.dmgMultiplier = 1

        console.log(this.dmgMultiplier)
    }
}