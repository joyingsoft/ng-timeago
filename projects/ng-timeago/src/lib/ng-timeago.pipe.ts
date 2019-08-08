import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ngTimeago' })
export class NgTimeagoPipe implements PipeTransform {

  transform(value: string) {
    if (!value) {
      return '';
    }
    const d = new Date(value);
    const now = new Date();
    if (d > now) { return '--'; }
    const seconds = Math.round(Math.abs((now.getTime() - d.getTime()) / 1000));

    if (Number.isNaN(seconds)) {
      return '';
    }
    if (seconds <= 45) {
      // return 'a few seconds ago';
      return '几秒钟之前';
    }
    if (seconds <= 90) {
      // return 'a minute ago';
      return '1 分钟之前';
    }
    const minutes = Math.round(Math.abs(seconds / 60));
    if (minutes <= 45) {
      // return minutes + ' minutes ago';
      return minutes + ' 分钟之前';
    }
    if (minutes <= 90) {
      // return 'an hour ago';
      return '1 小时前';
    }
    const hours = Math.round(Math.abs(minutes / 60));
    if (hours <= 22) {
      // return hours + ' hours ago';
      return hours + ' 小时前';
    } else if (hours <= 36) {
      // return 'a day ago';
      return '1 天前';
    }
    const days = Math.round(Math.abs(hours / 24));
    if (days <= 25) {
      // return days + ' days ago';
      return days + ' 天前';
    } else if (days <= 45) {
      // return 'a month ago';
      return '1 个月前';
    }
    const months = Math.round(Math.abs(days / 30.416));
    if (days <= 345) {
      // return months + ' months ago';
      return months + ' 个月前';
    }
    if (days <= 545) {
      // return 'a year ago';
      return '1 年前';
    }
    const years = Math.round(Math.abs(days / 365));
    // (days > 545)
    // return years + ' years ago';
    return years + ' 年前';
  }
}
