function cssgramify() { //function name
  "use strict";
    var color = ''; // hexadecimal starting symbol
    var filters = ["aden",
                  "reyes",
                  "perpetua",
                  "inkwell",
                  "toaster",
                  "walden",
                  "hudson",
                  "gingham",
                  "mayfair",
                  "lofi",
                  "xpro2",
                  "_1977",
                  "brooklyn",
                  "nashville",
                  "lark",
                  "moon",
                  "clarendon",
                  "willow"]; //Set your filters here
    color += filters[Math.floor(Math.random() * filters.length)];
    document.getElementById('tot').style.class = color; // Setting the random color on your div element.
  };
