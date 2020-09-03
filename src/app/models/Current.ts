import { Weather } from './Weather';

export class Current{
    name: string;
    weather: Array<Weather>;
    main:{
        temp: number;
    }
}