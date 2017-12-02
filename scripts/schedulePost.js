$(document).ready(function() {
  $('.single-event').each(function(){
    var rounded = $(this).attr('data-rounded');
    var i = 0;
    $(this).find('.event-date').each(function(){
      i++;
      var time = this.innerHTML;
      if(Number(rounded) != 0){
        time = unRound(time, rounded);
      }

      var start = timeFormat(time.split('-')[0]);
      var end = timeFormat(time.split('-')[1]);
      this.innerHTML = start + " - " + end;
    });
  });

  //changes hour from military time to a normal time format
  function timeFormat(time){
    var timeSplit = time.split(':');
    var hour = timeSplit[0];
    if(hour > 12){
      var newTime = Number(hour) - 12;
      return ""+ newTime + ":" + timeSplit[1];
    }else
      return time;
  }

  function unRound(time, roundFrom){
    var start = time.split('-')[0], end = time.split('-')[1];
    var startHour = start.split(':')[0], startMinute = start.split(':')[1];
    startMinute = String(Number(startMinute) + roundFrom);
    if(roundFrom <0){
      startHour=String(Number(startHour)-1);
    }
    var endHour = end.split(':')[0];
    var newTime = startHour +':'+ startMinute +' - '+ endHour+':'+startMinute;
    return newTime;
  }
});
