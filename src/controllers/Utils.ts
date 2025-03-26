// Utils.ts
import { BettingEvent } from '../model/bets/BettingEvent';
import { Option } from '../model/bets/Option';

export class Utils {
    
    public static generateBettingEvent(): BettingEvent {
        
        const option1 = new Option('Opción A', 1.75, 50);
        const option2 = new Option('Opción B', 2.50, 75);
        const option3 = new Option('Opción C', 3.20, 100);

        
        const now = new Date();
        const twoHoursLater = new Date(now.getTime() + 2 * 60 * 60 * 1000);

        
        return new BettingEvent('Evento de Apuestas', now, twoHoursLater, [
            option1,
            option2,
            option3
        ]);
    }
}
