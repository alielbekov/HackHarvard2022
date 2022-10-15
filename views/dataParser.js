module.exports.getContentHtml  = function(data){
  var retString = '';
  for(var i =0; i<data.length; i++){
    // check type of data
    retString+= "<div>"+data[i].date+"</div>";
    retString += "<div>"+data[i].source+"</div>"
  };


  return retString;
};

function ifPhoto(dataObject, curString){
}

function ifVideo(dataObject, curString){


}

function ifInsta(dataObject, curString){
}


function  ifReddit(dataObject, curString){
}
