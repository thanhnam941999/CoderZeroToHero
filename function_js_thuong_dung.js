// Hàm thay thế ký tự trong chuỗi
let date = '09-04-1999'
let result = ''
result = date.replace(/-/, "/")
// result =  '09/04-1999'
result = date.replace(/-/g, "/")
// result =  '09/04/1999' khi thêm cờ g(global) vào regex sẽ thay đổi toàn bộ ký tự xuất hiện trong chuõi.
