const carData = [
  {
    id: 1,
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    color: 'Silver',
    mileage: 25000,
    engine: {
      type: "V6",
      horsepower: 300,
      cylinders: 6
    }
  },
  {
    id: 2,
    make: 'Honda',
    model: 'Accord',
    year: 2019,
    color: 'White',
    mileage: 20000,
    engine: {
      type: "V4",
      horsepower: 140,
      cylinders: 4
    }
  },
  {
    id: 3,
    make: 'Ford',
    model: 'Mustang',
    year: 2018,
    color: 'Red',
    mileage: 15000,
    engine: {
      type: "V8",
      horsepower: 400,
      cylinders: 8
    }
  },
  {
    id: 4,
    make: 'Chevrolet',
    model: 'Camaro',
    year: 2017,
    color: 'Black',
    mileage: 10000,
     engine: {
      type: "V4",
      horsepower: 200,
      cylinders: 4
    }
  },
  {
    id: 5,
    make: 'Dodge',
    model: 'Challenger',
    year: 2016,
    color: 'Blue',
    mileage: 5000,
     engine: {
      type: "V6",
      horsepower: 250,
      cylinders: 6
    }
  },
  {
    id: 6,
    make: 'BMW',
    model: '3 Series',
    year: 2015,
    color: 'Silver',
    mileage: 35000,
     engine: {
      type: "V8",
      horsepower: 400,
      cylinders: 8
    }
  },
  {
    id: 7,
    make: 'Audi',
    model: 'A4',
    year: 2014,
    color: 'Black',
    mileage: 30000,
     engine: {
      type: "V4",
      horsepower: 220,
      cylinders: 4
    }
  },
  {
    id: 8,
    make: 'Mercedes-Benz',
    model: 'C-Class',
    year: 2013,
    color: 'White',
    mileage: 25000,
     engine: {
      type: "V6",
      horsepower: 280,
      cylinders: 6
    }
  },
  {
    id: 9,
    make: 'Volkswagen',
    model: 'Golf',
    year: 2012,
    color: 'Red',
    mileage: 20000,
     engine: {
      type: "V4",
      horsepower: 180,
      cylinders: 4
    }
  },
  {
    id: 10,
    make: 'Tesla',
    model: 'Model S',
    year: 2011,
    color: 'Silver',
    mileage: 15000,
     engine: {
      type: "V4",
      horsepower: 260,
      cylinders: 4
    }
  },
]


// 1- Rengi gümüş olan arabaları bir listeye ata.
// cevap
const silverCars = carData.filter(car => car.color === 'Silver')
console.log(silverCars)


// 2- 2015 yılından sonra üretilmiş arabaları bir listeye ata.

// cevap
const newCars = carData.filter(car => car.year > 2015)
console.log(newCars)

// 3- Arabaların ortalama kilometre değerini hesapla.

// cevap
const averageMileage = carData.reduce((total, car) => total + car.mileage, 0) / carData.length
console.log(averageMileage)

// 4- 8 silindirli araçları listele

// cevap
const eightCylinderCars = carData.filter(car => car.engine.cylinders === 8)
console.log(eightCylinderCars)

// 5- Farklı uzunlukta olması muhtemel iki listeden İlki key'lerden, ikincisi ise Value'lardan oluşmaktadır. Yine key ve value'lardan oluşan bir obje döndüren bir fonksiyon yazınız. Yeterli value yoksa, kalan keylerin değeri null olmalıdır. Yeterli anahtar yoksa, değerlerin geri kalanını yok sayın.
// keys = ['a', 'b', 'c', 'd']
// values = [1, 2, 3]
// createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3, 'd': null}


// cevap
const createDict = (keys, values) => {
  const dict = {}
  keys.forEach((key, index) => {
    dict[key] = values[index] || null
  })
  return dict
  
  
}


let keys = ['a', 'b', 'c','d']
let values = [1, 2, 3]
console.log(createDict(keys, values));

createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3}



// 6- Bir obje içerisindeki key ve value'ları değiştirin. Yani key'ler value'lar olmalı ve value'lar key'ler olmalıdır.
// Örnek: {a: 1, b: 2, c: 3}  -->  {1: 'a', 2: 'b', 3: 'c'}
// Not: Eğer bir value birden fazla key'e sahipse, son key'i kullanın.

// çözüm

let obj = {a: 1, b: 2, c: 3}
function reverseDict(obj) {
  let newObj = {}
  for (let key in obj){

    newObj[obj[key]] = key
  }
  return newObj
}

console.log(reverseDict(obj));





// 6- 
// Size bazı dilleri ve verilen dillerdeki test sonuçlarınızı içeren bir dictionarj obj verilir. Test puanınızın en az 60 olduğu dillerin listesini sonuçların azalan sırasına göre döndürün.
// Not: puanlar her zaman benzersiz olacaktır (bu nedenle yinelenen değerler olmayacaktır)
// örnekler
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

// çözüm

let results = {"Java": 10, "Ruby": 80, "Python": 95}
function myLanguages(results) {
  let filteredObj ={}
  let arr = []
  for (let key in results){
    if(results[key] >= 60){
      filteredObj[key] = results[key]
    }
  }
arr =Object.values(filteredObj).sort((a,b)=> b-a)
let sortedObj = {}
arr.forEach((value)=>{
  for(let key in filteredObj){
    if(filteredObj[key] === value){
      sortedObj[key] = value

    }}})
  return sortedObj
   
  
}
console.log(myLanguages(results));








