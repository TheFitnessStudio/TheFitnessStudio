$(document).ready(function() {
	var folderId = '0B0CnM1uDWPpTWUlJQy1iQXFhVXc';
	getDriveFolder(folderId);
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
		var scale = 0.5;
		for(i in data.files){
			if(data.files[i].fileExtension!= null){
				var width = data.files[i].imageMediaMetadata.width;
				var height = data.files[i].imageMediaMetadata.height;
				$('#events').append(
					'<div style = "height:'+(height*scale)+'px; width:'+
					(width*scale)+'px;"'+
					'class="overlay" onClick="style.pointerEvents=\'none\'"></div>');
				$('#events').append(
					'<iframe class = "drive-img" src="https://drive.google.com/file/d/'+
					data.files[i].id+
					'/preview" width="'+
					(width*scale)+'px" height="'+(height*scale)+'px"></iframe>');
			}else{
				$('#events').append("<h2 class = 'drive-folder'>"+data.files[i].name+": </h2>")
				getDriveFolder(data.files[i].id);
				console.log(data.files[i].id)
			}
		}
		console.log(data);
    	
	}).fail(function(){
		console.log("ow!");
	});
}