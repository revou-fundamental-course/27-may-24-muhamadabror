// Ini javascriptt

// popup pengisian data nama
document.addEventListener("DOMContentLoaded", function () {
    const nameSpan = document.getElementById("tag-name");
    const name = prompt("Nama anda: ", "");
   
    if (name) { nameSpan.textContent = name; } });

document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault();
    
    const nama = document.getElementsById('name').value;
    const email = document.getElementsById('email').value;
    const dateBorn = document.getElementsById('date-born').value;
    const jenisKelamin = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById('pesan').value;
    const hasil = 'Nama: ${nama}\nTanggal lahir: ${dateBorn}\nEmail: ${email}\nPesan: ${message}'

    document.getElementById('result-form') = hasil;
    
         
});


// melakukan validasi form



    // form.addEventListener('submit', (e)=>{
    //     if (nama == null && email == null && dateBorn == null && jenisKelamin == null && message == null ){
            
    //         e.preventDefault();
    //     }
        
    // })
      



// hasil dari pengisian form
// function setSender(nama, email, dateBorn, jenisKelamin, message ){

// };