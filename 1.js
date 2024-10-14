let input = prompt('Pilih 1 sampai 7');
let hari = "";

switch(input){
    case "1":
    hari = "Senin"
        break;
    case "2":
    hari = "Selasa"
        break;
    case "3":
    hari = "Rabu"
        break;
    case "4":
    hari = "Kamis"
        break;
    case "5":
    hari = "Jumat"
        break;
    case "6":
    hari = "Sabtu"
        break;
    case "7":
    hari = "Minggu"
        break;
    default:
        alert('angka tidak valid')
} if(hari === ""){
    alert('anda tidak memasukkan angka')
} else{
    alert(`hari ${hari}`)
}