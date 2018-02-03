jQuery(document).ready(function($){
	var scheduleText = [
    ['Monday','Cardio Sculpt','ND','8:30'],
    ['Monday','Zumba','ND','17:30'],
    ['Monday','Stretch & Tone','JG','18:30'],
    ['Tuesday','Zumba','ND','8:30'],
    ['Tuesday','Sculpt & Tone','KP','17:30'],
    ['Tuesday','Zumba','ND','18:30'],
    ['Wednesday','Spin','ND','8:00'],
    ['Wednesday','Zumba','ND','16:30'],
    ['Wednesday','Yoga','ND','17:30'],
    ['Wednesday','Hip Hop','AG','18:30'],
    ['Thursday','Zumba','ND','8:30'],
    ['Thursday','Sculpt & Tone','KP','17:30'],
    ['Thursday','Zumba','KP','18:30'],
    ['Friday','Swing Dancing','TS','20:00','23:00'],
    ['Saturday','Zumba','ND','8:00'],
    ['Saturday','Cardio Mix','PD','9:00'],
		['Saturday','Yoga','KP / JG','10:15'],
    ['Sunday','Step & Sculpt','ND','8:30']
	];

  var classDescriptions = [
    'Cardio Mix',['classDescriptions/cardioMix', '#5454f7'],

    'Cardio Sculpt',['classDescriptions/cardioSculpt','#80a4f2'],

    'Step & Sculpt',['classDescriptions/stepSculpt','#44ab52'],

    'Hip Hop',['classDescriptions/hipHop','#2acaf7'],

    'Strong by Zumba',['classDescriptions/strong','#46c63f'],

    'Sculpt & Tone',['classDescriptions/sculptTone','#4f8ec1'],

    'Spin',['classDescriptions/spin', '#80c655'],

    'Stretch & Tone',['classDescriptions/stretchTone', '#46a30d'],

    'Zumba',['classDescriptions/zumba', '#b7da29'],

    'Swing Dancing',['classDescriptions/swingDancing', '#5f4aad'],
		'Yoga',['classDescriptions/yoga', '#f4aa42']
	];

	var instructors = [
		'ND', ['Nancy D.'],
		'JG', ['Jill G.'],
		'KP', ['Kathy P.'],
		'PD', ['Patty D.'],
		'AG', ['Amanda G.'],
		'TS', ['Tod Schmenk']
	];

  $(".plain-schedule ul li").each(function(){
    var day = $(this).attr("id");
    $(this).append("<b>"+day+"</b><ul></ul>");
  });

  for(var i=0; i<scheduleText.length; i++){
    var properDay = scheduleText[i][0];
    linkIndex = classDescriptions.indexOf(scheduleText[i][1])+1
    //scheduleText[i][1] = classDescriptions[linkIndex][0];
    //scheduleText[i][2] =
    if(scheduleText[i].length> 4){
      scheduleText[i][3]= timeFormat(scheduleText[i][3]) + " - " + timeFormat(scheduleText[i][4]);
    }else{
      scheduleText[i][3] = timeFormat(scheduleText[i][3]) + " - "+ timeFormat(getEndTime(scheduleText[i][3]));
    }

    scheduleText[i].shift();
    var scheduleItemString = "<li>" + scheduleText[i].join(", ")+"</li>";
    $("#"+properDay+" ul").append(scheduleItemString);
  }

});


//changes hour from military time to a normal time format
function timeFormat(time){
  var timeSplit = time.split(':');
  var hour = timeSplit[0];
  if(hour > 12){
    var newTime = Number(hour) - 12;
    return ""+ newTime + ":" + timeSplit[1] +"pm";
  }else
    return time +"am";
}

function getEndTime(start){
	var end = " ";

	var splart = start.split(':');
	var startHour = splart[0];
	var startMinute = splart[1];
	var startMinuteNum = parseInt(startMinute);
	if(startMinuteNum<= 15 && startMinuteNum != 0){
		start = startHour+':00';
	}else if(startMinuteNum>= 16 && startMinuteNum <= 44 && startMinuteNum != 30){
		start = startHour+':30';
	}else if(startMinuteNum>= 45 && startMinuteNum != 0){
		start = ""+parseInt(startHour+1)+':00';
	}
	end = ""+(parseInt(startHour)+1)+':'+startMinute;

	return end;
}
