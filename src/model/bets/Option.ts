export class Option {
    constructor(
        public name: string,
        public odds: number,
        public stake: number // Stake fijo para apostar en esta opción
    ) {}

    public toString(): string {
        return `${this.name} (Odds: ${this.odds}, Stake: ${this.stake})`;
    }
}
  