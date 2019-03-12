$(function () {
    // $('button').after("<div id = 'dane-programisty'>data</div>");

    $('button').click(function () {
        $.ajax({
            url: "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
            dataType: 'json',
            success: function (resultJSON) {
                $('button').after("<div id = 'dane-programisty'>data</div>");
                $('#dane-programisty').html('Firma: ' + resultJSON.firma + '<br>' + 'Imię: ' + resultJSON.imie + '<br>' + ' Nazwisko: ' + resultJSON.nazwisko + '</br>' + "Zawód: " + resultJSON.zawod);
                console.log(resultJSON);
                // let jsonObj = JSON.parse(resultJSON);

            },
            onerror: function (msg) {
                console.log(msg);
            }
        });
    })
});