var romanToInt = function(s) {
    const roman = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    };
    let result = 0;

    // roman numbers rule;
    for(let i = 0; i < s.length - 1; i++) {
        if(roman[s[i]] < roman[s[i + 1]]) {
            result -= roman[s[i]];
        } else {
            result += roman[s[i]];
        }
    }

    return result + roman[s[s.length - 1]]
}