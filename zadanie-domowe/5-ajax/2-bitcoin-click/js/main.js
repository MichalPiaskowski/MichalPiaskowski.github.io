$(function () {
    let $btn = $('button');
    let $parKursKupna = $('#kurs-kupna');
    let $bazowyKursKupna = 0;
    let $parKursSprzedazy = $('#kurs-sprzedazy');
    let $bazowyKursSprzedazy = 0;
    let $iconKupno = $('i#kupno');
    let $iconSprzedaz = $('i#sprzedaz');

    const pobierzBazowyKurs = function () {
        $.getJSON('https://blockchain.info/pl/ticker', function (data) {
            $bazowyKursKupna = data.PLN.buy;
            $bazowyKursSprzedazy = data.PLN.sell;
            $parKursKupna.text($bazowyKursKupna + ' PLN');
            $parKursSprzedazy.text($bazowyKursSprzedazy + ' PLN');
            console.log($bazowyKursKupna, $bazowyKursSprzedazy, 'bazowy kurs przed klik');
        })
    }
    pobierzBazowyKurs()

    const pobierzNowyKurs = function () {
        let $kursKupna;
        let $kursSprzedazy;
        console.log($kursKupna, $kursSprzedazy, 'kurs przed pobraniem');
        $.getJSON('https://blockchain.info/pl/ticker', function (data) {
            $kursKupna = data.PLN.buy;
            $kursSprzedazy = data.PLN.sell;
            $parKursKupna.text($kursKupna + ' PLN');
            $parKursSprzedazy.text($kursSprzedazy + ' PLN');
            console.log($bazowyKursKupna, $bazowyKursSprzedazy, 'bazowy kurs po klik');
            console.log($kursKupna, $kursSprzedazy, 'kurs po pobraniu');
            if ($kursKupna > $bazowyKursKupna) {
                $iconKupno.attr("class", 'fas fa-arrow-up');
            } else if ($kursKupna < $bazowyKursKupna) {
                $iconKupno.attr("class", 'fas fa-arrow-down');
            } else if ($kursKupna == $bazowyKursKupna) {
                $iconKupno.attr("class", 'fas fa-grip-lines');
            }

            if ($kursSprzedazy > $bazowyKursSprzedazy) {
                $iconSprzedaz.attr("class", 'fas fa-arrow-up');
            } else if ($kursSprzedazy < $bazowyKursSprzedazy) {
                $iconSprzedaz.attr("class", 'fas fa-arrow-down');
            } else if ($kursSprzedazy == $bazowyKursSprzedazy) {
                $iconSprzedaz.attr("class", 'fas fa-grip-lines');
            }
            $bazowyKursKupna = $kursKupna;
            $bazowyKursSprzedazy = $kursSprzedazy;
        })
    }

    $btn.click(pobierzNowyKurs);

})