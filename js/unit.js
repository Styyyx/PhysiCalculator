class Time {
  /**
   * 
   * @param {*} time 
   * @param {*} from ['second', 'minute']
   */
  static ToHour(time, from) {
    if (from == 'second') {
      return (time / 3600);
    } else if (from == 'minute') {
      return (time / 60);
    }
  }

  /**
   * 
   * @param {*} time 
   * @param {*} from ['hour','second']
   */
  static ToMinute(time, from) {
    if (from == 'hour') {
      return (time * 60);
    } else if (from == 'second') {
      return (time / 60);
    }
  }

  /**
   * 
   * @param {*} time 
   * @param {*} from ['hour','minute']
   */
  static ToSecond(time, from) {
    if (from == 'hour') {
      return (time * 3600);
    } else if (from == 'minute') {
      return (time * 60);
    }
  }
}

class Imperial {
  /**
   * 
   * @param {*} x 
   * @param {*} from ['inch','foot','yard']
   */
  static ToMeter(x, from) {
    if (from == 'inch') {
      return ((x * 2.54) / 100);
    } else if (from == 'foot') {
      return ((x * 12 * 2.54) / 100);
    } else if (from == 'yard') {
      return ((x * 3 * 12 * 2.54) / 100);
    }
  }
}