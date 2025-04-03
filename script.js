let maleNames = [
  "Muhammad", "Ali", "Omar", "Tariq", "Hassan", "Farhan", "Arif", "Rahim", "Zayed", "Imran",
  "Ibrahim", "Ahmed", "Khalid", "Saif", "Yusuf", "Ismail", "Amin", "Aziz", "Samir", "Hamid",
  "Bilal", "Nadir", "Zubair", "Rafiq", "Saleem", "Faisal", "Adeel", "Kamran", "Waleed", "Faheem",
  "Shahid", "Abid", "Asad", "Jawad", "Nabeel", "Adil", "Shafi", "Harun", "Usman", "Jameel",
  "Shiraz", "Salman", "Faruq", "Naveed", "Habib", "Munir", "Bashir", "Sami", "Anwar", "Kamal",
  "Zahir", "Qasim", "Sultan", "Rashid", "Imtiaz", "Waqar", "Afzal", "Abbas", "Mansoor", "Tahir",
  "Sajid", "Javed", "Shahbaz", "Younus", "Hussain", "Ehsan", "Mazhar", "Saqib", "Nizam", "Ahsan",
  "Sadiq", "Ilyas", "Zakir", "Akram", "Latif", "Mirza", "Parvez", "Sohail", "Rizwan", "Tanveer",
  "Ansar", "Rehan", "Ashraf", "Khalil", "Saad", "Zeeshan", "Khurram", "Raza", "Safwan", "Tauqir",
  "Hashim", "Arsalan", "Shayan", "Aqib", "Basit", "Wajid", "Yasir", "Adnan", "Fahad", "Hamza", "Salman", "Yasir", "Adnan", "Fahad", "Hamza", "Zahid", "Ishaq", "Mustafa", "Nabil", "Sameer",
  "Tamer", "Wasim", "Junaid", "Basir", "Farid", "Hakeem", "Naeem", "Rameez", "Sharif", "Talib",
  "Ammar", "Azhar", "Baqar", "Ejaz", "Faiz", "Haider", "Imran", "Jahangir", "Kamil", "Luqman",
  "Nawaz", "Owais", "Qadir", "Sulaiman", "Zaman", "Zubair", "Waheed", "Sabir", "Zain", "Riyas",
  "Aftab", "Asim", "Babar", "Danish", "Ebrahim", "Fahim", "Hamid", "Haroon", "Javed", "Kabir",
  "Kamran", "Khalil", "Mansoor", "Mohsin", "Naseem", "Qasim", "Saad", "Tarique", 
];
// Female names (first 500)
let femaleNames = [
  "Amina", "Fatima", "Layla", "Anika", "Zara", "Mina", "Sana", "Nadia", "Yasmin", "Rumi",
  "Aisha", "Zainab", "Hafsa", "Maryam", "Sumayya", "Rahima", "Saima", "Tazeen", "Sabina", "Alina",
  "Afia", "Tania", "Nazneen", "Fareeha", "Lubna", "Bushra", "Fiza", "Adeeba", "Jameela", "Khadija",
  "Mahira", "Shaista", "Rabia", "Sameena", "Shirin", "Saira", "Anum", "Fauzia", "Malika", "Tahira",
  "Sabeen", "Rashida", "Sanaullah", "Hina", "Nazrin", "Mehreen", "Mariam", "Asma", "Ruqayyah", "Shagufta",
  "Nargis", "Humaira", "Inaya", "Zaina", "Aysha", "Qamar", "Shifa", "Tuhfa", "Salwa", "Rihana",
  "Arifa", "Fariha", "Amber", "Nadia", "Farah", "Hiba", "Aqeela", "Sehrish", "Mumtaz", "Jehan",
  "Samina", "Shabnam", "Rubina", "Aaliya", "Nargis", "Farzana", "Huma", "Sehrish", "Mahrukh", "Tazmin",
  "Fatma", "Alisha", "Nazish", "Humaira", "Lubna", "Marwa", "Sadiya", "Shirin", "Tehmina", "Wajeeha",
  "Afshan", "Sobia", "Zaheera", "Asifa", "Nazia", "Sakina", "Anum", "Bushra", "Javeria", "Sabahat",
  "Mahjabeen", "Shazia", "Tahmina", "Uzma", "Amal", "Inaya", "Zara", "Sabeeka", "Shaheen", "Shaista",
  "Tayyaba", "Tabinda", "Yumna", "Rafeeqa", "Samrah", "Safoora", "Zareen", "Adiba", "Aqeela", "Shaima",
  "Rihana", "Kiran", "Sadia", "Areej", "Farah", "Sidra", "Mubashira", "Saniya", "Talat", "Marium",
  // Extend further until 500 names are completed

];
// Last names (first 500)
const lastNames = [
  "Khan", "Hussain", "Ahmed", "Farooq", "Chowdhury", "Islam", "Shaikh", "Siddiqui", "Rehman", "Mahmud",
  "Iqbal", "Aziz", "Usmani", "Shams", "Munir", "Zaidi", "Hashmi", "Mir", "Tariq", "Bukhari",
  "Dar", "Kashif", "Safi", "Sikandar", "Ansari", "Wahid", "Alvi", "Rizvi", "Malik", "Latif",
  "Mehmood", "Naseer", "Parvez", "Arman", "Feroz", "Baig", "Ali", "Salim", "Kabir", "Qureshi",
  "Shah", "Younus", "Zaman", "Habib", "Hamid", "Sarwar", "Anwar", "Hussam", "Safdar", "Tahir",
  "Rafiq", "Saeed", "Naseem", "Nawaz", "Zafar", "Shahid", "Mansoor", "Ashraf", "Rafi", "Nadeem",
  // Expand similarly until 500 names are complete
];
const prophetsNames = [
  "Adam", "Idris", "Nuh", "Hud", "Salih",
  "Ibrahim", "Lut", "Ismail", "Ishaq", "Yaqub",
  "Yusuf", "Shuayb", "Musa", "Harun", "Dhul-Kifl",
  "Dawud", "Sulayman", "Ilyas", "Alyasa", "Yunus",
  "Zakariya", "Yahya", "Isa", "Muhammad"
];
const sahabaNames = [
  "Abu Bakr As-Siddiq", "Umar Ibn Al-Khattab", "Uthman Ibn Affan", "Ali Ibn Abi Talib",
  "Hamza Ibn Abdul-Muttalib", "Bilal Ibn Rabah", "Abdullah Ibn Abbas", "Abdullah Ibn Umar",
  "Zaid Ibn Haritha", "Muadh Ibn Jabal", "Saad Ibn Abi Waqqas", "Talha Ibn Ubaydullah",
  "Abu Ubaidah Ibn Al-Jarrah", "Khalid Ibn Al-Walid", "Salman Al-Farsi", "Abu Hurairah",
  "Anas Ibn Malik", "Miqdad Ibn Aswad", "Hudhayfah Ibn Al-Yaman", "Abu Darda",
  "Jafar Ibn Abi Talib", "Ammar Ibn Yasir", "Suhaib Ar-Rumi", "Abdullah Ibn Mas'ud",
  "Abdullah Ibn Rawaha", "Ubayy Ibn Ka'b", "Abdullah Ibn Zubair", "Abu Musa Al-Ashari",
  "Sa'id Ibn Zayd", "Zubair Ibn Al-Awwam"
];
const femaleSahabaNames = [
  "Khadijah bint Khuwaylid", "Aisha bint Abu Bakr", "Fatimah bint Muhammad", "Umm Salamah",
  "Hafsa bint Umar", "Zaynab bint Jahsh", "Umm Habibah", "Asma bint Abu Bakr", "Sumayyah bint Khayyat", "Ruqayyah bint Muhammad",
  "Umm Kulthum bint Muhammad", "Maria al-Qibtiyya", "Umm Ayman", "Safiyyah bint Abdul-Muttalib", "Umm Haram",
  "Maymunah bint Al-Harith", "Sawdah bint Zam'ah", "Barakah (Umm Ayman)", "Lubaba bint Al-Harith", "Arwa bint Kurayz"
];


