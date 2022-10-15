module.exports.getContentHtml  = function(data){
  var retString = '';
  for(var i = 0; i<data.length; i++){
    if(data[i].type ==="reddit"){
      retString+=  ifReddit(data[i]);
    }
    if(data[i].type ==="tiktok"){
      retString+= ifTikTok(data[i]);
    }
    if(data[i].type ==="twitter"){
      retString+= ifTwitter(data[i]);
    }
    if(data[i].type ==="instagram"){
      retString+= ifInsta(data[i]);
    }
    if(data[i].type ==="youtube"){
      retString+= ifYouTube(data[i]);
    }
  }

  return retString;


};

function ifYouTube(dataObject){
  return '<div class='+"data-box"+'>'+dataObject.source+'<iframe> </iframe></div>';

}

function ifInsta(dataObject){
  return '<div class='+"data-box"+'>'+dataObject.source+'<iframe> </iframe></div>';
}

function ifTikTok(dataObject){
  return '<div class='+"data-box"+'>'+dataObject.source+'<iframe> </iframe></div>';
}

function ifTwitter(dataObject){
  return '<div class='+"data-box"+'>'+dataObject.source+'<iframe> </iframe></div>';
}

function  ifReddit(dataObject){
  original = dataObject.source;
  var output = [original.slice(0, 18), "media", original.slice(18)].join('');
  var temp = ""
  var curOccurance = 0
  for(var i =0; curOccurance<8; i++){
    if(output.charAt(i)==="/"){
      curOccurance +=1;
    }
    temp+=output.charAt(i);
  }

  return '<div class='+"data-box"+'><iframe id="reddit-embed" src="'+temp+'?ref_source=embed&amp;ref=share&amp;embed=true" sandbox="allow-scripts allow-same-origin allow-popups" style="border: none;" height="500" width="500" scrolling="yes"></iframe></div>';
}



function ifPhoto(dataObject, curString){
  return '<div class='+"data-box"+'>'+dataObject.source+'<iframe> </iframe></div>';
}

function ifVideo(dataObject, curString){
  return '<div class='+"data-box"+'>'+dataObject.source+'<iframe> </iframe></div>';
}
