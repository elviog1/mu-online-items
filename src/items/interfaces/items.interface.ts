export interface Item {
    name: string;
    set:string;
    level: number;
    str: number;
    agi:number;
    type:string;
    image: { url: string; level: number }[];
    defense:number;
    durability:number;
    attackSpeed:number;
    class:string[];
    upgradeStr:number;
    upgradeAgi:number;
    upgradeDefense:number;
}