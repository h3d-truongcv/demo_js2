// phần này chúng ta thao tác với localStorage
// kiểm tra xem products đã tồn tại trong localStorage hay chưa 
// true || false 
// !true = false
// !false = true
if (!localStorage.products) {
     // nếu chưa thì tạo mới bằng 1 mảng rỗng
     let arr = [];
     // do localStorage chỉ cho phép lưu chữ dữ liệu dạng chuỗi json nên ta sử dung (ae cũng có thể search xem json là gì)
     localStorage.products = JSON.stringify(arr);
}
// let hello = 'hello';
// Hàm đọc dữ liệu từ localStorage đổ vào bảng => đặt ở đây để ngay khi load trang xong sẽ chạy hàm này để show sản phẩm
if (JSON.parse(localStorage.products).length > 0) {
     showProductInTable();
}
function addProduct() {
     // B1
     // lấy value từ các input trong form theo id
     let product_name = document.getElementById('product_name').value;
     let product_image = document.getElementById('product_image').value;
     let product_description = document.getElementById('product_description').value;
     let product_type = document.getElementById('product_type').value;

     // dựa vào các dữ liệu lấy được từ form ta tạo 1 object product
     let product = {
          id: Date.now(), // Date.now() là 1 hàm trả về số timestamp mục đích là để tạo id ko giống nhau => 
          //ae có thể google để biết timestamp nó là cái gì và Date.now() là gì 
          name: product_name,
          image: product_image,
          description: product_description,
          type: product_type,
     }
     // het b1
     // tạo 1 biến products để hứng dữ liệu lấy đc từ localStorage.products 
     // đọc dữ liệu từ localStorage.products ra do dữ liệu từ localStorage.products trả về là 1 chuỗi nên ta cần convert chuỗi json này về mảng để sử dụng được hàm array.push() để add thêm phần từ vào mảng
//     b2
     let products = JSON.parse(localStorage.products); // mảng products

     // b3
     // sử dụng được array.push() để add thêm phần từ vào mảng products
     products.push(product);

     // b4
     // việc còn lại là gán localStorage.products bằng mảng products mới vừa đc add thêm phần tử => nhớ convert array products sang dạng json nha ae
     localStorage.products = JSON.stringify(products);

     // load lại dữ liệu trong bảng sau khi add sản phẩm mới
     // nó có cái hàm để check sự thay đổi của Storage cơ nhưng a thử ko đc có thể chrome nó ko hỗ trợ hàm đấy nữa thôi dùng tạm kiểu này
     showProductInTable();
}


function showProductInTable() {
     // lấy ra phần tử có id bằng table-body
     let tbody = document.getElementById('table-body');

     // đọc dữ liệu từ localStorage.products ra do dữ liệu từ localStorage.products trả về là 1 chuỗi 
     //nên ta cần convert chuỗi json này về mảng để sử dụng được for() để đọc dữ liệu từ mảng

     let products = JSON.parse(localStorage.products);

     // tạo 1 biến stringHtml để hứng 
     let stringHtml = '';
     for (let i = 0; i < products.length; i++) {
          let product = products[i];
          // add dữ liệu product vào từng dòng trong chuỗi 
          // stringHtml += 'abc'   
          // là 1 cách viết tắt của 
          // stringHtml = stringHtml + 'abc'
        
          stringHtml += `
               <tr>
                    <td><img src="${product.image}" width="50px" height="50px"></td>
                    <td>${product.name}</td>
                    <td>${product.type}</td>
                    <td>${product.description}</td>
               </tr>
          `;
     }
     console.log(stringHtml);

     // ghi chuỗi stringHtml vào bảng
     tbody.innerHTML = stringHtml;

     console.log(tbody)

     let name = 'aa';
     let tuoi = 'aa';
     let sdt = 'aa';
     let gioithieu = 'đây là ' + name + ' nam nay ' + tuoi + ' tuoi sdt la ' + sdt;
     let gioithieu2 = `đât là ${name} name nay ${tuoi} tuoi sdt là ${sdt}`;
     // tạo 1 add student.html có 1 input và 1 nút để click
     // 
}


