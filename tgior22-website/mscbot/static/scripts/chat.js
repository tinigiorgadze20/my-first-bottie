//ვისთვისაც ფუნქიას გამოვიძახებთ, მაგ რიგის ელემენტებს უმოწმებს სიმაღლეეს, თუ მაქსიმუმია გაუნულოს და თუ ნულია გაუმაქსოს
function collapser() {
  this.classList.toggle("active"); //toggle ფუნქცია ერთ eventListenerს აბამს ორ აქტივობას/ფუნქციას.
  // ამ შემთხვევაში სიმაღლეების ცვლილებაზეა პასუხისმგებელი.
  var cont = this.nextElementSibling;
  if (cont.style.maxHeight) {
    cont.style.maxHeight = null;
  } else {
    cont.style.maxHeight = cont.scrollHeight + "px";
  }
}

var collap = document.getElementsByClassName("collapsible");
//collapsible კლასიან ელემენტს დაკლიკვაზე უძახებს collapserს
for (let i = 0; i < collap.length; i++) {
  collap[i].addEventListener("click", collapser);
}

function currentTime() {
  let today = new Date();
  hours = today.getHours();
  minutes = today.getMinutes();

  if (hours < 10) {
    hours = "0" + hours; //09:00 რომ გამოჩნდეს და არა 9:00
  }

  if (minutes < 10) {
    // 09:05 რომ გამოჩნდეს და არა 09:5
    minutes = "0" + minutes;
  }

  let time = hours + ":" + minutes;
  return time;
}

function firstMessage() {
  //გვინდა რომ ჩატს რომ გავხსნით ლამაზად ამოხტეს პირველი მესიჯი და თან დროც გამოჩნდეს
  let botFirstMessage = document.getElementById("botStarterMessage").innerHTML;
  let ourTime = currentTime();
  $("#timestamp").append(ourTime); //ვუთითებთ რომელ ელემენტს გვინდა რომ დრო მივაბათ
  document.getElementById("usrInput").scrollIntoView(false); //იდეა ის არის, რომ იუსერის მიერ გაგზავნილი მესიჯები ისქროლებოდეს
}
firstMessage();

function getHardResponse(userText) {
  let botResponse = getBotResponse(userText);
  let botHtml = '<p class="botText"><span>' + botResponse + "</span></p>";
  $("#chatBox").append(botHtml);

  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function getResponse() {
  let userText = $("#inputTxt").val();

  let userHtml = '<p class="userText"><span>' + userText + "</span></p>";

  $("#inputTxt").val(""); //ვა update ებთ, რათა user მა ახალი ტექსტი შეიყვანოს
  $("#chatBox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);
  // დაჭერიდან შესრულებამდე დრო
  setTimeout(() => {
    getHardResponse(userText);
  }, 1000);
}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
  let userHtml = '<p class="userText"><span>' + sampleText + "</span></p>";

  $("#inputTxt").val("");
  $("#chatBox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);
  // დაჭერიდან შესრულებამდე დრო
  setTimeout(() => {
    getHardResponse(sampleText);
  }, 1000);
}

function clickSendButton() {
  getResponse();
}

function sendHeartButton() {
  buttonSendText("<3");
}

//აქ enter ზე send ის მიბმის მცდელობა იყო
// $("#inputTxt") .keypress(function (e) {
//   if (e.which == 13) {
//     getResponse();
//   }
// });
