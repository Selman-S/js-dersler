// ************** Javascript Conditional Statements ***************/ 


// *********  Sorular  *********** // 

// 1- Bir sayının tek mi çift mi olduğunu consol'a yazdıran koşulu yazın

// var number = prompt('Lütfen bir sayı giriniz ');

// if (number % 2 === 0) {
//   console.log(number + " çift bir sayıdır");
// } else if(number % 2 === 1 || number % 2 === -1) {
//   console.log(number + " tek bir sayıdır");
// }else {
//   console.log('Lütfen geçerli bir sayı giriniz.');
  
// }


// 2- Bir sayının 0 ile 100 arasında olup olmadığını konsola yazdıran ternary yapıyı yazınız

// const num =21
// if(num >= 0 && 100 <= end){
//   console.log(`${num} 0 ile 100  arasındadır`)
// }
// else{
//   console.log(`${num}  0 ile 100  arasında değildir`)    
// }


// 6- 18 yaşından büyüklerin oy kullanabileceğini 18 yaşından küçüklerin oy kullanamayacağını ternary yapı ile konsola yazdıran kodu yazınız


// const yas =18;

// yas >= 18 ? console.log('büyük')
// : console.log('küçük');



// 7- Haftanın günlerinin numaraları aşağıda belirtilmiştir. Buna göre belirtilen bir sayının hangi güne karşılık gelidiğini switch case yapı ile konsola yazdıran kodu yazınız.
// pazar 0 
// Pazartesi 1
// Salı 2
// Çarşamba 3
// Perşembe 4
// Cuma 5
// Cumartesi 6

// const day = 2
// switch (day) {
//   case 0:
//     console.log('Pazar');
    
//     break;
//   case 1:
//     console.log('Pazartesi');
      
//     break;
//   case 2:
//     console.log('Salı');
        
//     break;
//   case 3:
//     console.log('Çarşamba');
    
//     break;
//   case 4:
//     console.log('Perşembe');
    
//     break;
//   case 5:
//     console.log('Cuma');
    
//     break;
//   case 6:
//     console.log('Cumartesi');
    
//     break;

//   default:
//     console.log('geçerli numara giriniz');
    
//     break;
// }

// 3- 
// Bir dersten alınan notun harfini aşağıdaki duruma göre konsola yazdırınız?
//  Not:
//  90'dan büyükse AA.
// - 80'den büyük yada 90'a eşitse AB,
// - 70'den büyük yada 80'a eşitse BB,
// - 60'den büyük yada 70'a eşitse BC,
// - 50'den büyük yada 60'a eşitse CC,
// - 40'den büyük yada 50'a eşitse CD,
// - 30'den büyük yada 40'a eşitse DD,
// - 30'dan küçük yada eşitse FF ,



// const not =-10;


// if (not > 100)       console.log('Not hatalı');
// else if ( not > 90)  console.log('Notunuz AA');
// else if ( not > 80)  console.log('Notunuz AB');
// else if ( not > 70)  console.log('Notunuz BB');
// else if ( not > 60)  console.log('Notunuz BC');
// else if ( not > 50)  console.log('Notunuz CC');
// else if ( not > 40)  console.log('Notunuz CD');
// else if ( not > 30)  console.log('Notunuz DD');
// else if ( not >= 0)   console.log('Notunuz FF');
// else      console.log('Not hatalı');

    
  

// 4- Artık yıl sorusu 
// Artık yıl, bir yıldaki günlerin 365 yerine 366 gün olmasına denir. Bu fazladan gün (artık gün), normalde 28 gün olan şubat ayına 29 Şubat’ın eklenmesi ile elde edilir.  Bunun hesaplanması için aşağıdaki algoritma kullanılır.
// Bir tarih 4 ile tam bölünüp 100 katları ile tam bölünemiyorsa, ve yıl 400 sayısına tam bölünüyorsa artık yıldır. BU iki şartın dışında yılarda şubat ayı 28 gün, artık yıllarda 29 gün olarak belirlenir.


// const year =24
// if((year%4 == 0)&&(year%100 != 0)){
//   console.log(`${year} yılı artık yıldır`);

// }else if(year%400==0){
//   console.log(`${year} yılı artık yıldır`);
  
// } else {
//   console.log(` ${year} yılı artık yıl değildir`);
//   }



// 5- kullanıcıdan bir yıl ve ay alıyoruz o ayın kaç çektiğini konsola yazdıran kodu yazınız (2024'ün 2. ayı 29 çeker.)


// const year = prompt('Lütfen yıl giriniz')
// const month = prompt('Lütfen ay giriniz')

// if (month ==2) {
//   if (((year%4 == 0)&&(year%100 != 0))||(year%400 == 0)) {
    
//     console.log(`${year} yılının ${month}. ayı 29 çeker.`);
//   }else {
//     console.log(`${year} yılının ${month}. ayı 28 çeker.`);
//   }
  
// } else if(month == 4 || month == 6 || month == 9 || month== 11){
//   console.log(`${year} yılının ${month}. ayı 30 çeker`)    
// }
// else{
//   console.log(`${year} yılının ${month}. ayı 31 çeker`)
// }






