$(document).ready(function() {

    // page is now ready, initialize the calendar...

    $('#schedule').fullCalendar(
    {
        googleCalendarApiKey: 'AIzaSyBLfM2yacR_wryqumgghO3K_n_vOX4_e5U',
        events: {
            googleCalendarId: 'uni239tesdkudj8u9o99n8l45g@group.calendar.google.com'
        },
        defaultView: 'agendaWeek',
        duration:{weeks:1},
        minTime: '8:00',
        maxTime:'21:30',
        allDaySlot:false,
        businessHours: [
        {
		    // days of week. an array of zero-based day of week integers (0=Sunday)
		    dow: [ 1, 2, 3, 4, 5 ], // Monday - Friday

		    start: '8:00', // a start time (8am in this example)
		    end: '21:00' // an end time (9pm in this example)
		},
		{
			dow: [6, 7],
			start: '8:00',
			end: '12:00'
		}
		],
		eventClick: function(calEvent, jsEvent, view){
			var title = calEvent.title;
			title = title.replace('*', '');
			if(title.indexOf(' ')!= -1){
				title = title.replace(' ', '%20');
			}
			var json = "http://gsx2json.com/api?id=1JLMl_Dmphv0D_6Z7sc6klBTjy9KRB-82rgIpytpIQa8&sheet=2&rows=false&q="+
				title;
			if(json ==null){
				console.log("out of luck");
			}else{
				var description = $.getJSON(json, function(data){
					$.each(data.columns, function(key, value){
						if(title == "Zumba"){
							var str = JSON.stringify(value).split(",");
							for (i in str){
								var b = str[i].split(":");
								console.log(b);
								for (j in b){
									if(b[j] ="ZUMBA"){
										alert('Event' +b[j+1])
									}
								}
							}
						}else{
							alert('Event: ' + value);
						}
				});
				});
			}

			return false;
		}
	});

});