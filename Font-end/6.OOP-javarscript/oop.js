// function People(name, age, sex, address){
//     this.name = name,
//     this.age = age,
//     this.sex = sex,
//     this.address = address,
//     this.play = function(){
//         console.log(this.name + " " + "play game")
//     }
// }

// var truong = new People('Trường', 18, "male", "K3/22 hà văn trí")
// truong.play()

// console.log(truong)








function Vandongvien(ma_van_dong_vien, ho_va_ten, ngay_sinh, giai_thuong, kiem_tra_dieu_kien, themGT, DSGT) {
    this.ma_van_dong_vien = ma_van_dong_vien,
        this.ho_va_ten = ho_va_ten,
        this.ngay_sinh = ngay_sinh,
        this.giai_thuong = giai_thuong,
        this.kiem_tra_dieu_kien = function () {
            if (this.ngay_sinh < 18) {
                console.log("chưa đủ tủi")
            }
        },
        this.themGT = function (NgayTC, SoTuoi) {

        },
        this.DSGT = function () {

        }

}


var Truong = new Vandongvien(48269, "Nguyễn thanh Trường", 17, 10)
Truong.kiem_tra_dieu_kien()


console.log(Truong)