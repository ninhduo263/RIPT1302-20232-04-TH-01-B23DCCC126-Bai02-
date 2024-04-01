function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    if (username === 'admin' && password === 'admin') {
      document.querySelector('.login-container').style.display = 'none';
      document.querySelector('.admin-container').style.display = 'block';
      displayStudents(); // Hiển thị danh sách sinh viên khi đăng nhập thành công
    } else {
      document.getElementById('error-message').textContent = 'Tài khoản hoặc mật khẩu không chính xác';
    }
  }
  
  // Mảng lưu trữ danh sách sinh viên (được giả lập ở đây)
  var students = [
    { id: 1, name: 'Nguyễn Văn A', age: 20, address: 'Hà Nội', phone: '0123456789', email: 'example@gmail.com', class: '12A' },
    { id: 2, name: 'Trần Thị B', age: 21, address: 'Hồ Chí Minh', phone: '0987654321', email: 'example2@gmail.com', class: '12B' }
  ];
  
  function displayStudents() {
    var table = '<h2>Danh sách sinh viên</h2><table border="1"><tr><th>STT</th><th>Tên</th><th>Tuổi</th><th>Địa chỉ</th><th>SDT</th><th>Email</th><th>Lớp học</th><th>Thao tác</th></tr>';
  
    students.forEach(function(student, index) {
      table += '<tr>';
      table += '<td>' + (index + 1) + '</td>';
      table += '<td>' + student.name + '</td>';
      table += '<td>' + student.age + '</td>';
      table += '<td>' + student.address + '</td>';
      table += '<td>' + student.phone + '</td>';
      table += '<td>' + student.email + '</td>';
      table += '<td>' + student.class + '</td>';
      table += '<td><button onclick="editStudent(' + student.id + ')">Sửa</button> <button onclick="deleteStudent(' + student.id + ')">Xóa</button></td>';
      table += '</tr>';
    });
  
    table += '</table>';
    document.querySelector('.admin-container').innerHTML = table;
  }
  
  function editStudent(id) {
    // Xử lý chức năng sửa thông tin sinh viên
    alert('Chức năng sửa đang được phát triển');
  }
  
  function deleteStudent(id) {
    // Xử lý chức năng xóa thông tin sinh viên
    alert('Chức năng xóa đang được phát triển');
  }
  