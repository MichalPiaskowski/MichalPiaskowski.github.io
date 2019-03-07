// DEKLARACJA ZMIENNYCH GLOBALNYCH

let btn = document.querySelector('button');
let mainContainer = document.querySelector('div#pracownicy');
let tablicaPracownicy = [].slice.call(mainContainer.children);
let topPracownicy = [];
let topPracownicyDiv = document.querySelector('div#pracownicy div:nth-last-child(1)')

// FUNKCJA WYLICZAJĄCA WYNAGRODZENIE DLA PRACOWNIKÓW (Z UJĘCIEM PREMII ZA NADGODZINY)

function tabelaWnagrodzen() {
    for (let i = 0; i < tablicaPracownicy.length; i++) {
        if (tablicaPracownicy[i].querySelector('span.pracownik') != null) {
            let czas = tablicaPracownicy[i].querySelector('.czas').value;
            let stawka = tablicaPracownicy[i].querySelector('.stawka').value;
            let wyplata = tablicaPracownicy[i].querySelector('.wyplata').value;
            let spanWyplata = tablicaPracownicy[i].querySelector('.wyplata');
            if (czas > 160) {
                topPracownicy.push(tablicaPracownicy[i]) //przeniesienie topowych pracowników do nowej tablicy
                wyplata = (160 + (czas - 160) * 2) * stawka;
            } else {
                wyplata = czas * stawka;
            }
            spanWyplata.innerText = wyplata; //Zaznaczenie pracowników z czasem pracy poniżej 100 godzin
            if (czas < 100) {
                tablicaPracownicy[i].style.background = 'red';
            }
        }
    }
}

//FUNKCJA WYŚWIETLAJĄCA 3 NAJLEPSZYCH PRACOWNIKÓW

function top3() {
    //Sortowanie tablicy z pracownikami od największej liczby godzin
    for (let j = 0; j < topPracownicy.length - 1; j++) {
        for (let i = 0; i < topPracownicy.length - 1; i++) {
            let czas = topPracownicy[i].querySelector('.czas').value;
            let czas2 = topPracownicy[i + 1].querySelector('.czas').value;
            if (czas < czas2) {
                let temp = topPracownicy[i];
                topPracownicy[i] = topPracownicy[i + 1];
                topPracownicy[i + 1] = temp;
            }
        }
    }
    //Wypisanie na stronie trzech najlepszych pracowników
    for (let i = 0; i < 3; i++) {
        let name = topPracownicy[i].querySelector('span.pracownik').innerText;
        let topContainer = document.createElement('p');
        topContainer.textContent = `${i+1}. ${name}`;
        topPracownicyDiv.appendChild(topContainer);
    }
}

//USTAWNIE URUCHOMIENIA FUNKCJI NA KLIKNIĘCIE BUTTONA

btn.addEventListener('click', function () {
    tabelaWnagrodzen();
    top3();
});