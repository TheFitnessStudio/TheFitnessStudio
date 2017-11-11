$(document).ready(function() {
	var folderId = '0B0CnM1uDWPpTWUlJQy1iQXFhVXc';
	getDriveFolder(folderId);
	$(".button.events").click(function(){
		console.log($("#moreEvents").is(":empty"));
		if($("#moreEvents").is(":empty")){
			getDriveFolder(folderId);
		}
	});
});

function getDriveFolder(folderId){
	var apiKey = 'AIzaSyBLfM2yacR_wryqumgghO3K_n_vOX4_e5U';
	var fields = "files(contentHints%2Fthumbnail%2Cdescription%2CfileExtension%2Cid%2CimageMediaMetadata(height%2Cwidth)%2Cname)";
	var url = "https://www.googleapis.com/drive/v3/files?q='"+folderId+"'+in+parents&fields="+fields+"&key="+apiKey;
	var promise = $.getJSON( url, function( data, status){
    	// on success
	});
	promise.done(function( data ){
		var obj = JSON.stringify(data);
		var picCount = 0;
		var picsPerLine = 4;
		var maxPics = 2*picsPerLine;
		var size = $("#events").width()/picsPerLine;
		if($("#eventsHere").is(":empty")){
			for(i in data.files){
				if(data.files[i].fileExtension!= null){
					if(picCount<maxPics){
						picCount++;
						addPic($("#eventsHere"), size, data.files[i]);
					}
				}else{
					$('#eventsHere').append("<h2 class = 'drive-folder'>"+data.files[i].name+": </h2>");
					getDriveFolder(data.files[i].id);
				}
			}
		}else{
			for(var i = maxPics+1; i<data.files.length; i++){
				if(data.files[i].fileExtension!= null){
					picCount++;
					addPic($("#moreEvents"), size, data.files[i]);
				}else{
					$('#moreEvents').append("<h2 class = 'drive-folder'>"+data.files[i].name+": </h2>");
					getDriveFolder(data.files[i].id);
				}
			}
		}

	}).fail(function(){
		console.log("ow!");
	});
}

function addPic(appendTo, size, file){
	var width = file.imageMediaMetadata.width;
	var height = file.imageMediaMetadata.height;
	var size = 200;

	appendTo.append(
		'<iframe class = "drive-img" src="https://drive.google.com/file/d/'+
		file.id+
		'/preview" width="'+size+'px" height="'+size+'px"></iframe>');

	var offset = $(".drive-img:last-of-type").offset();
	console.log(offset);
	appendTo.append(
		'<div style = "height:'+size+'px;'+ 'width:'+size+'px;'+
		'left:'+offset.left+'px;'+ 'top:'+(offset.top-60)+'px;"'+
		'class="overlay" onClick="style.pointerEvents=\'none\'"></div>');
}
