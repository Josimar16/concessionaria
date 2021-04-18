import { IDateProvider } from "../models/IDateProvider";

class FakeDateProvider implements IDateProvider {
  public compareInHours(start_date: Date, end_date: Date): number {
    const start_date_utc = new Date(start_date);
    const end_date_utc = new Date(end_date);
    const timeDiff = Math.abs(end_date_utc.getTime() - start_date_utc.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return diffDays;
  }
  public convertToUTC(date: Date): string {
    return String(new Date(date).getUTCDate());
  }
  public dateNow(): Date {
    return new Date();
  }

}

export { FakeDateProvider }