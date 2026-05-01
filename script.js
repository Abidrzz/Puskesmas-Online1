function prosesDarurat(status) {
    console.log("Tombol diklik dengan status: " + status); // Untuk testing di console
    if (status === 'YA') {
        tampilkanHasil("IGD-01", "RUANG IGD (DARURAT)");
    } else {
        document.getElementById('step-1').classList.add('hidden');
        document.getElementById('step-data').classList.remove('hidden');
    }
}
function lanjutGejala() {
    const nama = document.getElementById('nama').value;
    const usia = document.getElementById('usia').value;
    
    if (nama && usia) {
        document.getElementById('step-data').classList.add('hidden');
        document.getElementById('step-gejala').classList.remove('hidden');
    } else {
        alert("Mohon isi nama dan usia!");
    }
}

function prosesSkrining() {
    const skala = document.getElementById('skala').value;
    const usia = parseInt(document.getElementById('usia').value);
    let poli = "";
    let noAntrian = "";

    // Logika Flowchart: Skala 5 = IGD
    if (skala == "5") {
        tampilkanHasil("IGD-02", "RUANG IGD (SKALA 5)");
        return;
    }

    // Penentuan Poli Berdasarkan Usia
    if (usia > 50) {
        poli = "POLI LANSIA (Prioritas)";
        noAntrian = "L-" + Math.floor(Math.random() * 100);
    } else if (usia < 15) {
        poli = "POLI ANAK";
        noAntrian = "A-" + Math.floor(Math.random() * 100);
    } else {
        poli = "POLI UMUM";
        noAntrian = "U-" + Math.floor(Math.random() * 100);
    }

    tampilkanHasil(noAntrian, poli);
}

function tampilkanHasil(nomor, unit) {
    document.getElementById('form-container').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('no-antrian').innerText = nomor;
    document.getElementById('tujuan-poli').innerText = unit;
}