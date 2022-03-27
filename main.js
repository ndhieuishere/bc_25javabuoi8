// khai báo mảng lấy số nguyên
var listSoNguyen = [];
function getEle(id) {
  return document.getElementById(id);
}
// thêm số vào mảng
getEle("btnThemSo").addEventListener("click", function () {
  number = getEle("txtNumber1").value * 1;
  listSoNguyen.push(number);
  getEle("footerCard1").style.backgroundColor = "#d4edda";
  getEle("footerCard1").innerHTML = "trong mảng đang có các số:" + listSoNguyen;
});
// câu 1
getEle("btnTongSoDuong").addEventListener("click", function () {
  tong = 0;
  for (var i = 0; i < listSoNguyen.length; i++) {
    if (listSoNguyen[i] > 0) {
      tong += +listSoNguyen[i];
    }
  }
  getEle("footerCard1").style.backgroundColor = "#d4edda";
  getEle("footerCard1").innerHTML = "Tổng các số nguyên trong mảng là:" + tong;
});
// câu 2
getEle("btnDemSo").addEventListener("click", function () {
  var count = 0;
  for (var i = 0; i < listSoNguyen.length; i++) {
    if (listSoNguyen[i] > 0) {
      count++;
    }
  }
  getEle("footerCard1").style.backgroundColor = "#d4edda";
  getEle("footerCard1").innerHTML =
    "có:  " + count + "   số nguyên dương trong mảng";
});
// câu 3
getEle("btnMin").addEventListener("click", function () {
  var smallest = listSoNguyen[0];

  for (var i = 1; i < listSoNguyen.length; i++) {
    if (listSoNguyen[i] < smallest) {
      smallest = listSoNguyen[i];
    }
  }

  getEle("footerCard1").style.backgroundColor = "#d4edda";
  getEle("footerCard1").innerHTML = "số nhỏ nhất trong mảng là : " + smallest;
});
// câu 4
getEle("btnMin2").addEventListener("click", function () {
  var smallest = listSoNguyen[0];

  for (var i = 1; i < listSoNguyen.length; i++) {
    if (listSoNguyen[i] < smallest && listSoNguyen[i] > 0) {
      smallest = listSoNguyen[i];
    }
  }

  getEle("footerCard1").style.backgroundColor = "#d4edda";
  getEle("footerCard1").innerHTML =
    "số dương nhỏ nhất trong mảng là : " + smallest;
});
// câu 5
getEle("btnChan").addEventListener("click", function () {
  var soChan = 0;
  for (var i = 0; i < listSoNguyen.length - 1; i++) {
    if (listSoNguyen[i] % 2 == 0) {
      soChan = listSoNguyen[i];
    }
  }
  for (var i = 0; i < listSoNguyen.length; i++) {
    if (listSoNguyen % 2 != 0) {
      soChan = -1;
    }
  }

  // var soChan = kiemTraChanLe();
  // function kiemTraChanLe() {
  //   if (listSoNguyen[i] % 2 == 0) {
  //     return true;
  //   } else if (listSoNguyen[i] % 2 != 0) {
  //     return false;
  //   }
  // }

  // for (var i = 0; i < listSoNguyen.length-1; i++) {
  //   if (listSoNguyen.length - 1 == soChan) {
  //     listSoNguyen[i] = listSoNguyen.length - 1;
  //   } else {
  //     listSoNguyen[i] = -1;
  //   }
  // }

  getEle("footerCard1").style.backgroundColor = "#d4edda";
  getEle("footerCard1").innerHTML =
    "số chẵn cuối cùng trong mảng là : " + soChan;
});
// câu6
getEle("btnDoiCho").addEventListener("click",function () {
  var A = [1, 2, 3, 4, 5, 6, 7, 8, 9], x= 0, y= 1;
  A[x] = A.splice(y, 1, A[x])[0];
  getEle("footerCard1").style.backgroundColor = "#d4edda";
  getEle("footerCard1").innerHTML =
    "mảng sau khi thay đổi vị trí: " + A;
})
// câu7
getEle("btnSapXepTang").addEventListener("click", function () {
  for (var i = 0; i < listSoNguyen.length - 1; i++) {
    for (var j = i + 1; j < listSoNguyen.length; j++) {
      if (listSoNguyen[i] > listSoNguyen[j]) {
        var temp = listSoNguyen[i];
        listSoNguyen[i] = listSoNguyen[j];
        listSoNguyen[j] = temp;
      }
    }
  }
  getEle("footerCard1").style.backgroundColor = "#d4edda";
  getEle("footerCard1").innerHTML = "sau khi sắp xếp : " + listSoNguyen;
});
// câu 8
getEle("btnTimSoNguyenTo").addEventListener("click", function () {
  var content = "";
  // hàm ktra snt
  function kiem_tra_snt(n) {
    // Biến cờ hiệu
    var flag = true;

    // Nếu n bé hơn 2 tức là không phải số nguyên tố
    if (n < 2) {
      flag = false;
    } else if (n == 2) {
      flag = true;
    } else if (n % 2 == 0) {
      flag = false;
    } else {
      // lặp từ 3 tới n-1 với bước nhảy là 2 (i+=2), khi i>n thì thoát vòng lặp
      for (var i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i == 0) {
          flag = false;
          break;
        }
      }
    }
    return flag;
  }
  for (i = 0; i < listSoNguyen.length; i++)
    // dựa theo giá trị trả về của hàm ktra snt, in ra kq mảng
    if (kiem_tra_snt(listSoNguyen[i])) {
      content = listSoNguyen[i];
    } else if (kiem_tra_snt(listSoNguyen[i])) {
      content = -1;
    }

  getEle("footerCard1").style.backgroundColor = "#d4edda";
  getEle("footerCard1").innerHTML =
    "số nguyên tố đầu tiên trong mảng là : " + content;
});
// câu 9
getEle("btnSoThuc").addEventListener("click",function () {
  for(i=0;i<listSoNguyen.length;i++){}
})


//câu 10
getEle("btnSoSanh").addEventListener("click", function () {
  var countSoDuong = 0;
  var countSoAm = 0;
  var content = "";
  for (var i = 0; i < listSoNguyen.length; i++) {
    if (listSoNguyen[i] > 0) {
      countSoDuong++;
    } else if (listSoNguyen[i] < 0) {
      countSoAm++;
    }
  }

  if (countSoDuong > countSoAm) {
    content = "số dương trong mảng nhiều hơn số âm";
  }
  if (countSoDuong < countSoAm) {
    content = "số âm trong mảng nhiều hơn số dương";
  }
  if (countSoDuong == countSoAm) {
    content = "số âm và số dương trong mảng có số lượng bằng nhau";
  }

  getEle("footerCard1").style.backgroundColor = "#d4edda";
  getEle("footerCard1").innerHTML = "sau khi sắp xếp : " + content;
});

