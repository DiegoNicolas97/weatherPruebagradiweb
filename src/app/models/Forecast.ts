import { Weather } from './Weather';

export class Forecast{
    dt: number;
    main:{
        temp: number;
    }
    weather: Array<Weather>;
    dateFormat: Date;
    
}