type PowerType = 'fire' | 'water' | 'air' | 'earth' 

export interface Power {
    name: string,
    type: PowerType,
    goodAgainst: PowerType,
    weakAgainst: PowerType,         
}

export class CreatePower implements Power {
    name: string;
    type: PowerType;
    goodAgainst: PowerType;
    weakAgainst: PowerType;

    constructor(name: string, type: PowerType, goodAgainst: PowerType, weakAgainst: PowerType) {
        this.name = name
        this.type = type
        this.goodAgainst = goodAgainst
        this.weakAgainst = weakAgainst
    }
}

// Pick & Omit
// type HeroPreview = Pick<Hero, 'name' | 'age'>
// type HeroPowerLevel = Omit<Hero, 'name' | 'age'>