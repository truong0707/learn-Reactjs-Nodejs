var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const tenSinhVien = 'Thanh Trường';
  const sinhViens = [' Nguyen Van A', 'Nguyen Van B', 'Nguyễn Van C', 'Nguyễn Văn D'];
  const cards = [
    { 
      name: 'Nhà Giả Kim',
      images: 'https://isachhay.net/wp-content/uploads/2017/08/sach-hay-nha-gia-kim.jpg.webp',
      contents: 'Đây là sách cũ'
    },

    { 
      name: 'cc',
      images: 'https://isachhay.net/wp-content/uploads/2017/08/sach-hay-nhung-tam-long-cao-ca.jpg.webp',
      contents: 'Đây là sách cũ'
    },

    { 
      name: 'cc',
      images: 'https://isachhay.net/wp-content/uploads/2017/08/sach-hay-tuoi-tre-dang-gia-bao-nhieu.jpg.webp',
      contents: 'Đây là sách cũ'
    },

    { 
      name: 'cc',
      images: 'https://isachhay.net/wp-content/uploads/2017/08/sach-hay-ty-phu-ban-giay.jpg.webp',
      contents: 'Đây là sách cũ'
    },

    { 
      name: 'cc',
      images: 'https://isachhay.net/wp-content/uploads/2017/08/sach-hay-doc-vi-bat-ky-ai-de-khong-bi-lua-doi-va-loi-dung.jpg.webp',
      contents: 'Đây là sách cũ'
    },

    { 
      name: 'cc',
      images: 'https://isachhay.net/wp-content/uploads/2017/08/sach-hay-ong-gia-va-bien-ca.jpg.webp',
      contents: 'Đây là sách cũ'
    },
    
  ]
  res.render('index', { tenSinhVien: tenSinhVien, array: sinhViens, cards: cards  });
});

module.exports = router;
