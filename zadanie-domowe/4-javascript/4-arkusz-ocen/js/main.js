let btn = document.querySelector('button');
let tablicaUczniowie = document.querySelectorAll('div[id^="uczen"]');
let sredniaSpan = document.querySelector


// const dodajZajeciaDodatkowe = (tablica) => {
//     tablica.forEach(zajecia => {
//         if (zajecia.value.includes('matematyka')) {
//             console.log('matematyka');
//         }
//         if (zajecia.value.includes('polski')) {
//             console.log('polski');
//         }
//         if (zajecia.value.includes('bilogia')) {
//             console.log('bilogia');
//         }
//         if (zajecia.value.includes('geografia')) {
//             console.log('geografia');
//         }
//         if (zajecia.value.includes('fizyka')) {
//             console.log('fizyka');
//         }
//         if (zajecia.value.includes('chemia')) {
//             console.log('chemia');
//         }
//         if (zajecia.value.includes('informatyka')) {
//             console.log('informatyka');
//         }
//     });
// }

// const wyliczSrednia = () => {
//     // console.log('działa');
//     tablicaUczniowie.forEach((element) => {
//         let srednia = 0;
//         let sredniaSpan = element.querySelector('span.srednia');
//         let oceny = element.querySelectorAll('input[type="number"]');
//         let zajeciaDodatkowe = element.querySelectorAll('input[type="text"]');
//         dodajZajeciaDodatkowe(zajeciaDodatkowe);
//         oceny.forEach((ocena) => {
//             srednia = srednia + (+ocena.value)
//         });
//         srednia = (srednia / oceny.length).toFixed(2)
//         console.log(srednia);

//     });
// }

const wyliczSrednia = () => {
    // console.log('działa');
    tablicaUczniowie.forEach((div) => {
        let srednia = 0;
        let sredniaSpan = div.querySelector('span.srednia');
        let inputs = div.querySelectorAll('input');
        let oceny = div.querySelectorAll('input[type="number"]');
        // let zajeciaDodatkowe = div.querySelectorAll('input[type="text"]');
        // console.log(oceny.length);
        inputs.forEach((input) => {

            if (input.value.includes('matematyka') && div.querySelector('input.matematyka').value < 6) {
                srednia += 0.5;
            }
            if (input.value.includes('polski') && div.querySelector('input.polski').value < 6) {
                srednia += 0.5;
            }
            if (input.value.includes('bilogia') && div.querySelector('input.biologia').value < 6) {
                srednia += 0.5;
            }
            if (input.value.includes('geografia') && div.querySelector('input.geografia').value < 6) {
                srednia += 0.5;
            }
            if (input.value.includes('fizyka') && div.querySelector('input.fizyka').value < 6) {
                srednia += 0.5;
            }
            if (input.value.includes('chemia') && div.querySelector('input.chemia').value < 6) {
                srednia += 0.5;
            }
            if (input.value.includes('informatyka') && div.querySelector('input.informatyka').value < 6) {
                srednia += 0.5;
            }

            if (input.type == 'number') {
                // console.log(input.value);
                srednia = srednia + (+input.value);
                // console.log(srednia / oceny.length);
            }

            if (input.type == 'number' && input.value < 2) {
                div.style.backgroundColor = 'red';
            }


        });
        srednia = (srednia / oceny.length).toFixed(2);
        sredniaSpan.textContent = srednia;
        if (srednia > 4.75) {
            div.style.backgroundColor = 'green';
        }
    })
};


btn.addEventListener('click', wyliczSrednia);