// api https://api.github.com/users/selman-s/followers
const followers = [
  {
    "login": "ams0",
    "id": 1541352,
    "node_id": "MDQ6VXNlcjE1NDEzNTI=",
    "avatar_url": "https://avatars.githubusercontent.com/u/1541352?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/ams0",
    "html_url": "https://github.com/ams0",
    "followers_url": "https://api.github.com/users/ams0/followers",
    "following_url": "https://api.github.com/users/ams0/following{/other_user}",
    "gists_url": "https://api.github.com/users/ams0/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/ams0/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/ams0/subscriptions",
    "organizations_url": "https://api.github.com/users/ams0/orgs",
    "repos_url": "https://api.github.com/users/ams0/repos",
    "events_url": "https://api.github.com/users/ams0/events{/privacy}",
    "received_events_url": "https://api.github.com/users/ams0/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "0xN0x",
    "id": 1781547,
    "node_id": "MDQ6VXNlcjE3ODE1NDc=",
    "avatar_url": "https://avatars.githubusercontent.com/u/1781547?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/0xN0x",
    "html_url": "https://github.com/0xN0x",
    "followers_url": "https://api.github.com/users/0xN0x/followers",
    "following_url": "https://api.github.com/users/0xN0x/following{/other_user}",
    "gists_url": "https://api.github.com/users/0xN0x/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/0xN0x/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/0xN0x/subscriptions",
    "organizations_url": "https://api.github.com/users/0xN0x/orgs",
    "repos_url": "https://api.github.com/users/0xN0x/repos",
    "events_url": "https://api.github.com/users/0xN0x/events{/privacy}",
    "received_events_url": "https://api.github.com/users/0xN0x/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "kenjinote",
    "id": 2605401,
    "node_id": "MDQ6VXNlcjI2MDU0MDE=",
    "avatar_url": "https://avatars.githubusercontent.com/u/2605401?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/kenjinote",
    "html_url": "https://github.com/kenjinote",
    "followers_url": "https://api.github.com/users/kenjinote/followers",
    "following_url": "https://api.github.com/users/kenjinote/following{/other_user}",
    "gists_url": "https://api.github.com/users/kenjinote/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/kenjinote/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/kenjinote/subscriptions",
    "organizations_url": "https://api.github.com/users/kenjinote/orgs",
    "repos_url": "https://api.github.com/users/kenjinote/repos",
    "events_url": "https://api.github.com/users/kenjinote/events{/privacy}",
    "received_events_url": "https://api.github.com/users/kenjinote/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "markwylde",
    "id": 5929807,
    "node_id": "MDQ6VXNlcjU5Mjk4MDc=",
    "avatar_url": "https://avatars.githubusercontent.com/u/5929807?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/markwylde",
    "html_url": "https://github.com/markwylde",
    "followers_url": "https://api.github.com/users/markwylde/followers",
    "following_url": "https://api.github.com/users/markwylde/following{/other_user}",
    "gists_url": "https://api.github.com/users/markwylde/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/markwylde/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/markwylde/subscriptions",
    "organizations_url": "https://api.github.com/users/markwylde/orgs",
    "repos_url": "https://api.github.com/users/markwylde/repos",
    "events_url": "https://api.github.com/users/markwylde/events{/privacy}",
    "received_events_url": "https://api.github.com/users/markwylde/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "canocalir",
    "id": 11324886,
    "node_id": "MDQ6VXNlcjExMzI0ODg2",
    "avatar_url": "https://avatars.githubusercontent.com/u/11324886?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/canocalir",
    "html_url": "https://github.com/canocalir",
    "followers_url": "https://api.github.com/users/canocalir/followers",
    "following_url": "https://api.github.com/users/canocalir/following{/other_user}",
    "gists_url": "https://api.github.com/users/canocalir/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/canocalir/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/canocalir/subscriptions",
    "organizations_url": "https://api.github.com/users/canocalir/orgs",
    "repos_url": "https://api.github.com/users/canocalir/repos",
    "events_url": "https://api.github.com/users/canocalir/events{/privacy}",
    "received_events_url": "https://api.github.com/users/canocalir/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "mdhachem",
    "id": 18026408,
    "node_id": "MDQ6VXNlcjE4MDI2NDA4",
    "avatar_url": "https://avatars.githubusercontent.com/u/18026408?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/mdhachem",
    "html_url": "https://github.com/mdhachem",
    "followers_url": "https://api.github.com/users/mdhachem/followers",
    "following_url": "https://api.github.com/users/mdhachem/following{/other_user}",
    "gists_url": "https://api.github.com/users/mdhachem/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/mdhachem/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/mdhachem/subscriptions",
    "organizations_url": "https://api.github.com/users/mdhachem/orgs",
    "repos_url": "https://api.github.com/users/mdhachem/repos",
    "events_url": "https://api.github.com/users/mdhachem/events{/privacy}",
    "received_events_url": "https://api.github.com/users/mdhachem/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "AYIDouble",
    "id": 18186995,
    "node_id": "MDQ6VXNlcjE4MTg2OTk1",
    "avatar_url": "https://avatars.githubusercontent.com/u/18186995?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/AYIDouble",
    "html_url": "https://github.com/AYIDouble",
    "followers_url": "https://api.github.com/users/AYIDouble/followers",
    "following_url": "https://api.github.com/users/AYIDouble/following{/other_user}",
    "gists_url": "https://api.github.com/users/AYIDouble/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/AYIDouble/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/AYIDouble/subscriptions",
    "organizations_url": "https://api.github.com/users/AYIDouble/orgs",
    "repos_url": "https://api.github.com/users/AYIDouble/repos",
    "events_url": "https://api.github.com/users/AYIDouble/events{/privacy}",
    "received_events_url": "https://api.github.com/users/AYIDouble/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "Enes-s",
    "id": 42201589,
    "node_id": "MDQ6VXNlcjQyMjAxNTg5",
    "avatar_url": "https://avatars.githubusercontent.com/u/42201589?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Enes-s",
    "html_url": "https://github.com/Enes-s",
    "followers_url": "https://api.github.com/users/Enes-s/followers",
    "following_url": "https://api.github.com/users/Enes-s/following{/other_user}",
    "gists_url": "https://api.github.com/users/Enes-s/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Enes-s/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Enes-s/subscriptions",
    "organizations_url": "https://api.github.com/users/Enes-s/orgs",
    "repos_url": "https://api.github.com/users/Enes-s/repos",
    "events_url": "https://api.github.com/users/Enes-s/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Enes-s/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "PremChapagain",
    "id": 47587012,
    "node_id": "MDQ6VXNlcjQ3NTg3MDEy",
    "avatar_url": "https://avatars.githubusercontent.com/u/47587012?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/PremChapagain",
    "html_url": "https://github.com/PremChapagain",
    "followers_url": "https://api.github.com/users/PremChapagain/followers",
    "following_url": "https://api.github.com/users/PremChapagain/following{/other_user}",
    "gists_url": "https://api.github.com/users/PremChapagain/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/PremChapagain/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/PremChapagain/subscriptions",
    "organizations_url": "https://api.github.com/users/PremChapagain/orgs",
    "repos_url": "https://api.github.com/users/PremChapagain/repos",
    "events_url": "https://api.github.com/users/PremChapagain/events{/privacy}",
    "received_events_url": "https://api.github.com/users/PremChapagain/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "anderood",
    "id": 47918900,
    "node_id": "MDQ6VXNlcjQ3OTE4OTAw",
    "avatar_url": "https://avatars.githubusercontent.com/u/47918900?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/anderood",
    "html_url": "https://github.com/anderood",
    "followers_url": "https://api.github.com/users/anderood/followers",
    "following_url": "https://api.github.com/users/anderood/following{/other_user}",
    "gists_url": "https://api.github.com/users/anderood/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/anderood/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/anderood/subscriptions",
    "organizations_url": "https://api.github.com/users/anderood/orgs",
    "repos_url": "https://api.github.com/users/anderood/repos",
    "events_url": "https://api.github.com/users/anderood/events{/privacy}",
    "received_events_url": "https://api.github.com/users/anderood/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "ertugrul-aydin",
    "id": 48697010,
    "node_id": "MDQ6VXNlcjQ4Njk3MDEw",
    "avatar_url": "https://avatars.githubusercontent.com/u/48697010?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/ertugrul-aydin",
    "html_url": "https://github.com/ertugrul-aydin",
    "followers_url": "https://api.github.com/users/ertugrul-aydin/followers",
    "following_url": "https://api.github.com/users/ertugrul-aydin/following{/other_user}",
    "gists_url": "https://api.github.com/users/ertugrul-aydin/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/ertugrul-aydin/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/ertugrul-aydin/subscriptions",
    "organizations_url": "https://api.github.com/users/ertugrul-aydin/orgs",
    "repos_url": "https://api.github.com/users/ertugrul-aydin/repos",
    "events_url": "https://api.github.com/users/ertugrul-aydin/events{/privacy}",
    "received_events_url": "https://api.github.com/users/ertugrul-aydin/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "akar1660",
    "id": 50074111,
    "node_id": "MDQ6VXNlcjUwMDc0MTEx",
    "avatar_url": "https://avatars.githubusercontent.com/u/50074111?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/akar1660",
    "html_url": "https://github.com/akar1660",
    "followers_url": "https://api.github.com/users/akar1660/followers",
    "following_url": "https://api.github.com/users/akar1660/following{/other_user}",
    "gists_url": "https://api.github.com/users/akar1660/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/akar1660/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/akar1660/subscriptions",
    "organizations_url": "https://api.github.com/users/akar1660/orgs",
    "repos_url": "https://api.github.com/users/akar1660/repos",
    "events_url": "https://api.github.com/users/akar1660/events{/privacy}",
    "received_events_url": "https://api.github.com/users/akar1660/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "SenseiRofu",
    "id": 51322709,
    "node_id": "MDQ6VXNlcjUxMzIyNzA5",
    "avatar_url": "https://avatars.githubusercontent.com/u/51322709?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/SenseiRofu",
    "html_url": "https://github.com/SenseiRofu",
    "followers_url": "https://api.github.com/users/SenseiRofu/followers",
    "following_url": "https://api.github.com/users/SenseiRofu/following{/other_user}",
    "gists_url": "https://api.github.com/users/SenseiRofu/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/SenseiRofu/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/SenseiRofu/subscriptions",
    "organizations_url": "https://api.github.com/users/SenseiRofu/orgs",
    "repos_url": "https://api.github.com/users/SenseiRofu/repos",
    "events_url": "https://api.github.com/users/SenseiRofu/events{/privacy}",
    "received_events_url": "https://api.github.com/users/SenseiRofu/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "nurbaki",
    "id": 51860165,
    "node_id": "MDQ6VXNlcjUxODYwMTY1",
    "avatar_url": "https://avatars.githubusercontent.com/u/51860165?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/nurbaki",
    "html_url": "https://github.com/nurbaki",
    "followers_url": "https://api.github.com/users/nurbaki/followers",
    "following_url": "https://api.github.com/users/nurbaki/following{/other_user}",
    "gists_url": "https://api.github.com/users/nurbaki/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/nurbaki/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/nurbaki/subscriptions",
    "organizations_url": "https://api.github.com/users/nurbaki/orgs",
    "repos_url": "https://api.github.com/users/nurbaki/repos",
    "events_url": "https://api.github.com/users/nurbaki/events{/privacy}",
    "received_events_url": "https://api.github.com/users/nurbaki/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "Victor-Hu66",
    "id": 63140932,
    "node_id": "MDQ6VXNlcjYzMTQwOTMy",
    "avatar_url": "https://avatars.githubusercontent.com/u/63140932?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Victor-Hu66",
    "html_url": "https://github.com/Victor-Hu66",
    "followers_url": "https://api.github.com/users/Victor-Hu66/followers",
    "following_url": "https://api.github.com/users/Victor-Hu66/following{/other_user}",
    "gists_url": "https://api.github.com/users/Victor-Hu66/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Victor-Hu66/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Victor-Hu66/subscriptions",
    "organizations_url": "https://api.github.com/users/Victor-Hu66/orgs",
    "repos_url": "https://api.github.com/users/Victor-Hu66/repos",
    "events_url": "https://api.github.com/users/Victor-Hu66/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Victor-Hu66/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "krlslman",
    "id": 68502548,
    "node_id": "MDQ6VXNlcjY4NTAyNTQ4",
    "avatar_url": "https://avatars.githubusercontent.com/u/68502548?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/krlslman",
    "html_url": "https://github.com/krlslman",
    "followers_url": "https://api.github.com/users/krlslman/followers",
    "following_url": "https://api.github.com/users/krlslman/following{/other_user}",
    "gists_url": "https://api.github.com/users/krlslman/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/krlslman/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/krlslman/subscriptions",
    "organizations_url": "https://api.github.com/users/krlslman/orgs",
    "repos_url": "https://api.github.com/users/krlslman/repos",
    "events_url": "https://api.github.com/users/krlslman/events{/privacy}",
    "received_events_url": "https://api.github.com/users/krlslman/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "BAVI-BOOP",
    "id": 71410652,
    "node_id": "MDQ6VXNlcjcxNDEwNjUy",
    "avatar_url": "https://avatars.githubusercontent.com/u/71410652?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/BAVI-BOOP",
    "html_url": "https://github.com/BAVI-BOOP",
    "followers_url": "https://api.github.com/users/BAVI-BOOP/followers",
    "following_url": "https://api.github.com/users/BAVI-BOOP/following{/other_user}",
    "gists_url": "https://api.github.com/users/BAVI-BOOP/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/BAVI-BOOP/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/BAVI-BOOP/subscriptions",
    "organizations_url": "https://api.github.com/users/BAVI-BOOP/orgs",
    "repos_url": "https://api.github.com/users/BAVI-BOOP/repos",
    "events_url": "https://api.github.com/users/BAVI-BOOP/events{/privacy}",
    "received_events_url": "https://api.github.com/users/BAVI-BOOP/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "peter-kimanzi",
    "id": 71552773,
    "node_id": "MDQ6VXNlcjcxNTUyNzcz",
    "avatar_url": "https://avatars.githubusercontent.com/u/71552773?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/peter-kimanzi",
    "html_url": "https://github.com/peter-kimanzi",
    "followers_url": "https://api.github.com/users/peter-kimanzi/followers",
    "following_url": "https://api.github.com/users/peter-kimanzi/following{/other_user}",
    "gists_url": "https://api.github.com/users/peter-kimanzi/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/peter-kimanzi/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/peter-kimanzi/subscriptions",
    "organizations_url": "https://api.github.com/users/peter-kimanzi/orgs",
    "repos_url": "https://api.github.com/users/peter-kimanzi/repos",
    "events_url": "https://api.github.com/users/peter-kimanzi/events{/privacy}",
    "received_events_url": "https://api.github.com/users/peter-kimanzi/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "aytekinet",
    "id": 76602789,
    "node_id": "MDQ6VXNlcjc2NjAyNzg5",
    "avatar_url": "https://avatars.githubusercontent.com/u/76602789?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/aytekinet",
    "html_url": "https://github.com/aytekinet",
    "followers_url": "https://api.github.com/users/aytekinet/followers",
    "following_url": "https://api.github.com/users/aytekinet/following{/other_user}",
    "gists_url": "https://api.github.com/users/aytekinet/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/aytekinet/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/aytekinet/subscriptions",
    "organizations_url": "https://api.github.com/users/aytekinet/orgs",
    "repos_url": "https://api.github.com/users/aytekinet/repos",
    "events_url": "https://api.github.com/users/aytekinet/events{/privacy}",
    "received_events_url": "https://api.github.com/users/aytekinet/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "serapo",
    "id": 77828715,
    "node_id": "MDQ6VXNlcjc3ODI4NzE1",
    "avatar_url": "https://avatars.githubusercontent.com/u/77828715?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/serapo",
    "html_url": "https://github.com/serapo",
    "followers_url": "https://api.github.com/users/serapo/followers",
    "following_url": "https://api.github.com/users/serapo/following{/other_user}",
    "gists_url": "https://api.github.com/users/serapo/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/serapo/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/serapo/subscriptions",
    "organizations_url": "https://api.github.com/users/serapo/orgs",
    "repos_url": "https://api.github.com/users/serapo/repos",
    "events_url": "https://api.github.com/users/serapo/events{/privacy}",
    "received_events_url": "https://api.github.com/users/serapo/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "edgardoa91",
    "id": 82736957,
    "node_id": "MDQ6VXNlcjgyNzM2OTU3",
    "avatar_url": "https://avatars.githubusercontent.com/u/82736957?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/edgardoa91",
    "html_url": "https://github.com/edgardoa91",
    "followers_url": "https://api.github.com/users/edgardoa91/followers",
    "following_url": "https://api.github.com/users/edgardoa91/following{/other_user}",
    "gists_url": "https://api.github.com/users/edgardoa91/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/edgardoa91/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/edgardoa91/subscriptions",
    "organizations_url": "https://api.github.com/users/edgardoa91/orgs",
    "repos_url": "https://api.github.com/users/edgardoa91/repos",
    "events_url": "https://api.github.com/users/edgardoa91/events{/privacy}",
    "received_events_url": "https://api.github.com/users/edgardoa91/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "cakalmev",
    "id": 83378215,
    "node_id": "MDQ6VXNlcjgzMzc4MjE1",
    "avatar_url": "https://avatars.githubusercontent.com/u/83378215?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/cakalmev",
    "html_url": "https://github.com/cakalmev",
    "followers_url": "https://api.github.com/users/cakalmev/followers",
    "following_url": "https://api.github.com/users/cakalmev/following{/other_user}",
    "gists_url": "https://api.github.com/users/cakalmev/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/cakalmev/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/cakalmev/subscriptions",
    "organizations_url": "https://api.github.com/users/cakalmev/orgs",
    "repos_url": "https://api.github.com/users/cakalmev/repos",
    "events_url": "https://api.github.com/users/cakalmev/events{/privacy}",
    "received_events_url": "https://api.github.com/users/cakalmev/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "fantasy1114",
    "id": 83737097,
    "node_id": "MDQ6VXNlcjgzNzM3MDk3",
    "avatar_url": "https://avatars.githubusercontent.com/u/83737097?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/fantasy1114",
    "html_url": "https://github.com/fantasy1114",
    "followers_url": "https://api.github.com/users/fantasy1114/followers",
    "following_url": "https://api.github.com/users/fantasy1114/following{/other_user}",
    "gists_url": "https://api.github.com/users/fantasy1114/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/fantasy1114/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/fantasy1114/subscriptions",
    "organizations_url": "https://api.github.com/users/fantasy1114/orgs",
    "repos_url": "https://api.github.com/users/fantasy1114/repos",
    "events_url": "https://api.github.com/users/fantasy1114/events{/privacy}",
    "received_events_url": "https://api.github.com/users/fantasy1114/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "gizem28",
    "id": 85316264,
    "node_id": "MDQ6VXNlcjg1MzE2MjY0",
    "avatar_url": "https://avatars.githubusercontent.com/u/85316264?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/gizem28",
    "html_url": "https://github.com/gizem28",
    "followers_url": "https://api.github.com/users/gizem28/followers",
    "following_url": "https://api.github.com/users/gizem28/following{/other_user}",
    "gists_url": "https://api.github.com/users/gizem28/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/gizem28/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/gizem28/subscriptions",
    "organizations_url": "https://api.github.com/users/gizem28/orgs",
    "repos_url": "https://api.github.com/users/gizem28/repos",
    "events_url": "https://api.github.com/users/gizem28/events{/privacy}",
    "received_events_url": "https://api.github.com/users/gizem28/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "cevahir72",
    "id": 87367047,
    "node_id": "MDQ6VXNlcjg3MzY3MDQ3",
    "avatar_url": "https://avatars.githubusercontent.com/u/87367047?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/cevahir72",
    "html_url": "https://github.com/cevahir72",
    "followers_url": "https://api.github.com/users/cevahir72/followers",
    "following_url": "https://api.github.com/users/cevahir72/following{/other_user}",
    "gists_url": "https://api.github.com/users/cevahir72/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/cevahir72/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/cevahir72/subscriptions",
    "organizations_url": "https://api.github.com/users/cevahir72/orgs",
    "repos_url": "https://api.github.com/users/cevahir72/repos",
    "events_url": "https://api.github.com/users/cevahir72/events{/privacy}",
    "received_events_url": "https://api.github.com/users/cevahir72/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "fuatsevinc",
    "id": 89463157,
    "node_id": "MDQ6VXNlcjg5NDYzMTU3",
    "avatar_url": "https://avatars.githubusercontent.com/u/89463157?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/fuatsevinc",
    "html_url": "https://github.com/fuatsevinc",
    "followers_url": "https://api.github.com/users/fuatsevinc/followers",
    "following_url": "https://api.github.com/users/fuatsevinc/following{/other_user}",
    "gists_url": "https://api.github.com/users/fuatsevinc/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/fuatsevinc/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/fuatsevinc/subscriptions",
    "organizations_url": "https://api.github.com/users/fuatsevinc/orgs",
    "repos_url": "https://api.github.com/users/fuatsevinc/repos",
    "events_url": "https://api.github.com/users/fuatsevinc/events{/privacy}",
    "received_events_url": "https://api.github.com/users/fuatsevinc/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "firatolcum",
    "id": 89740557,
    "node_id": "MDQ6VXNlcjg5NzQwNTU3",
    "avatar_url": "https://avatars.githubusercontent.com/u/89740557?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/firatolcum",
    "html_url": "https://github.com/firatolcum",
    "followers_url": "https://api.github.com/users/firatolcum/followers",
    "following_url": "https://api.github.com/users/firatolcum/following{/other_user}",
    "gists_url": "https://api.github.com/users/firatolcum/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/firatolcum/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/firatolcum/subscriptions",
    "organizations_url": "https://api.github.com/users/firatolcum/orgs",
    "repos_url": "https://api.github.com/users/firatolcum/repos",
    "events_url": "https://api.github.com/users/firatolcum/events{/privacy}",
    "received_events_url": "https://api.github.com/users/firatolcum/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "abetr",
    "id": 91292963,
    "node_id": "MDQ6VXNlcjkxMjkyOTYz",
    "avatar_url": "https://avatars.githubusercontent.com/u/91292963?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/abetr",
    "html_url": "https://github.com/abetr",
    "followers_url": "https://api.github.com/users/abetr/followers",
    "following_url": "https://api.github.com/users/abetr/following{/other_user}",
    "gists_url": "https://api.github.com/users/abetr/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/abetr/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/abetr/subscriptions",
    "organizations_url": "https://api.github.com/users/abetr/orgs",
    "repos_url": "https://api.github.com/users/abetr/repos",
    "events_url": "https://api.github.com/users/abetr/events{/privacy}",
    "received_events_url": "https://api.github.com/users/abetr/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "halilibrahimcelik",
    "id": 92088301,
    "node_id": "U_kgDOBX0n7Q",
    "avatar_url": "https://avatars.githubusercontent.com/u/92088301?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/halilibrahimcelik",
    "html_url": "https://github.com/halilibrahimcelik",
    "followers_url": "https://api.github.com/users/halilibrahimcelik/followers",
    "following_url": "https://api.github.com/users/halilibrahimcelik/following{/other_user}",
    "gists_url": "https://api.github.com/users/halilibrahimcelik/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/halilibrahimcelik/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/halilibrahimcelik/subscriptions",
    "organizations_url": "https://api.github.com/users/halilibrahimcelik/orgs",
    "repos_url": "https://api.github.com/users/halilibrahimcelik/repos",
    "events_url": "https://api.github.com/users/halilibrahimcelik/events{/privacy}",
    "received_events_url": "https://api.github.com/users/halilibrahimcelik/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "Brskrkmz",
    "id": 92840984,
    "node_id": "U_kgDOBYikGA",
    "avatar_url": "https://avatars.githubusercontent.com/u/92840984?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Brskrkmz",
    "html_url": "https://github.com/Brskrkmz",
    "followers_url": "https://api.github.com/users/Brskrkmz/followers",
    "following_url": "https://api.github.com/users/Brskrkmz/following{/other_user}",
    "gists_url": "https://api.github.com/users/Brskrkmz/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Brskrkmz/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Brskrkmz/subscriptions",
    "organizations_url": "https://api.github.com/users/Brskrkmz/orgs",
    "repos_url": "https://api.github.com/users/Brskrkmz/repos",
    "events_url": "https://api.github.com/users/Brskrkmz/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Brskrkmz/received_events",
    "type": "User",
    "site_admin": false
  }
]


// followers.forEach((f)=>{
//   console.log(f.avatar_url);
  
// })

// const container =document.querySelector(".container")
// container.style.display = 'flex'
// container.style.flexWrap = 'wrap'
// container.style.gap = '20px'

// container.style.justifyContent = 'space-around'
// followers.forEach((f)=>{
//   const img = document.createElement("img")
//   img.src = f.avatar_url;
//   img.style.width = '300px';
//   img.style.height = '300px';
//   img.style.borderRadius = '16px';
//   container.appendChild(img)
// }

// )

