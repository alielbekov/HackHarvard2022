

module.exports.getContentHtml  = function(data){
  var retString = '';
  for(var i = 0; i<data.length; i++){
    if(data[i].type === "reddit"){
      retString+=  ifReddit(data[i]);
    }
    if(data[i].type === "instagram"){
      retString+= ifInsta(data[i]);
    }
    if(data[i].type === "youtube"){
      retString+= ifYouTube(data[i]);
    }
    ///////////////////////////////
    if(data[i].type === "tiktok"){
      retString+= ifTikTok(data[i]);
    }
    if(data[i].type === "twitter"){
      retString+= ifTwitter(data[i]);
    }

  }

  return retString;


};

function ifYouTube(dataObject){
  myarray = dataObject.source.split("/");
  if(myarray.includes("shorts")){
     dataString = myarray[myarray.indexOf("shorts")+1].split("?")[0];
  }
  else{
    dataString = dataObject.source.split("/").at(-1);
  }
return '<div class="data-box"'+'><iframe width="500" height="500" src="https://www.youtube.com/embed/'+dataString+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
}

function ifInsta(dataObject){
  cur = dataObject.source;
  cur = cur.split("/?")[0];

  return '<div class='+"data-box"+'><iframe src="'+cur+'/embed/" width="500" height="800" frameborder="0" scrolling="no" allowtransparency="true"></iframe></div>';


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


// function ifTikTok(dataObject){
//   return '<div class='+"data-box"+'>'+dataObject.source+'<iframe> </iframe></div>';
// }
//
// function ifTwitter(dataObject){
//   return '<div class='+"data-box"+'>'+dataObject.source+'<iframe> </iframe></div>';
// }

// function ifPhoto(dataObject, curString){
//   return '<div class='+"data-box"+'>'+dataObject.source+'<iframe> </iframe></div>';
// }
//
// function ifVideo(dataObject, curString){
//   return '<div class='+"data-box"+'>'+dataObject.source+'<iframe> </iframe></div>';
// }