function option(elem) {
  const arrow= document.querySelector(".arrow")
  if (elem.nextElementSibling.style.display=="block") {
    elem.nextElementSibling.style.display="none"
    arrow.style.transform= "rotate(0deg)"
  }else{
    elem.nextElementSibling.style.display="block"
    arrow.style.transform= "rotate(180deg)"
  }
}
let maleResult=""
let femaleResult= ""
let lastResult=""
let bothResult= ""
const output= document.querySelector(".right-output")
function generate() {
  const maleCheck= document.querySelector("#male")
  const femaleCheck= document.querySelector("#female")
  const nameNumber= document.querySelector(".name-number")
  
  output.innerHTML = "";
  for (let i = 0; i < nameNumber.value; i++) {
    if (maleCheck.checked) {
      let maleIndex= Math.floor(Math.random()*maleNames.length)
      let lastIndex= Math.floor(Math.random()*lastNames.length)
      maleResult= maleNames[maleIndex]
      lastResult= lastNames[lastIndex]
      let result= document.createElement("h2")
      result.innerHTML=`${maleResult} ${lastResult}`
      output.appendChild(result)
    }else if(femaleCheck.checked){
      let femaleIndex= Math.floor(Math.random()*femaleNames.length)
      let lastIndex= Math.floor(Math.random()*lastNames.length)
      femaleResult= femaleNames[femaleIndex]
      lastResult= lastNames[lastIndex]
      let result= document.createElement("h2")
      result.innerHTML=`${femaleResult} ${lastResult}`
      output.appendChild(result)
    }else{
      let bothNames=maleNames.concat(femaleNames)
      let bothIndex= Math.floor(Math.random()*(bothNames.length))
      let lastIndex= Math.floor(Math.random()*lastNames.length)
      bothResult= bothNames[bothIndex]
      lastResult= lastNames[lastIndex]
      let result= document.createElement("h2")
      result.innerHTML=`${bothResult} ${lastResult}`
      output.appendChild(result)
    }
  }
}

const prophets= document.querySelector(".propets")
const angels= document.querySelector(".angels")
const sahabas= document.querySelector(".sahabas")

prophets.addEventListener("click", function () {
  output.innerHTML = "";
  prophetsNames.map((names)=>{
    let result= document.createElement("h2")
      result.innerHTML=(names)
    output.appendChild(result)
  })
})
sahabas.addEventListener("click", function () {
  output.innerHTML = "";
  sahabaNames.map((names)=>{
    let result= document.createElement("h2")
      result.innerHTML=(names)
    output.appendChild(result)
  })
})