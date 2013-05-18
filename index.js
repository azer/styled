var ansi = require("ansi-codes");

setup();

module.exports = styled;

function def(key){
  return function(str){
    return ansi[key] + str + ansi['reset'];
  };
}

function isNotNil(text){
  return text && text.length > 0;
}

function setup(){
  var key;
  for( key in ansi ) {
    styled[key] = def(key);
  }
}

function styled(styles, text){
  styles = styles.split(/[^\w]/).filter(isNotNil);

  var i = styles.length;
  while( i --> 0 ){
    text = ( ansi[styles[i]] || '' ) + text;
  }

  text += ansi['reset'];
  return text;
}
