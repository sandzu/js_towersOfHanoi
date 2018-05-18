class Clock{
  constructor(){
    const startTime = new Date(); 
    this.seconds = startTime.getSeconds();
    this.minutes = startTime.getMinutes();
    this.hours = startTime.getHours();
    this.printTime();
    const self = this ;
    setInterval(function(){
      self.printTime();
      self._tick();
    }, 1000);
  }
  
  printTime(){
    if (this.hours<10){
      var buffer = '0';
    } else {
      var buffer = "";
    }
    let hoursString = buffer + this.hours ;
    if (this.minutes<10){
      buffer = '0';
    } else {
      buffer = "";
    }
    let minutesString = buffer + this.minutes;
    if (this.seconds<10){
      buffer = '0';
    } else {
      buffer = "";
    }
    let secondsString = buffer + this.seconds;
    let time =`${hoursString}:${minutesString}:${secondsString}`;  
    console.log(time);
  }
  
  _tick(){
    this.seconds += 1;
    if  (this.seconds === 60){
      this.seconds = 0;
      this.minutes +=1;
    }
    if  (this.minutes === 60){
      this.minutes = 0;
      this.hours +=1;
    }
    if  (this.hours === 24){
      this.hours = 0;
    }
  }
}