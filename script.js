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
  "Kamran", "Khalil", "Mansoor", "Mohsin", "Naseem", "Qasim", "Saad", "Tarique","Abdul", "Abdullah", "Ahsan", "Alauddin", "Ali", "Aminul", "Anisur", "Ashfaq", "Ashraful", "Azizur",
  "Badal", "Bashir", "Belal", "Ehsanul", "Ekramul", "Emran", "Faisal", "Faridul", "Fazlul", "Firoz",
  "Gias", "Golam", "Habibur", "Hafizur", "Haji", "Hamidul", "Harun", "Hasan", "Helal", "Hossain",
  "Iftekhar", "Ikramul", "Imran", "Ishtiaq", "Ismail", "Jahirul", "Jakir", "Jamal", "Jashim", "Javed",
  "Kabir", "Kamal", "Karim", "Kawsar", "Khaled", "Khalid", "Latifur", "Mahbub", "Mahfuz", "Mahmudul",
  "Mainul", "Mamun", "Masud", "Mazharul", "Mehedi", "Miraz", "Mizanur", "Mohammad", "Mohidul", "Mokhlesur",
  "Monir", "Mostafizur", "Mujibur", "Muntasir", "Murad", "Mustafizur", "Nafiz", "Nahid", "Najmul", "Nasir",
  "Nazmul", "Nizam", "Nur", "Nurul", "Obaidul", "Parvez", "Rafiqul", "Raihan", "Rakibul", "Rashedul",
  "Rayhan", "Rezaul", "Rezwan", "Riaz", "Ridwan", "Ripon", "Robiul", "Rokonuzzaman", "Sabbir", "Saddam",
  "Saiful", "Sajjad", "Salman", "Samiul", "Sarwar", "Sayedur", "Shahadat", "Shahriar", "Shariful", "Shihab",
  "Shohag", "Sohail", "Sulaiman", "Suman", "Syed", "Tanzim", "Tariqul", "Tauhidul", "Tawhid", "Tayebur",
  "Toufique", "Umar", "Wahidul", "Wasim", "Yasin", "Yousuf", "Zahid", "Zakir", "Zayad", "Ziaur", "Zubair",  "Abbas", "Abdul", "Abdullah", "Abedin", "Abir", "Abu", "Adil", "Afif", "Afzal", "Ahmad",
  "Ahsan", "Akib", "Akram", "Alam", "Alif", "Alim", "Aman", "Amin", "Amir", "Anas",
  "Anis", "Anwar", "Arafat", "Arham", "Arif", "Arman", "Arshad", "Asad", "Ashfaq", "Asif",
  "Aslam", "Atiq", "Ayan", "Azad", "Azhar", "Aziz", "Badi", "Bahar", "Bashir", "Biplob",
  "Bilal", "Borhan", "Dawood", "Delwar", "Ebrahim", "Ehsan", "Emon", "Eshan", "Fahad", "Fahim",
  "Faisal", "Faraz", "Farhad", "Farhan", "Faruq", "Fayaz", "Fuad", "Gazi", "Habib", "Hadi",
  "Hafiz", "Haider", "Hakim", "Hamid", "Hamza", "Harun", "Hasan", "Hashim", "Hayat", "Hedayat",
  "Helal", "Hossain", "Huzaifa", "Ibrahim", "Idris", "Ifaz", "Iftikhar", "Ihsan", "Ikram", "Ilyas",
  "Imad", "Imran", "Inam", "Iqbal", "Isa", "Ishtiaq", "Iskander", "Ismail", "Izaan", "Jabir",
  "Jahid", "Jalal", "Jamil", "Jasim", "Javed", "Jubair", "Junayed", "Kabir", "Kamal", "Kashif",
  "Kazi", "Khaled", "Khalid", "Khayyam", "Labib", "Lami", "Liton", "Luqman", "Mahir", "Mahmud",
  "Mahin", "Maksud", "Mamun", "Mansur", "Maruf", "Masud", "Matin", "Mizan", "Mokhles", "Monir",
  "Morshed", "Mostafa", "Muaz", "Mubin", "Mueen", "Mujahid", "Mujib", "Mukhles", "Murad", "Musab",
  "Mushfiq", "Mustafiz", "Nabil", "Nadeem", "Nafis", "Naif", "Naim", "Nashid", "Nawaz", "Nazim",
  "Nazmul", "Nehal", "Nesar", "Niaz", "Nizam", "Noor", "Noman", "Obaid", "Omar", "Parvez",
  "Qadir", "Qais", "Qamar", "Qasim", "Rafi", "Rafiq", "Ragib", "Rahim", "Rahman", "Raif",
  "Rais", "Rajib", "Rakib", "Rashed", "Rayhan", "Redwan", "Rehan", "Rezwan", "Ridwan", "Riyad",
  "Rizwan", "Ruhul", "Saad", "Sabbir", "Sadiq", "Safi", "Sahil", "Sajid", "Sajjad", "Saleh",
  "Salim", "Salman", "Sami", "Samir", "Sarwar", "Saquib", "Shahed", "Shaif", "Shahadat", "Shahbaz",
  "Shahriar", "Sharif", "Shibli", "Shoaib", "Shofiq", "Shuayb", "Sohail", "Sultan", "Syed", "Tahmid",
  "Tariq", "Tauhid", "Tawfiq", "Tazim", "Touhid", "Ubaid", "Umair", "Umar", "Usama", "Usman",
  "Wahid", "Walid", "Wasim", "Yamin", "Yasir", "Yunus", "Yusha", "Zahid", "Zaman", "Zayed",
  "Zia", "Ziyad"
];
console.log(maleNames.length);
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
  "Rihana", "Kiran", "Sadia", "Areej", "Farah", "Sidra", "Mubashira", "Saniya", "Talat", "Marium","Afsana", "Afia", "Aisha", "Alifa", "Alima", "Amira", "Anika", "Anisa", "Aqila", "Arifa",
  "Asma", "Atiya", "Ayesha", "Aziza", "Barira", "Basira", "Benazir", "Bushra", "Dilruba", "Duratun",
  "Eshita", "Fahmida", "Farhana", "Farida", "Fatema", "Ferdousi", "Firoza", "Fiza", "Ghazala", "Habiba",
  "Hafiza", "Hajera", "Halima", "Hamida", "Hani", "Hasina", "Hawa", "Hena", "Hidaya", "Husna",
  "Ifat", "Iffat", "Ikrima", "Imrana", "Inaya", "Iqra", "Ismat", "Jannat", "Jasmin", "Jasmina",
  "Juwairiya", "Khadija", "Khatun", "Labiba", "Lamiya", "Liyana", "Lubaba", "Lubna", "Mahbuba", "Mahjabeen",
  "Maimuna", "Majida", "Malika", "Mariam", "Marufa", "Marzia", "Masuma", "Mim", "Minara", "Mishkat",
  "Mithila", "Mou", "Mumtahina", "Munira", "Mursida", "Mustari", "Naima", "Najma", "Nasima", "Nasreen",
  "Nazia", "Neha", "Nigar", "Nishat", "Nusrat", "Nuzhat", "Omera", "Parveen", "Popy", "Qamila",
  "Rabeya", "Rafia", "Rahima", "Raima", "Raiya", "Ramisa", "Rashida", "Rehana", "Rida", "Rifat",
  "Rizwana", "Roksana", "Romana", "Ruba", "Ruhina", "Rumana", "Sabina", "Sabrina", "Sadiya", "Saima",
  "Salma", "Sameera", "Samia", "Sanaya", "Sania", "Sanjida", "Saphia", "Sarah", "Sazia", "Sehreen",
  "Shaheda", "Sharifa", "Sharmin", "Shazia", "Shefali", "Shirin", "Shoma", "Shumaila", "Sonia", "Soraya",
  "Subah", "Sumaiya", "Sundus", "Suraiya", "Tahira", "Tania", "Tanzila", "Tasfia", "Taslima", "Tasnima",
  "Tuhfa", "Umme", "Urmi", "Uzma", "Wafiya", "Warda", "Yasmin", "Zahida", "Zakia", "Zara", 
  "Zeba", "Zinat", "Zohra", "Aafia", "Aalia", "Aaminah", "Aaniya", "Aaqilah", "Adeeba", "Adiva", "Afia", "Afifa", "Afnan",
  "Ahana", "Aida", "Aiman", "Aisha", "Aiza", "Akifa", "Alia", "Aliya", "Amana", "Amaya",
  "Ambreen", "Amena", "Amina", "Amirah", "Anaisha", "Anam", "Anaya", "Anisa", "Anjum", "Anmol",
  "Arfa", "Ariba", "Arisha", "Arjumand", "Arwa", "Asbah", "Asfiya", "Asiya", "Asma", "Asra",
  "Atiya", "Ayesha", "Ayra", "Azka", "Azra", "Badia", "Bahar", "Bakht", "Barira", "Basma",
  "Batul", "Benazir", "Bina", "Bushra", "Dania", "Dilruba", "Durrah", "Eeman", "Eiliyah", "Elham",
  "Eliza", "Emaan", "Erum", "Eshaal", "Esita", "Faiza", "Fariha", "Faria", "Farida", "Farheen",
  "Farzana", "Fasiha", "Fatema", "Fatima", "Fauzia", "Fiza", "Furqana", "Ghazala", "Gulnaz", "Habiba",
  "Hadiya", "Hajrah", "Haleema", "Hana", "Hanifa", "Haniya", "Hareem", "Hiba", "Huda", "Humaira",
  "Husna", "Iba", "Iffat", "Imaan", "Inaya", "Iqra", "Irfa", "Isbah", "Ishrat", "Izzah",
  "Jabeen", "Jannat", "Jasira", "Jasmin", "Jaweria", "Juveria", "Kaif", "Kainat", "Kalsoom", "Kashifa",
  "Khadija", "Kiran", "Komal", "Laiba", "Lamia", "Laraib", "Layan", "Lubaba", "Lubna", "Mahira",
  "Mahjabeen", "Mahrukh", "Mahvish", "Maisha", "Maliha", "Mamoona", "Marium", "Maryam", "Masooma", "Meher",
  "Mehreen", "Mehrun", "Memona", "Mifrah", "Minahil", "Mishkat", "Misha", "Momal", "Mumtaz", "Muna",
  "Munazza", "Muneeza", "Mushfika", "Nabila", "Nadia", "Naima", "Nargis", "Nashita", "Nasira", "Nasreen",
  "Natasha", "Nazia", "Nazneen", "Neha", "Nehal", "Nida", "Nigar", "Noor", "Nooreen", "Noshin",
  "Parveen", "Parisa", "Parveen", "Qamar", "Qasira", "Qirat", "Rabiya", "Rafia", "Rafida", "Raheela",
  "Rania", "Rashida", "Rida", "Rizwana", "Roohi", "Roshni", "Rubab", "Rubi", "Rubina", "Rukhsana",
  "Ruquyyah", "Saba", "Sabeen", "Sabira", "Sadiya", "Safina", "Safiya", "Sahira", "Sajida", "Sakina",
  "Salma", "Saman", "Samia", "Samiya", "Sana", "Sania", "Saniya", "Sarah", "Sarina", "Sarwat",
  "Seema", "Shaista", "Sharmin", "Shazia", "Shehnaz", "Shifa", "Shirin", "Shiza", "Sobia", "Sonia",
  "Subah", "Suhana", "Sumaiya", "Sumbul", "Suraiya", "Tahira", "Talia", "Tanzila", "Tazeen", "Tehmina",
  "Tuba", "Ulfat", "Umaiza", "Ummarah", "Wafa", "Wajeeha", "Yasmin", "Yumna", "Zainab", "Zakia",
  "Zainab", "Zakia", "Zara", "Zareen", "Zayan", "Zeba", "Zehra", "Zohra", "Zoya", "Zubaria"
];
console.log(femaleNames.length);
// Last names (first 500)
const lastNames = [
  "Khan", "Hussain", "Ahmed", "Farooq", "Chowdhury", "Islam", "Shaikh", "Siddiqui", "Rehman", "Mahmud",
  "Iqbal", "Aziz", "Usmani", "Shams", "Munir", "Zaidi", "Hashmi", "Mir", "Tariq", "Bukhari",
  "Dar", "Kashif", "Safi", "Sikandar", "Ansari", "Wahid", "Alvi", "Rizvi", "Malik", "Latif",
  "Mehmood", "Naseer", "Parvez", "Arman", "Feroz", "Baig", "Ali", "Salim", "Kabir", "Qureshi",
  "Shah", "Younus", "Zaman", "Habib", "Hamid", "Sarwar", "Anwar", "Hussam", "Safdar", "Tahir",
  "Rafiq", "Saeed", "Naseem", "Nawaz", "Zafar", "Shahid", "Mansoor", "Ashraf", "Rafi", "Nadeem","Khan", "Hussain", "Ahmed", "Farooq", "Chowdhury", "Islam", "Shaikh", "Siddiqui", "Rehman", "Mahmud",
  "Iqbal", "Aziz", "Usmani", "Shams", "Munir", "Zaidi", "Hashmi", "Mir", "Tariq", "Bukhari",
  "Dar", "Kashif", "Safi", "Sikandar", "Ansari", "Wahid", "Alvi", "Rizvi", "Malik", "Latif",
  "Mehmood", "Naseer", "Parvez", "Arman", "Feroz", "Baig", "Ali", "Salim", "Kabir", "Qureshi",
  "Shah", "Younus", "Zaman", "Habib", "Hamid", "Sarwar", "Anwar", "Hussam", "Safdar", "Tahir",
  "Rafiq", "Saeed", "Naseem", "Nawaz", "Zafar", "Shahid", "Mansoor", "Ashraf", "Rafi", "Nadeem",
  "Kazmi", "Mustafa", "Junaid", "Faheem", "Shafiq", "Sabir", "Dawood", "Haroon", "Rasheed", "Toufiq",
  "Zaheer", "Hameed", "Tarique", "Sajjad", "Mazhar", "Suhail", "Javed", "Mumtaz", "Shabbir", "Hidayat",
  "Saqlain", "Nasir", "Masood", "Akram", "Aslam", "Ghaffar", "Arif", "Basit", "Asghar", "Hassan",
  "Mohiuddin", "Noor", "Tameem", "Zubair", "Murtaza", "Ibrahim", "Sulayman", "Sami", "Adil", "Waleed",
  "Imran", "Bashir", "Yasir", "Nazar", "Zahid", "Jalal", "Shakir", "Bilal", "Faisal", "Waqar",
  "Nabeel", "Hammad", "Abid", "Idris", "Faiz", "Qasim", "Fawad", "Shan", "Rahman", "Talal",
  "Anas", "Shakeel", "Sultan", "Tufail", "Latif", "Siddiq", "Hadi", "Hafeez", "Saeedi", "Sufi",
  "Mujib", "Waseem", "Anees", "Mustansir", "Mehboob", "Rashid", "Naqvi", "Ullah", "Mahbub", "Danish",
  "Ghani", "Kalim", "Noman", "Jalil", "Mansur", "Salman", "Haque", "Bari", "Sikder", "Faruqi",
  "Saadi", "Hussnain", "Qudrat", "Tayyab", "Sabih", "Zayan", "Umer", "Idrees", "Rahim", "Jibran",
  "Saad", "Tameez", "Hafiz", "Qayyum", "Ashhad", "Sarmad", "Fida", "Mahdi", "Hussamuddin", "Shaukat",
  "Shahzad", "Mujtaba", "Najeeb", "Tanzil", "Feroze", "Fida", "Qudsi", "Baqar", "Shakoor", "Zia",
  "Kashan", "Rayyan", "Rameez", "Samad", "Azhar", "Sabiq", "Aftab", "Tauqeer", "Adeel", "Aamir",
  "Taimur", "Nawabi", "Saqqaf", "Mubashir", "Saeeduddin", "Mehmoodur", "Naeem", "Shamim", "Shuja", "Sayeed",
  "Rauf", "Sibtain", "Asad", "Alam", "Altaf", "Hashir", "Moeed", "Mateen", "Sadiq", "Muzammil",
  "Areeb", "Arham", "Shanawaz", "Ghouse", "Sikander", "Naeemi", "Junaidi", "Hasnain", "Munawar", "Shamshad",
  "Jahangir", "Wajahat", "Nisar", "Javedan", "Arsalan", "Rasheeduddin", "Intezar", "Ghulam", "Muzaffar", "Gibran",
  "Burhan", "Sharaf", "Talib", "Barq", "Saifullah", "Hanzala", "Azmi", "Badiuzzaman", "Faqir", "Shihab",
  "Mushtaq", "Tahiruddin", "Zakir", "Awais", "Farid", "Khayyam", "Gul", "Siraj", "Makhdoom", "Ariz",
  "Mahmood", "Asghar", "Basheer", "Tameemuddin", "Arqam", "Aneesur", "Nooruddin", "Shibli", "Salamat", "Shahbaz",
  "Badar", "Fazal", "Masroor", "Tasneem", "Ubaid", "Shaheen", "Athar", "Hussnain", "Mannan", "Adnan",
  "Zaigham", "Murtaza", "Nizam", "Makhdoom", "Ahsan", "Shabbir", "Tabrez", "Tanzeel", "Zubaidi", "Gulzar",
  "Akhter", "Abidi", "Musharraf", "Akif", "Zain", "Sakhawat", "Tasawwur", "Zarrar", "Suhrawardy", "Taqi",
  "Aqil", "Azfar", "Afsar", "Shadman", "Ashraful", "Hikmat", "Saeedur", "Shajar", "Nashit", "Zarar",
  "Nizamuddin", "Javedan", "Miskeen", "Abdul", "Haq", "Shibli", "Qutb", "Tashfeen", "Nizamani", "Riyaz",
  "Shahjahan", "Sirajuddin", "Zeeshan", "Wasif", "Taimoor", "Usman", "Khairul", "Shamoon", "Muqeet", "Aasim", "Rahman", "Karim", "Uddin", "Hossain", "Chowdhury", "Ahmed", "Kabir", "Siddique", "Hasan", "Naser",
  "Mahmud", "Iqbal", "Zaman", "Haque", "Tariq", "Anwar", "Salim", "Bashir", "Faruqi", "Rafiq",
  "Moin", "Shaikh", "Nawaz", "Jalil", "Aziz", "Shafiq", "Younus", "Arif", "Imran", "Sadiq",
  "Nasir", "Zafar", "Faiz", "Taufiq", "Shahzad", "Mansoor", "Ashraf", "Rasheed", "Hameed", "Shahid",
  "Haroon", "Suhail", "Bilal", "Sultan", "Rizvi", "Latif", "Murtaza", "Riaz", "Shakeel", "Tameem",
  "Basit", "Sami", "Zubair", "Saad", "Dawood", "Kashif", "Junaid", "Wali", "Mehboob", "Shams",
  "Anees", "Irfan", "Hassan", "Mustafa", "Munir", "Javed", "Idris", "Qasim", "Waheed", "Fahim",
  "Zakir", "Tarique", "Shakil", "Badr", "Taslim", "Qayyum", "Shabbir", "Hidayat", "Samad", "Ehsan",
  "Mubeen", "Mujib", "Hafiz", "Zayan", "Sikandar", "Feroz", "Noor", "Hussam", "Saeed", "Nabeel",
  "Mohtashim", "Tameez", "Shuja", "Mateen", "Aftab", "Saqlain", "Rauf", "Azeem", "Waseem", "Hammad",
  "Anas", "Hafeez", "Fazal", "Kalim", "Jalal", "Shadman", "Muqeet", "Yunus", "Tauhid", "Mansur",
  "Sibtain", "Shujauddin", "Burhan", "Mubeen", "Ghani", "Haq", "Sharif", "Shahjahan", "Zaeem", "Ikram",
  "Nafees", "Bakht", "Zarrar", "Gibran", "Maqsood", "Shafqat", "Aasim", "Anzar", "Maruf", "Moiz",
  "Rakin", "Shariful", "Tamim", "Siraj", "Tasawwur", "Zayyan", "Aqil", "Fakhri", "Nizam", "Arham",
  "Tanzil", "Tawfiq", "Adeel", "Noman", "Saifullah", "Tariqi", "Mushtaq", "Shihab", "Zubaidi", "Tauqeer",
  "Wajahat", "Hikmat", "Ariz", "Arqam", "Awais", "Shajahan", "Jalili", "Asad", "Farid", "Qudrat",
  "Zubaid", "Shajar", "Qutb", "Saqqaf", "Sayeed", "Salamat", "Zeeshan", "Altaf", "Adnan", "Faizan",
  "Shanawaz", "Saadi", "Taimoor", "Raihan", "Shamoon", "Rizwan", "Mannan", "Shamsuddin", "Zafarullah", "Tufail",
  "Miskeen", "Suhrawardy", "Taqi", "Asghar", "Mahmood", "Ehtesham", "Sirajuddin", "Nizamuddin", "Ubaid", "Muzaffar",
  "Arsalan", "Tashfeen", "Nashit", "Tasneem", "Gulzar", "Gul", "Rafay", "Hanzala", "Azmat", "Baqar",
  "Badiuzzaman", "Barq", "Faqir", "Sharaf", "Talib", "Tamimuddin", "Tahiruddin", "Wasif", "Shamil", "Azfar",
  "Murtaza", "Javedan", "Rameez", "Rayyan", "Bari", "Basharat", "Shadab", "Fida", "Samiullah", "Shahbaz",
  "Qasimuddin", "Mehboobur", "Shan", "Haris", "Tanzeel", "Musharraf", "Makhdoom", "Shamshad", "Ahsan", "Zubayr",
  "Sakhawat", "Moeed", "Musleh", "Sarmad", "Tauheed", "Mujtaba", "Furqan", "Waliullah", "Sayeedur", "Taymullah",
  "Tawheed", "Shaharyar", "Ashhad", "Shahd", "Shajar", "Ghouse", "Tariqi", "Muqeet", "Qudsi", "Shakur",
  "Tasawwur", "Naeemi", "Junaidi", "Munawar", "Zarrar", "Taimur", "Jahangir", "Haneef", "Hikmat", "Shabbirul",
  "Tanzeel", "Zarrar", "Mansur", "Tasawwur", "Nashit", "Qayyum", "Makhdoom", "Arqam", "Aneesur", "Sibtain",
  "Qutb", "Sharaf", "Siraj", "Tarique", "Tameez", "Zeeshan", "Mohtashim", "Rakin", "Shajar", "Sirajuddin",
  "Tamimuddin", "Tariqi", "Zaeem", "Shanawaz", "Murtaza", "Zaman", "Bakht", "Hammad", "Shafiq", "Shariq",
  "Shujauddin", "Qudrat", "Saadi", "Saqqaf", "Suhrawardy", "Tauqeer", "Hanzala", "Azfar", "Badiuzzaman", "Faqir",
  "Sharaf", "Talib", "Tamimuddin", "Tahiruddin", "Wasif", "Shamil", "Azmat", "Zubaidi", "Shajar", "Shakur"
];
const femaleLastNames = [
  "Anjuman", "Ashma", "Batul", "Basira", "Durdana", "Farihat", "Gulshan", "Habiba", "Husnara", "Ilma",
  "Ishma", "Jamila", "Jasmina", "Kalima", "Karima", "Khairun", "Laili", "Latifa", "Lubaba", "Mahmuda",
  "Maliha", "Manowara", "Mashira", "Mazida", "Mehruba", "Mehzabin", "Minhaz", "Mou", "Munawara", "Murshida",
  "Nabila", "Nafisa", "Nahira", "Naima", "Najmun", "Nashrin", "Nazima", "Naznin", "Nazia", "Nehal",
  "Noorin", "Noshin", "Nurani", "Nuzrat", "Parveen", "Qudsia", "Rabita", "Raihana", "Raisa", "Rokhshana",
  "Roushanara", "Rozina", "Rubaba", "Rumana", "Ruqayya", "Sabahat", "Sadia", "Sahiba", "Saima", "Sakeena",
  "Saliha", "Samah", "Samina", "Sanwara", "Saphia", "Sarwat", "Shabana", "Shaheena", "Shairin", "Sharifa",
  "Shazmeen", "Shireen", "Shumona", "Siddiqua", "Sohara", "Sohila", "Sonia", "Sophiya", "Subah", "Subrina",
  "Suchana", "Suhana", "Sumaiya", "Sumona", "Suraiya", "Suzana", "Syeda", "Tahera", "Tahmina", "Tamanna",
  "Tanira", "Tanjina", "Tarin", "Tasfia", "Tasneem", "Tasmia", "Tumpa", "Ummehani", "Urooj", "Wafiya",
  "Waliha", "Wardah", "Yasmina", "Yumna", "Zakia", "Zannat", "Zaria", "Zarin", "Zarifa", "Zeba",
  "Zehra", "Zia", "Ziyana", "Zohra", "Zubaria", "Zunaira", "Afroza", "Afsana", "Alfiya", "Amatul",
  "Amira", "Anjuli", "Anwara", "Arisha", "Asifa", "Asma", "Atiya", "Azima", "Barira", "Bazla",
  "Benazir", "Bushra", "Dania", "Darina", "Disha", "Durre", "Efat", "Eshana", "Fabeha", "Faiqa",
  "Fakhira", "Farhath", "Fariya", "Fasiha", "Fatema", "Fauzia", "Ferdousi", "Fiza", "Gausia", "Ghazala",
  "Gulbarg", "Hadia", "Halima", "Hamida", "Hannana", "Hasnat", "Heba", "Humayra", "Inaya", "Irtika",
  "Ishrat", "Jameela", "Jannati", "Jaria", "Jasmine", "Juwairiya", "Kainat", "Kashfia", "Kawkab", "Khadeja",
  "Khadra", "Khansa", "Kulsum", "Lamisa", "Liyana", "Lubaba", "Lutfunnahar", "Madiha", "Maeesha", "Mahnoor",
  "Mahreen", "Maisa", "Maisha", "Malika", "Manaal", "Manahil", "Marjan", "Masrat", "Mawadda", "Mehnaz",
  "Meryem", "Mifrah", "Misbah", "Miskat", "Mobashera", "Momina", "Moumi", "Munazzah", "Munira", "Muntaha",
  "Nabeela", "Naheed", "Nailah", "Najma", "Namira", "Nargis", "Nasima", "Nazira", "Nihal", "Nilufa",
  "Noor", "Nuha", "Nurunnahar", "Oyshee", "Parisa", "Popy", "Priyanka", "Qamarunnisa", "Quratulain", "Rabeya",
  "Rahela", "Rahima", "Rahnuma", "Raisa", "Ranya", "Reema", "Rehnuma", "Rida", "Rifat", "Rihana",
  "Rokaiya", "Roza", "Rubina", "Rumana", "Ruqaiyah", "Sabina", "Sabrina", "Sadia", "Safiya", "Sajida",
  "Salima", "Samar", "Sania", "Saniyah", "Sariya", "Sarra", "Seher", "Shaima", "Shaista", "Shakila",
  "Sharmin", "Shazia", "Shehnaz", "Sheuly", "Shifa", "Shirin", "Sobia", "Sowmiya", "Subrina", "Sughra",
  "Sultana", "Sumana", "Sumayya", "Sundus", "Tabassum", "Tahira", "Tajkia", "Tania", "Tasmim", "Tawhida",
  "Tuba", "Ummehani", "Warda", "Wasifa", "Yara", "Yusra", "Zaibun", "Zakiya", "Zamzam", "Zarmin"
];

