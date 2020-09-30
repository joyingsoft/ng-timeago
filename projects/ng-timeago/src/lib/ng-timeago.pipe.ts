import { Pipe, PipeTransform } from '@angular/core';

export const ngTimeagoZh = {
  aFewSecondsAgo: '几秒钟之前',
  aMinuteAgo: '1 分钟之前',
  minutesAgo: '分钟之前',
  anHourAgo: '1 小时前',
  hoursAgo: '小时前',
  aDayAgo: '1 天前',
  daysAgo: '天前',
  aMonthAgo: '1 个月前',
  monthsAgo: '个月前',
  aYearAgo: '1 年前',
  yearsAgo: '年前'
};

@Pipe({ name: 'ngTimeago' })
export class NgTimeagoPipe implements PipeTransform {

  transform(value: string | Date) {
    if (!value) { return ''; }

    const d = new Date(value);
    const now = new Date();
    if (d > now) { return '--'; }

    const seconds = Math.round(Math.abs((now.getTime() - d.getTime()) / 1000));
    if (Number.isNaN(seconds)) { return ''; }
    if (seconds <= 45) { return ngTimeagoZh.aFewSecondsAgo; }
    if (seconds <= 90) { return ngTimeagoZh.aMinuteAgo; }

    const minutes = Math.round(Math.abs(seconds / 60));
    if (minutes <= 45) { return `${minutes} ${ngTimeagoZh.minutesAgo}`; }
    if (minutes <= 90) { return ngTimeagoZh.anHourAgo; }

    const hours = Math.round(Math.abs(minutes / 60));
    if (hours <= 22) { return `${hours} ${ngTimeagoZh.hoursAgo}`; }
    if (hours <= 36) { return ngTimeagoZh.aDayAgo; }

    const days = Math.round(Math.abs(hours / 24));
    if (days <= 25) { return `${days} ${ngTimeagoZh.daysAgo}`; }
    if (days <= 45) { return ngTimeagoZh.aMonthAgo; }

    const months = Math.round(Math.abs(days / 30.416));
    if (days <= 345) { return `${months} ${ngTimeagoZh.monthsAgo}`; }
    if (days <= 545) { return ngTimeagoZh.aYearAgo; }

    const years = Math.round(Math.abs(days / 365));
    return `${years} ${ngTimeagoZh.yearsAgo}`;
  }
}
