var styled = require("./"),
    text   = 'begin ';

text += styled.bold('bold') + ' and ';
text += styled.red('red') + ' and ';
text += styled.blue('blue') + ' and ';

text += styled.greenBg(styled.yellow( styled.bold( 'bold yellow and green bg' ) )) + ' and ';

text += styled('bold red whiteBg', 'same thing with styled function') + ' and ';

text += styled.blink('blink') + ' and';

text += 'end';

console.log(text);
