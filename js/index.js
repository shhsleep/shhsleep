function haba(){
  var decoWidth = $(window).width();
  var colorWidth = 80;
  var decos =　decoWidth /　colorWidth;
  var NcolorWidth = 0;

  decos = Math.floor(decos);
  var decoAmari = (decoWidth - decos * colorWidth)/2;
  /*****************************************
  document.write("画面幅"+decoWidth+"<BR>");
  document.write("色の数"+decos+"<BR>");
  document.write("色の幅"+colorWidth+"<BR>");
  document.write("余り幅"+decoAmari+"<BR>");
********************************************/
  var color = ['blue','white','red','white','blue'];
  var eioua = '';

  NcolorWidth = decoAmari;

  for(var i=0; i<decos; i++){
    var j = i%4;
    ouou = ','+ color[j] + ' ' + NcolorWidth + 'px';
    auau = ','+ color[j+1] + ' ' + NcolorWidth + 'px';
    eioua += ouou;
    eioua += auau;
    NcolorWidth += colorWidth;
  }

  ouou = ','+ color[decos%4] + ' ' + NcolorWidth + 'px';
  auau = ','+ color[decos%4+1] + ' ' + NcolorWidth + 'px';
  eioua += ouou;
  eioua += auau;

  //document.write("でばぐ"+eioua+"<BR>");

  $('.deco').css({'background-image':'linear-gradient('+'90deg'+eioua+')'
});

}
