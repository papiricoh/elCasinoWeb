import { Option } from './Option';

export class BettingEvent {
  public options: Option[];

  constructor(
    public name: string,
    public startDate: Date,
    public endDate: Date,
    options: Option[] = [],
    public isClosed: boolean = false
  ) {
    this.options = options;
  }

}