console.log(femaleLastNames.length);
const prophetsNames = [
  "Adam", "Idris", "Nuh", "Hud", "Salih", 
  "Ibrahim", "Lut", "Ismail", "Ishaq", "Yaqub", 
  "Yusuf", "Shuayb", "Ayyub", "Dhul-Kifl", "Musa", 
  "Harun", "Dawud", "Sulayman", "Ilyas", "Alyasa", 
  "Yunus", "Zakariya", "Yahya", "Isa", "Muhammad"
];
const sahabaNames = [
  "Abu Bakr As-Siddiq", "Umar Ibn Al-Khattab", "Uthman Ibn Affan", "Ali Ibn Abi Talib",
  "Hamza Ibn Abdul-Muttalib", "Bilal Ibn Rabah", "Abdullah Ibn Abbas", "Abdullah Ibn Umar",
  "Zaid Ibn Haritha", "Muadh Ibn Jabal", "Saad Ibn Abi Waqqas", "Talha Ibn Ubaydullah",
  "Abu Ubaidah Ibn Al-Jarrah", "Khalid Ibn Al-Walid", "Salman Al-Farsi", "Abu Hurairah",
  "Anas Ibn Malik", "Miqdad Ibn Aswad", "Hudhayfah Ibn Al-Yaman", "Abu Darda",
  "Jafar Ibn Abi Talib", "Ammar Ibn Yasir", "Suhaib Ar-Rumi", "Abdullah Ibn Mas'ud",
  "Abdullah Ibn Rawaha", "Ubayy Ibn Ka'b", "Abdullah Ibn Zubair", "Abu Musa Al-Ashari",
  "Abu Talib", "Al-Zubair Ibn Al-Awwam", "Abu Bakr Al-Siddiq", "Abu Abdullah",
  "Abu Sa'id Al-Khudri", "Abu Rafi", "Abu Dharr Al-Ghifari", "Abu Ayub Al-Ansari", 
  "Rabi'ah ibn Ka'b", "Abu Uthman Al-Nahdi", "Al-Bara Ibn Malik", "Abu Huraira", 
  "Anas ibn Malik", "Qais ibn Sa'd", "Abu Ibrahim","Adiba", "Afia", "Ahmadi", "Aklima", "Alia", "Amatullah", "Amreen", "Anisa", "Anjuli", "Anjumanara",
  "Aqeela", "Arwa", "Asfiya", "Ashrafi", "Asila", "Atika", "Ayana", "Ayesha", "Azra", "Badia",
  "Bariha", "Basima", "Batool", "Bisma", "Bithika", "Bushrat", "Chandni", "Dalia", "Dania", "Dilara",
  "Dilruba", "Eeman", "Elma", "Emira", "Eshrat", "Ety", "Fareeha", "Farzana", "Fathima", "Fauziya",
  "Fazilat", "Ferdausi", "Fiza", "Ghina", "Golejan", "Gulsan", "Hadia", "Hajera", "Hamna", "Hanifa",
  "Hareem", "Hasina", "Heba", "Hena", "Hoor", "Huma", "Humaira", "Husna", "Ifrah", "Ijlal",
  "Ikra", "Ilham", "Insiya", "Intisar", "Iqra", "Irha", "Ishita", "Ismat", "Isra", "Itrat",
  "Jahanara", "Jannat", "Jawaria", "Jenifa", "Joya", "Juhaina", "Kadeeja", "Kashmala", "Khadra", "Khushi",
  "Komola", "Kulsoom", "Laiba", "Lamees", "Lamia", "Lana", "Latifa", "Lubna", "Lujayn", "Lutfa",
  "Madiha", "Mahfuza", "Mahira", "Mahjabin", "Mahnoor", "Maisha", "Majida", "Maliha", "Malka", "Marufa",
  "Marzan", "Masuma", "Meher", "Mehjabeen", "Mehnaz", "Meryem", "Mim", "Mina", "Minara", "Misbah",
  "Miskat", "Mobassira", "Momtaz", "Monira", "Mouree", "Muqaddas", "Mursalat", "Nabiha", "Naeema", "Naima",
  "Najat", "Najma", "Nakhat", "Nandita", "Naseema", "Nasifa", "Nasira", "Nasreen", "Nazahat", "Nazima",
  "Nazia", "Neha", "Nejma", "Nida", "Nihar", "Nikhat", "Nila", "Nisma", "Noshaba", "Nusrat",
  "Nuzhat", "Papia", "Parisa", "Parvin", "Pervin", "Piyasha", "Qamra", "Qistina", "Qudsia", "Rabia",
  "Rafia", "Raiha", "Raima", "Ranya", "Rashida", "Rayhanah", "Rebeka", "Rehnuma", "Rida", "Rifat",
  "Rihana", "Rima", "Rizwana", "Roja", "Romana", "Ronjona", "Roushan", "Rozina", "Rukaiya", "Rumana",
  "Ruqayya", "Sabahat", "Sabina", "Sabrina", "Sadia", "Safah", "Safina", "Sahra", "Saima", "Sajida",
  "Sakeena", "Salma", "Samiha", "Samra", "Sana", "Sanika", "Sanika", "Saniya", "Sara", "Sarwat",
  "Savera", "Sayema", "Sehar", "Sejuti", "Shaheda", "Shaima", "Shaista", "Sharmin", "Sharvani", "Shazia",
  "Shefa", "Shirin", "Shurovi", "Shyma", "Siddiqa", "Sobia", "Sohana", "Sonia", "Sonika", "Sophia",
  "Sufia", "Sughra", "Suhana", "Sultana", "Sumaiya", "Sumayya", "Sundus", "Suraiya", "Suzana", "Syeda",
  "Tabana", "Tabassum", "Tahani", "Tahira", "Tahsin", "Tania", "Tanjila", "Taqwa", "Tasfia", "Tasnim",
  "Tasmiyah", "Taybah", "Tuba", "Umama", "Ummehani", "Urmi", "Wajiha", "Warda", "Waseela", "Yameena",
  "Yasmeen", "Yusra", "Zaara", "Zafira", "Zahida", "Zahra", "Zaida", "Zakia", "Zamzam", "Zannat",
  "Zara", "Zareen", "Zarifa", "Zarina", "Zarrin", "Zeba", "Zeenat", "Zia", "Zinnia", "Zohra"
];
const femaleSahabaNames = [
  "Khadijah bint Khuwaylid", "Aisha bint Abu Bakr", "Fatimah bint Muhammad", "Umm Salamah",
  "Hafsa bint Umar", "Zaynab bint Jahsh", "Umm Habibah", "Asma bint Abu Bakr", "Sumayyah bint Khayyat", "Ruqayyah bint Muhammad",
  "Umm Kulthum bint Muhammad", "Maria al-Qibtiyya", "Umm Ayman", "Safiyyah bint Abdul-Muttalib", "Umm Haram",
  "Maymunah bint Al-Harith", "Sawdah bint Zam'ah", "Barakah (Umm Ayman)", "Lubaba bint Al-Harith", "Arwa bint Kurayz", 
  "Umm Salim", "Umm al-Mundhir", "Umm Aban", "Umm Fadl", "Umm Ruman", "Umm Sulaym",
  "Umm Ibrahim", "Zaynab bint Ali", "Al-Shifa bint Abdullah", "Umm Tufail bint Sa'd",
  "Umm 'Atiyyah", "Umm Hakim", "Umm al-Darda", "Umm 'Ammar", "Umm Nusaybah",
  "Sahm bint Khalid", "Khawlah bint al-Azwar", "Kawthar bint Abdul Aziz", "Ramlah bint Abi Sufyan",
  "Umm Hani", "Aminah bint Wahb", "Umm al-Mu'minin", "Rabi'ah bint Ma'bad"
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
let ul= document.querySelector("ul")
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
      result.innerHTML=`${maleResult} ${lastResult}<button onclick="save(this)">🖤</button>`
      output.appendChild(result)

    }else if(femaleCheck.checked){
      let femaleIndex= Math.floor(Math.random()*femaleNames.length)
      let lastIndex= Math.floor(Math.random()*femaleLastNames.length)
      femaleResult= femaleNames[femaleIndex]
      lastResult= femaleLastNames[lastIndex]
      let result= document.createElement("h2")
      result.innerHTML=`${femaleResult} ${lastResult}`
      output.appendChild(result)
    }
    // else{
      //   let bothNames=maleNames.concat(femaleNames)
      //   let bothIndex= Math.floor(Math.random()*(bothNames.length))
      //   let lastIndex= Math.floor(Math.random()*lastNames.length)
      //   bothResult= bothNames[bothIndex]
      //   lastResult= lastNames[lastIndex]
      //   let result= document.createElement("h2")
      //   result.innerHTML=`${bothResult} ${lastResult}`
      //   output.appendChild(result)
      // }
    }
  }
  function save(elem) {
    let savedName= document.createElement("li")
    savedName.innerHTML= `${elem.parentElement.innerText}<button onclick="delet(this)">delete</button>`
    ul.appendChild(savedName)
  }
  function delet(elem) {
    elem.parentElement.remove()
  }
  
