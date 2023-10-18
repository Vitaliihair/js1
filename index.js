
   // let earsOld = prompt ('Сколько вам лет ?') 
    //if (earsOld <=12 ) {
    //    console.log ('Ребенок') ;
    //} 
    //else if (earsOld <= 18) {
    //    console.log ('Подросток') ;
    //}
    //else if (earsOld <= 60) {
    //    console.log ('Взрослый') ;
    //} 
    //else if (earsOld > 60) {
    //    console.log ('Пенсионер') ;
    //} 


    
//    let num = prompt ('Введите число от 1 до 9 !') 
//    switch ( num ) {
//     case '1':
//         console.log ( '!' );
//       break;
//     case '2':
//         console.log ( '@' );
//       break;
//     case '3':
//         console.log ( '#' );
//       break;
//       case '4':
//         console.log ( '$' );
//       break;
//       case '5':
//         console.log ( '%' );
//       break;
//       case '6':
//         console.log ( '^' );
//       break;
//       case '7':
//         console.log ( '&' );
//       break;
//       case '8':
//         console.log ( '*' );
//       break;
//       case '9':
//         console.log ( '(' );
//       break;
//       case '0':
//         console.log ( ')' );
//       break;
//     default:
//         console.log ( "Нет таких значений" );
//    }


// let num = prompt ('Введите трехзначное число !');
// if (num[1] == num[2] || num[0] == num[1] || num[0] == num[2]) 
// { console.log ("В числе есть одинаковые цифры"); }
// else console.log ("В числе нет одинаковых цифр")


// let year = prompt ('Введите год')
// if ( year%4 == 0 && year/100 !== 0)
// { console.log ("Это високосный год")
// } else console.log ("Это не високосный год")


// let num = prompt ('Введите число от 10000 до 99999 !');
// if (num[0] == num[4] && num[1] == num[3]) 
// { console.log ("Число палиндром"); }
// else console.log ("Число не палиндром")



// let quantity = prompt('Введите сумму:');
// let money = prompt('Подсчет в USD = 1, EUR = 2, CNY = 3', 0);
// switch(money) {
//     case '1':
//         console.log(quantity*97.35 + ' RUB');
//         break;
//     case '2':
//         console.log(quantity*102.75 + ' RUB');
//         break;
//     case '3':
//         console.log(quantity*13.29 + ' RUB');
//         break;
// }



// let mon = prompt('Введите сумму:');
// if (mon >=200 && mon < 300)
//     console.log('к оплате '+ mon / 100*97 + ' учитывая 3% скидку');
// else if (mon >=300 && mon < 500)
//     console.log('к оплате '+ mon / 100*95 + ' учитывая 5% скидку');
// else if (mon >=500)
//     console.log('к оплате '+ mon / 100*93 + ' учитывая 7% скидку');





//   let cr = prompt("Введите длину окружности: ");
//   let kv = prompt("Введите периметр квадрата: ");
//   if (cr / 3.14 > (kv / 4) / 2) {
//     console.log("Окружность не впишется в квадрат");
//   } else {
//     console.log("Окружность впишется в квадрат")}




// let lenin = prompt('От чего спасают Ленина ? 1 - от революции 2 - от Гитлера 3 - От плесени');
// let winter = prompt('Когда начинается зима ? 1 - "1 февраля" , 2 - "1 января"  , 3 - "1 декабря"');
// let wheels = prompt('Для чего применяют квадратные колеса? 1 - просто так 2 - для быстрой езды 3 - для эффекта голопа');
// let res = 0;
// if (lenin == 3)
//     res += 2;
// if (winter == 3)
//     res += 2;
// if (wheels == 3)
//     res += 2;
// console.log ("У вас " + res + " баллов");




// let enterDate = prompt('Введите дату - дд.мм.гггг ');
// enterDate = enterDate.split('.');
// let nextDate = new Date(enterDate[2], enterDate[1], enterDate[0]); 
// nextDate.setDate(nextDate.getDate()+1);
// console.log(nextDate);


