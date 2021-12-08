
if (!localStorage.products) {
     // nếu chưa thì tạo mới bằng 1 mảng rỗng
     let arr = [];
     // do localStorage chỉ cho phép lưu chữ dữ liệu dạng chuỗi json nên ta sử dung (ae cũng có thể search xem json là gì)
     localStorage.products = JSON.stringify(arr);
}
// let hello = 'hello';
// Hàm đọc dữ liệu từ localStorage đổ vào bảng => đặt ở đây để ngay khi load trang xong sẽ chạy hàm này để show sản phẩm
if (JSON.parse(localStorage.products).length > 0) {
     showProductDiv();
}
let stringHtml = ``;





function showProductDiv(){
     console.log('showProductDiv');
     let divProduct = document.getElementById("product-list");
     let products = JSON.parse(localStorage.products);
     let stringHtml = '';
     for (let i = 0; i < products.length; i++) {
          let product = products[i];
          stringHtml += `
          <div class="col-sm-3">
               <img src="${product.image}" alt="">
               <p>${product.name}</p>
               <p>${product.description}</p>
          </div>
          `;
     }
     divProduct.innerHTML = stringHtml;
}