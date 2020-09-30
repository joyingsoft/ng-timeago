import { NgTimeagoPipe, ngTimeagoZh } from './ng-timeago.pipe';

describe('NgTimeagoPipe', () => {

  let pipe: NgTimeagoPipe;
  let now: Date;

  beforeEach( () => {
    pipe = new NgTimeagoPipe();
    now = new Date();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  const sections: {[key: string]: {seconds: number, expect: string}} = {
    aFewSecondsAgo: {seconds: 1000 * 6, expect: ngTimeagoZh.aFewSecondsAgo},
    aMinuteAgo: {seconds: 1000 * 60, expect: ngTimeagoZh.aMinuteAgo},
    minuteAgo: {seconds: 1000 * 60 * 6, expect: `6 ${ngTimeagoZh.minutesAgo}`},
    anHourAgo: {seconds: 1000 * 60 * 60, expect: `${ngTimeagoZh.anHourAgo}`},
    hoursAgo: {seconds: 1000 * 60 * 60 * 6, expect: `6 ${ngTimeagoZh.hoursAgo}`},
    aDayAgo: {seconds: 1000 * 60 * 60 * 24, expect: `${ngTimeagoZh.aDayAgo}`},
    daysAgo: {seconds: 1000 * 60 * 60 * 24 * 6, expect: `6 ${ngTimeagoZh.daysAgo}`},
    aMonthAgo: {seconds: 1000 * 60 * 60 * 24 * 30, expect: `${ngTimeagoZh.aMonthAgo}`},
    monthsAgo: {seconds: 1000 * 60 * 60 * 24 * 30 * 6, expect: `6 ${ngTimeagoZh.monthsAgo}`},
    aYearAgo: {seconds: 1000 * 60 * 60 * 24 * 30 * 12, expect: `${ngTimeagoZh.aYearAgo}`},
    yearsAgo: {seconds: 1000 * 60 * 60 * 24 * 30 * 12 * 6, expect: `6 ${ngTimeagoZh.yearsAgo}`},
  };

  for (const [k, v] of Object.entries(sections)) {
    it(`${k} ${v.seconds}`, () => {
      expect(pipe.transform(new Date(now.getTime() - v.seconds))).toEqual(v.expect);
    });
  }

});
