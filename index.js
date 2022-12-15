let listeSec = document.querySelector("#liste");
const veriEkleSec = document.querySelector("#veriekle");
const tumListeyiSec = document.querySelector(".list-group");
const ilkKartSec = document.querySelectorAll(".card-body")[0];
let ikinciKartSec = document.querySelectorAll(".card-body")[1];
let butonSec = document.querySelector("#temizle");

let yapilacaklar = [];

const ListeyiHazirla = () => {
  listeSec.addEventListener("submit", eklemeYap);
};

let eklemeYap = (e) => {
  const inputSec = veriEkleSec.value.trim();
  if (inputSec == null || inputSec == "") {
    uyariOlustur("warning", "içerik eklenmemiştir...");
  } else {
    sayfayaEkle(inputSec);
    veriDepola(inputSec);
    uyariOlustur("success", "içerik kayıt edildi...");
  }

  e.preventDefault();
};

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

const veriDepola = (ekle) => {
  veriKontrolEt();
  yapilacaklar.push(ekle);
  localStorage.setItem("yapilacaklar", JSON.stringify(yapilacaklar));
};

const veriKontrolEt = () => {
  if (localStorage.getItem("yapilacaklar") === null) {
    yapilacaklar = [];
  } else {
    yapilacaklar = JSON.parse(localStorage.getItem("yapilacaklar"));
  }
};

ListeyiHazirla();

const uyariOlustur = (type, mesaj) => {
  let divOlustur = document.createElement("div");
  divOlustur.className = `alert alert-${type}`;
  divOlustur.textContent = mesaj;
  ilkKartSec.appendChild(divOlustur);

  setTimeout(() => {
    divOlustur.remove();
  }, 1000);
};
