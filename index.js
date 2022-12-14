let listeSec = document.querySelector("#liste");
const veriEkleSec = document.querySelector("#veriekle");
const tumListeyiSec = document.querySelector(".list-group");
let ilkKartSec = document.querySelectorAll(".tumListe")[0];
let ikinciKartSec = document.querySelectorAll(".tumListe")[1];
let butonSec = document.querySelector("#clearButton");

const ListeyiHazirla = () => {
  listeSec.addEventListener("submit", eklemeYap);
};

let eklemeYap = (e) => {
  const inputSec = veriEkleSec.value.trim();
  if (inputSec == null || inputSec == "") {
    alert(" değer gir");
  } else {
    sayfayaEkle(inputSec);
  }

  e.preventDefault();
};
ListeyiHazirla();

const sayfayaEkle = (ekle) => {
  const liOlustur = document.createElement("li");
  liOlustur.className = "list-group-item d-flex justify-content-between";
  liOlustur.textContent = ekle;

  const aOlustur = document.createElement("a");
  aOlustur.href = "#";
  aOlustur.className = "delete-item";

  const iOlustur = document.createElement("i");
  iOlustur.className = "fa fa-remove";

  aOlustur.appendChild(iOlustur);
  liOlustur.appendChild(aOlustur);
  tumListeyiSec.appendChild(liOlustur);

  veriEkleSec.value = "";
};
