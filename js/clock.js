let myName = document.querySelector('#myName');
myName.innerHTML = prompt("Adınızı Giriniz");


    function saatGuncelle() {
        var guncel = document.querySelector('#myClock'); // DOM etkinlikleri ile myClock id 'sini kullanıyoruzç
        var tarih = new Date();

        var saat = tarih.getHours(); // saat 'i ceken fonksiyon
        var dakika = tarih.getMinutes(); // dakika 'yi ceken fonksiyon
        var saniye = tarih.getSeconds(); // saniye 'yi ceken fonksiyon

        var gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
        // gunler[] dizisini olusturmamızın nedeni; kendi çektiği veride günleri sayı olarak vermektedir. var gunler[] dizisini yorum satırı haline getirirseniz göreceksiniz.
        // bizde haftanın baslangıc gününden son gününe kadar bir dizi olusturup kendi çektiği indekse göre onu isimlendirmiş oluyoruz.
        var gun = gunler[tarih.getDay()];

        var zaman = `${saat}:${dakika}:${saniye}, ${gun}`;

        guncel.innerHTML = zaman;

        setTimeout(saatGuncelle, 1000); // Her 1 saniyede bir günceller
    }
    saatGuncelle(); // son olarak fonksiyonumuzu cagırıyoruz
