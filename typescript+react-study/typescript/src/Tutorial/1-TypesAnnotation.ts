// Включить Quokka: CTRL + K , Q

//----------------------------- КАК ЗАДАВАТЬ ТИПЫ ----------------------------------------------------------

let awesomeName: string = "SomethingCool"; // Поменять этот тип я не могу как в JS
awesomeName = "something";
awesomeName = awesomeName.toLocaleUpperCase(); //Методы конкретно типа string
console.log(awesomeName);

// awesomeName = 20 // А вот так нельзя конечно. ТС ругается

let amount: number = 20;
amount = 12 - 1;
// amount = 'pants'

let isAwesome: boolean = true;
isAwesome = false;
// isAwesome = 'no'

//-------------- ВАЖНО! --------------

// TS умный и не требует чтобы я задавал типы вручные, он сделает это сам,
// когда я в первый раз объявлю переменную

let apples = 20;
apples = 10 - 5;
apples;
// apples = 'two'

let isNeedMore = apples >= 19;
isNeedMore;

//-------------- ВАЖНО! --------------

// Не смотря на ошибку при смене типов, TS выведет новый тип, но если мы попробуем забилдить наше
// приложение с такой ошибкой, то у нас не получится

isNeedMore = "no";
isNeedMore;
