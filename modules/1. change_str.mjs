function get_low_str(str) {
    let newStr = str[0].toUpperCase() + str.slice(1);
    return newStr;
};

function spacing(str) {
    str = str.replace(/^ +| +$|( ) +/g,"")
    str = str.replace(',', ', ');
    str = str.replace(' ,', ',');
    let list_words = str.split('.');
    for (let word in list_words) {
        list_words[word] = list_words[word].trim();
    };
    let result = list_words.join('. ');
    return result;
};

function get_word_count(str) {
    str = str.split(' ');
    return str.length;
};

function get_uniqe(str) {
    str = str.replace(',', '').toLowerCase();
    let arr = str.split(' ');
    let uniqe_word = arr.reduce((acc, word) => {
        acc[word] = acc[word] ? acc[word] + 1 : 1; 
        return acc
    }, {});
    
    resultMap = Object.entries(uniqe_word).map(([word, count]) => {
        return { word, count };
    });
    return resultMap;
};

console.log(get_low_str('aBsc'));

let text = "Вот пример строки,в которой     \
    используются знаки препинания.После знаков должны \
    стоять пробелы  , а перед знаками их быть не должно . \
    Если есть лишние подряд идущие пробелы, \
    они должны быть устранены."; 

console.log(spacing(text));

let text1 = "Текст, в котором слово текст несколько\
 раз встречается и слово тоже";

console.log(get_word_count(text1));

console.log(get_uniqe(text1));
