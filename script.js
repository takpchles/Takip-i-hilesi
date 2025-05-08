
function checkPassword() {
    var pass = document.getElementById("password").value;
    if (pass === "takipçi123") {
        document.getElementById("login-screen").style.display = "none";
        document.getElementById("main-panel").style.display = "block";
    } else {
        alert("Hatalı şifre!");
    }
}

document.getElementById("hamburger").addEventListener("click", function () {
    var menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "none" ? "block" : "none";
});

function showEren() {
    document.getElementById("eren-panel").style.display = "block";
    document.getElementById("cevap-login").style.display = "none";
    document.getElementById("cevaplar-panel").style.display = "none";
}

function showCevapLogin() {
    document.getElementById("eren-panel").style.display = "none";
    document.getElementById("cevap-login").style.display = "block";
    document.getElementById("cevaplar-panel").style.display = "none";
}

function checkCevapPassword() {
    var pass = document.getElementById("cevap-password").value;
    if (pass === "erenw25") {
        showCevaplar();
    } else {
        alert("Cevap şifresi hatalı!");
    }
}

function saveForm() {
    var form = document.getElementById("anketForm");
    var formData = new FormData(form);

    var cevap = {
        can: formData.get("can"),
        memo: formData.get("memo"),
        secim: formData.get("secim")
    };

    var mevcut = JSON.parse(localStorage.getItem("cevaplar") || "[]");
    mevcut.push(cevap);
    localStorage.setItem("cevaplar", JSON.stringify(mevcut));

    alert("Anket kaydedildi!");
    form.reset();
    return false;
}

function showCevaplar() {
    var liste = document.getElementById("cevaplar-listesi");
    liste.innerHTML = "";
    document.getElementById("cevap-login").style.display = "none";
    document.getElementById("cevaplar-panel").style.display = "block";

    var cevaplar = JSON.parse(localStorage.getItem("cevaplar") || "[]");
    if (cevaplar.length === 0) {
        liste.innerHTML = "<p>Henüz cevap yok.</p>";
        return;
    }

    cevaplar.forEach(function (cevap, index) {
        var div = document.createElement("div");
        div.innerHTML = "<strong>Cevap #" + (index + 1) + "</strong><br>" +
                        "CAN: " + cevap.can + "<br>" +
                        "MEMO: " + cevap.memo + "<br>" +
                        "SEÇİM: " + cevap.secim + "<hr>";
        liste.appendChild(div);
    });
}
