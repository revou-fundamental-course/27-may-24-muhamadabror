// Ini javascriptt

// popup pengisian data nama
document.addEventListener("DOMContentLoaded", function () {
    const nameSpan = document.getElementById("tag-name");
    const name = prompt("Nama anda: ", "");
   
    if (name) { nameSpan.textContent = name; } });
// untuk menghilangkan pengulangan tombol submit
document.getElementById('form-group').addEventListener('submit'), function(e){
    e.preventDefault();

// melakukan validasi form
function validasiForm (){
    const nama = document.getElementsById('name').value;
    const email = document.getElementsById('email').value;
    const dateBorn = document.getElementsById('date-born').value;
    const jenisKelamin = document.querySelector('input[name="gender"]:checked').value
    const message = document.getElementById('pesan').value;

    if (nama == "" && email == "" && dateBorn == "" && jenisKelamin == "" && message == "" ){
        alert('Tidak boleh ada yang kosong');
        return false;
    }; 
    
};
// hasil dari pengisian form
function setSender(nama, email, dateBorn, jenisKelamin, message ){

}};