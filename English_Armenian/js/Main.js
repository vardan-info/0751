  const dictionary = [
    { english: "Hello", armenian: "Hello" },
    { english: "Goodbye", armenian: "Ցտեսություն" },
    { english: "Please", armenian: "Խնդրում եմ" },
    { english: "Thank you", armenian: "Շնորհակալություն" },
    { english: "Yes", armenian: "Այո" },
    { english: "No", armenian: "Ոչ" },
    { english: "Man", armenian: "Տղամարդ" },
    { english: "Woman", armenian: "Կին" },
    { english: "Water", armenian: "Ջուր" },
    { english: "Food", armenian: "Սնունդ" },
    { english: "How do you do", armenian: "Բարև ձեզ" },
    { english: "food", armenian: "Սնունդ" },
     { english: "Good Morning", armenian: "բարի առավոտ" },
    { english: "Good afternoon", armenian: "բարի օր" },
    { english: "Good Evening", armenian: "Բարի երեկո" },
    { english: "Welcome", armenian: "bari galust" },
     { english: "Very well, thank you.How are you", armenian: "Լավ եմ, Շնորհակալություն իսկ դուք ինչպես եք" },
      { english: "Hi How are things you doiings you keepings", armenian: "Ողջույն ինչպես են գործերդ" },
      { english: "Fine thanks And you", armenian: "Շատ լավ շնորհակալություն:Իսկ քեզ մոտ ինչ կա" },
       { english: "Everythings fine thanks", armenian: "ամեն ինչ կարգին է" },
        { english: "Well,hello This is a pleasant surpise How are you", armenian: "Ողջույն ինչ հաճելի անակնկալ: Ինչպես եք" },
         { english: "Oh what luck l havent seen you for ages", armenian: "ինչ հաջողություն հազաար տարի չեմ տեսել" },


    
];


function populateTable() {
    const tableBody = document.querySelector('#dictionary-table tbody');
    tableBody.innerHTML = ""; // Clear any existing rows
    dictionary.forEach(word => {
        const row = document.createElement('tr');
        const cellEnglish = document.createElement('td');
        const cellArmenian = document.createElement('td');
        
        cellEnglish.textContent = word.english;
        cellArmenian.textContent = word.armenian;
        
        row.appendChild(cellEnglish);
        row.appendChild(cellArmenian);
        tableBody.appendChild(row);
    });
}


function filterWords() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filteredWords = dictionary.filter(word => 
        word.english.toLowerCase().includes(searchInput) || word.armenian.includes(searchInput)
    );
    
    const tableBody = document.querySelector('#dictionary-table tbody');
    tableBody.innerHTML = ""; // Clear existing rows

    filteredWords.forEach(word => {
        const row = document.createElement('tr');
        const cellEnglish = document.createElement('td');
        const cellArmenian = document.createElement('td');
        
        cellEnglish.textContent = word.english;
        cellArmenian.textContent = word.armenian;
        
        row.appendChild(cellEnglish);
        row.appendChild(cellArmenian);
        tableBody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', populateTable);
