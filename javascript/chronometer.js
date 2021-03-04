class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  };

  startClick(callback) {
    const intervalId = setInterval(() => {this.currentTime ++}, 1000);
  };

  getMinutes() {
    if (this.currentTime === 0) {return 0;}
    else { let minutes = Math.floor(this.currentTime / 60);
    return minutes;
    }
  }
  getSeconds() {
    let seconds = this.currentTime
    if (this.currentTime === 0) {return 0;}
    else if (this.currentTime % 60 !== 0); {
    return seconds % 60;}
    
  }
  
  twoDigitsNumber(time) {
    if (time < 10) {
      return `0${time.toString()}`;
    } else {
      return time.toString();
    }
  }

  stopClick() {
    return clearInterval(this.intervalId)
  } // return {clearInterval(this.intervalId)} wasn't working until I removed the curly brackets. Why?


  resetClick() {
     return this.currentTime = 0
   }

  splitClick() {
    let min = this.twoDigitsNumber(this.getMinutes());
    let sec = this.twoDigitsNumber(this.getSeconds());
    
    return `${min}:${sec}`
  }
}
