var lengthOfLastWord = function(s) {
    s = s.trim();
    let length = 0;
    for(let i = s.length - 1; i >= 0; i--) {
        if(s != " ") {
            length++;
        } else if (length > 0) {
            break;
        }
    }
    return length;
}