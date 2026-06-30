// =======================
// FILTER PROJECT
// =======================

function filterProject(kategori){

    let projects = document.getElementsByClassName("project");

    for(let i = 0; i < projects.length; i++){

        if(kategori === "all"){

            projects[i].style.display = "block";

        }

        else if(projects[i].classList.contains(kategori)){

            projects[i].style.display = "block";

        }

        else{

            projects[i].style.display = "none";

        }

    }

}

// =======================
// VALIDASI FORM
// =======================

document.getElementById("contactForm").addEventListener("submit", function(e){

    e.preventDefault();

    let nama = document.getElementById("nama").value.trim();
    let pesan = document.getElementById("pesan").value.trim();

    let warning = document.getElementById("warning");

    if(nama === "" || pesan === ""){

        warning.style.color = "red";
        warning.innerHTML = "Nama dan pesan tidak boleh kosong!";

    }

    else{

        warning.style.color = "green";
        warning.innerHTML = "Pesan berhasil dikirim!";

        document.getElementById("nama").value = "";
        document.getElementById("pesan").value = "";

    }

});