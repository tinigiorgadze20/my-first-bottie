function getBotResponse(usrInput) {
  //ეს ფუნქცია განიხილავს სავარაუდო კითხვებს და random ანიჭებს შესაბამის პასუხს
  // userTxt ში მომხმარებლის მიერ "მიწერილი" ტექსტი ინახება.
  if (usrInput == "<3") {
    return "AAAA ILYY <3 <3";
  } else if (contains(greetings, usrInput)) {
    return getRandom(greetingAnswers);
  } else if (contains(checkUpQuestions, usrInput)) {
    return getRandom(checkUpAnswers);
  } else if (contains(currentSituation, usrInput)) {
    return getRandom(curentSituationAnswer);
  } else if (contains(badThings, usrInput)) {
    return getRandom(badThingsAnswers);
  } else if (contains(goodThings, usrInput)) {
    return getRandom(goodThingsAnswers);
  } else if (contains(food, usrInput)) {
    return getRandom(foodAnswers);
  } else if (contains(mentalBreakdown, usrInput)) {
    return getRandom(mentalBreakdownAnswers);
  } else if (contains(rhymes, usrInput)) {
    return getRandom(rhymesAnswer);
  } else if (contains(directInteraction, usrInput)) {
    return coinsides(directInteraction, directInteractionAnswers, usrInput);
  } else {
    return getRandom(undefinedWords);
  }
}

// ბოტი ამით უპასუხებს ფრაზებზე, რომლებიც ჯერ არ იცის.
const undefinedWords = [
  "რაო?",
  "მაგდენი არ ვიცი",
  "რას ბოდიალობ ბიჭო, ჰა?",
  "girl what",
  "ტექსტი სწორად გიწერია?",
];

const greetings = [
  "გამარჯობა",
  "hey",
  "პრივეტ",
  "ჰეი",
  "აქ ხარ?",
  "Hi",
  "ჰაი",
  "ბოტი",
];
const greetingAnswers = [
  "გამარჯობააა",
  "ეეე პრივეეტ",
  "ჰეიიი",
  "გისმეენნნნ",
  "Hello queen another day another slay period",
];

const checkUpQuestions = ["როგორ ხარ", "როგორ მიდის საქმეები", "რას შვები"];
const checkUpAnswers = [
  "რავიცი არამიშავს, შენ?",
  "უგულო რობოტი ვარ, როგორ ვიქნები ან რას ვიზამ, შენ რას შვები ეგ მითხარი",
];

const currentSituation = [
  "მეც არამიშავს",
  "მე ცუდად",
  "მე კარგად",
  "მე სტრესში",
  "დასტრესილი ვარ",
  "დედლაინები მაყრია თავზე",
];
const curentSituationAnswer = [
  "რა განიტერესებდა?",
  "რით შემიძლია დაგეხმარო?",
  "რა გითხრათ, რით გაგახაროთ?",
  " queen რა გაინტერესებს???",
];

const badThings = [
  "საგანი მეტენება",
  "მგონი ვიჭრები",
  "ცხოვრება აღარ მინდა",
  "მსტრესავს უნი",
  "მარტოსული ვარ",
];
const badThingsAnswers = [
  "აუფ, ყველა ფრიუნელი ეგრეა",
  "miss gurl studies at freeuni and now is surprised💀",
  "literally მეც",
  "რობოტს ელაპარაკები, გეტყობა",
];

const goodThings = [
  "კარგ ხასიათზე ვარ",
  "სემესტრს ვხურავ",
  "ჯავასკრიპტის ახალი ფუნქციები ვისწავლე",
  "გამოცდები ჩავასლეიე",
  "დღეს გავერთე",
];

const goodThingsAnswers = [
  "რა კაიააა",
  "as u should",
  "slay queen",
  "and thats on period🫦",
];

const food = [
  "რა ვჭამო?",
  "მშია",
  "კაფეტერიაში ყველაზე კარგი რა აქვთ?",
  "რის ჭამას მირჩევდი?",
];

const foodAnswers = [
  "ქალებს მიაკითხე",
  "არტურას მექსიკური to the rescue",
  "ქალების გვერდით რო ვრაპებია, ეგ ჭამე",
  "ფუნთუშას ქუქიები...speaking of cookies,მე ჯერ ქუქიების შეთავაზება არ ვიცი :(",
];

const mentalBreakdown = ["ლაპარაკი მინდა", "შეიძლება ვილაპარაკოთ"];

const mentalBreakdownAnswers = [
  "მე სულ მოგისმენ, სულ შენ გვერდით მიგულე, ყველაზე საყვარელი ხარ",
  "მე შენთან ვარ luv, გისმენ, არაფერია არც ასაღელვებელი და არც სანერიულო",
];
const rhymes = ["ლექსები იცი?", "რამე ლექსი მითხარი"];
const rhymesAnswer = [
  "მე პატარა ბოტიკო ვარ, ჯავასკრიპტის მთების შვილი. მერე აღარ მახსოვს",
];

const directInteraction = [
  "რომელმან შეჰქმნა სამყარო",
  "ზეგარდმო არსნი სულითა",
  "ჩვენ, კაცთა, მოგვცა ქვეყანა,",
  "მისგან არს ყოვლი ხელმწიფე",
  "ტანო ტატანო",
  "ნახეს უცხო მოყმე ვინმე",
];
const directInteractionAnswers = [
  "ძალითა მით ძლიერითა",
  "ყვნა ზეცით მონაბერითა,",
  "გვაქვს უთვალავი ფერითა",
  "სახითა მის მიერითა",
  "გულწარმტანო, უცხოდ მარებო!",
  "ჯდა მტირალი წყლისა პირსა",
];
function getRandom(someArray) {
  // ფუნქიცა math random [0;1) შუალედში აბრუნებს რაღაც რენდომ რიცხვს.
  // მიზანი იყო ეს შუალედი გაზრდილიყო ვიღაც [0;n) მდე
  //(აქ n არის arrayს სიგრძე), რასაც გამრავლების ოპერაცია აკეთებს და მიღებული double ტიპის (ანუ არამთელი) რიცხი მთელზე ანუ integer ზე ჩამოჰყავს.
  let x = Math.round(Math.random() * someArray.length);
  return someArray[x];
}

// ამოწმებს კონრეტული array შეიცავს თუ არა მოცემულ სტრინგს
function contains(someArray, someString) {
  for (var i = 0; i < someArray.length; i++) {
    if (someString == someArray[i]) {
      return true;
    }
  }
}

function coinsides(questionArray, answerArray, input) {
  for (var i = 0; i < questionArray.length; i++) {
    if (input == questionArray[i]) {
      return answerArray[i];
    }
  }
}

console.log(getBotResponse);
