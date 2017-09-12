module.exports = function check(str, bracketsConfig) {
    let mas = [];
    let i = 0;
    let j = 0;
    let check = 0;
    for (i = 0; i < bracketsConfig.length; i++) {
        mas[i] = bracketsConfig[i].join('');
    }
    i = 0;
    while(i < mas.length) {
        while (j < str.length) {
            check = str.indexOf(mas[i]);
            if (check !== -1){
                str = str.substring(0, check) + str.substring(check+mas[i].length, str.length);
                i = 0;
            } else {
                j = str.length;
            }
        }
        i++;
        j = 0;
    }

    if (!str){
        return true;
    } else {
        return false;
    }
}
