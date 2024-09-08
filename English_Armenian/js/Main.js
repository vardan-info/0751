  const dictionary = [
    { english: "1-Hello", armenian: "Hello" },
    { english: "2-Goodbye", armenian: "Ցտեսություն" },
    { english: "3-Please", armenian: "Խնդրում եմ" },
    { english: "4-Thank you", armenian: "Շնորհակալություն" },
    { english: "5-Yes", armenian: "Այո" },
    { english: "6-No", armenian: "Ոչ" },
    { english: "7-Man", armenian: "Տղամարդ" },
    { english: "8-Woman", armenian: "Կին" },
    { english: "9-Water", armenian: "Ջուր" },
    { english: "10-Food", armenian: "Սնունդ" },
    { english: "11-How do you do", armenian: "Բարև ձեզ" },
    { english: "12-food", armenian: "Սնունդ" },
     { english: "13-Good Morning", armenian: "բարի առավոտ" },
    { english: "14-Good afternoon", armenian: "բարի օր" },
    { english: "15-Good Evening", armenian: "Բարի երեկո" },
    { english: "16-Welcome", armenian: "bari galust" },
     { english: "17-Very well, thank you.How are you", armenian: "Լավ եմ, Շնորհակալություն իսկ դուք ինչպես եք" },
      { english: "18-Hi How are things you doiings you keepings", armenian: "Ողջույն ինչպես են գործերդ" },
      { english: "19-Fine thanks And you", armenian: "Շատ լավ շնորհակալություն:Իսկ քեզ մոտ ինչ կա" },
       { english: "20-Everythings fine thanks", armenian: "ամեն ինչ կարգին է" },
        { english: "21-Well,hello This is a pleasant surpise How are you", armenian: "Ողջույն ինչ հաճելի անակնկալ: Ինչպես եք" },
         { english: "22-Oh what luck l havent seen you for ages", armenian: "ինչ հաջողություն հազաար տարի չեմ տեսել" },
         { english: "1-Allow me to introduce myself", armenian: "Թույլ տվեք ներկայանալ" },
           { english: "2-Here is my card", armenian: "Ահա իմ այցետոմսը" },
           { english: "3-i'm a representative of", armenian: "ես ֆիրմայի ներկայացուցիչնեմ" },
           { english: "4-id like you to met", armenian: "թույլ տվեք ներկայանալ" },
           { english: "5-this is", armenian: "սա է" },
           { english: "6-Ive been looking forward to meeting you", armenian: "ես շատ էյ ուզում ձեր հետ ծանոթանալ" },
           { english: "7-i'm a representative of", armenian: "ես ֆիրմայի ներկայացուցիչնեմ" },
           { english: "8-Are you acquainted", armenian: "Դուք ծանոթ եք" },
           { english: "9-Arent you'acquainted", armenian: "մի թե ծանոթ չեք " },


    
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