const prophets= document.querySelector(".propets")
const femaleSahabas= document.querySelector(".femaleSahabas")
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
femaleSahabas.addEventListener("click", function () {
  output.innerHTML = "";
  femaleSahabaNames.map((names)=>{
    let result= document.createElement("h2")
      result.innerHTML=(names)
    output.appendChild(result)
  })
})

function search() {
  output.innerHTML = "";
  const alphabetInput = document.querySelector("#alphabet").value.trim().toUpperCase();
  const isMale = document.querySelector("#smale").checked;
  const isFemale = document.querySelector("#sfemale").checked;

  let filteredArray = [];
  let lastNameArray = [];

  // Choose gender-based array and appropriate last names
  if (isMale) {
    filteredArray = maleNames;
    lastNameArray = lastNames;
  } else if (isFemale) {
    filteredArray = femaleNames;
    lastNameArray = femaleLastNames;
  } else {
    const warning = document.createElement("h2");
    warning.innerHTML = "Please select a gender.";
    output.appendChild(warning);
    return;
  }

  let hasResult = false;

  filteredArray.forEach((name) => {
    if (name[0].toUpperCase() === alphabetInput) {
      const randomLast = lastNameArray[Math.floor(Math.random() * lastNameArray.length)];
      const result = document.createElement("h2");
      result.innerHTML = `${name} ${randomLast}`;
      hasResult = true;
      output.appendChild(result);
    }
  });

  if (!hasResult) {
    const result = document.createElement("h2");
    result.innerHTML = "Sorry, no names found.";
    output.appendChild(result);
  }
}
