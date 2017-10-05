var tagData = [{
  "name": "!DOCTYPE",
  "description": "Defines the HTML version used for the document."
  },
  {
    "name": "html",
    "description": "The root element for the document.  Also contains the lang = \"en\" attribute."
  }
];

var tid = setInterval( function () {
  if ( document.readyState !== 'complete' ) return;
  clearInterval( tid );
  printTagData();
}, 100 );

function printTagData()
{
  var wrapper = document.getElementById('tagData');
  if (wrapper != null) {
    for (i = 0; i < tagData.length; i++) {
      var ul = document.createElement('dl');
      var li = document.createElement('dt');
      var liText = document.createTextNode(tagData[i].name);
      var dd = document.createElement('dd');
      var ddText = document.createTextNode(tagData[i].description);
      dd.appendChild(ddText);
      li.appendChild(liText);
      ul.appendChild(li);
      li.appendChild(dd);
      wrapper.appendChild(ul);
    }
  }
}
