// types = [ instaReel: "https://www.instagram.com/reel/CjuQNBkpCV5/?igshid=YmMyMTA2M2Y=",
//           instaPic:"https://www.instagram.com/p/Cjd7TRSv_YC/?utm_source=ig_web_copy_link",
//           redditPost: "https://www.reddit.com/r/MadeMeSmile/comments/y44k10/wife_pranks_her_husband_in_the_most_wholesome_way/?utm_source=share&utm_medium=android_app&utm_name=androidcss&utm_term=1&utm_content=share_button",
//           tiktokVideo:"https://www.tiktok.com/@deborahyowa/video/7142065654022049029?is_from_webapp=1&sender_device=pc"
//           twitterPost: "https://twitter.com/Cr1tdota/status/1093606365505892354?s=20&t=e2VbPvKmpgQUWdnPzRP1CQ",
//           originalPhoto: "???",
//           originalVideo:"???"]


 module.exports.recognize = function(link){
   console.log((link));
   if(link.startsWith("https://www.reddit.com/")){
     return "reddit";
   }
   if(link.startsWith("https://www.tiktok.com/")){
     return "tiktok";
   }
   if(link.startsWith("https://twitter.com/")){
     return "twitter";
   }
   if(link.startsWith("https://www.instagram.com/")){
     return "instagram";
   }
   if(link.startsWith("https://youtu.")){
     return "youtube";
   }
   else{
     return false;
   }
 }
