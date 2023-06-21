document.addEventListener("DOMContentLoaded", function() {
  // Dapatkan elemen 'konversiButton'
  var konversiButton = document.querySelector(".InputSection button:first-of-type");

  // Dapatkan elemen 'resetButton'
  var resetButton = document.querySelector(".InputSection button:nth-of-type(2)");

  // Dapatkan elemen 'reverseButton'
  var reverseButton = document.querySelector(".InputSection button:nth-of-type(3)");

  // Tambahkan event listener ke 'konversiButton'
  konversiButton.addEventListener("click", function() {
    // Dapatkan nilai yang dimasukkan di elemen 'InputField' dan konversikan ke tipe float
    var celsius = parseFloat(document.getElementById("InputField").value);

    // Konversi Celsius ke Fahrenheit menggunakan rumus dan bulatkan hasilnya hingga 2 desimal
    var fahrenheit = (celsius * 9/5) + 32;

    // Setel nilai elemen 'fahrenheitOutput' menjadi nilai Fahrenheit yang dikonversi
    document.getElementById("fahrenheitOutput").value = fahrenheit.toFixed(2);

    // Buat rumus konversi yang akan ditampilkan di elemen 'formula'
    var formula = "(" + celsius + "°C x 9/5) + 32 = " + fahrenheit.toFixed(2) + "°F";

    // Setel nilai elemen 'formula' menjadi rumus konversi
    document.getElementById("formula").value = formula;
  });

  // Tambahkan event listener ke 'resetButton'
  resetButton.addEventListener("click", function() {
    // Setel nilai elemen 'InputField', 'fahrenheitOutput', dan 'formula' menjadi kosong
    document.getElementById("InputField").value = "";
    document.getElementById("fahrenheitOutput").value = "";
    document.getElementById("formula").value = "";
  });

  // Tambahkan event listener ke 'reverseButton'
  reverseButton.addEventListener("click", function() {
    // Dapatkan nilai yang dimasukkan di elemen 'fahrenheitOutput' dan konversikan ke tipe float
    var fahrenheit = parseFloat(document.getElementById("fahrenheitOutput").value);

    // Konversi Fahrenheit ke Celsius menggunakan rumus dan bulatkan hasilnya hingga 2 desimal
    var celsius = (fahrenheit - 32) * 5/9;

    // Setel nilai elemen 'InputField' menjadi nilai Celsius yang dikonversi
    document.getElementById("InputField").value = celsius.toFixed(2);

    // Buat rumus konversi yang akan ditampilkan di elemen 'formula'
    var formula = "(" + fahrenheit + "°F - 32) x 5/9 = " + celsius.toFixed(2) + "°C";

    // Setel nilai elemen 'formula' menjadi rumus konversi
    document.getElementById("formula").value = formula;
  });
});
