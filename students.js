var students = ['Lee', 'William', 'Leila', 'Brandon', 'Jordan', 'Billy', 'Jimmy', 'Jeremy', 'Tom']
var awesome = students.map(student => student + " is awesome");
var plural = students.map(student => student + "s");
var name = students.filter(student => student.length = 5)