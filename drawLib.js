class SVG {
constructor (){}
  setLocation (location){
    var loc = location;
   }
  setWidth (width=100,unit="px"){
  var Width= width;
  var w= width + unit;
  }
  setHeight(height=100,unit="px"){
  var Height=height;
  var h = height+unit;
  }
  setStyle (style="icon", border= "2px solid black;", backgroundColor="white"){
    var Style= "border:" + border ;
  if(style != "rounded"){
    Style += "border-radius:0px;";
   }
  else if(style== "rounded"){Style += "border-radius:50px;";}
  }
}
