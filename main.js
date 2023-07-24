const prompt = require('prompt-sync')();
const fs = require('fs');
const lecturerData = JSON.parse(fs.readFileSync('./schoolManagement/lecturerData.json'))
const studentData = JSON.parse(fs.readFileSync('./schoolManagement/studentData.json'))
const allStudentCourseData = JSON.parse(fs.readFileSync('./schoolManagement/allStudentCourseData.json'))
const allLecturerCourseData = JSON.parse(fs.readFileSync('./schoolManagement/allLecturerCourseData.json'))
const math = require('mathjs');
const year = new Date().getFullYear();
const date = new Date().toLocaleDateString('en-GB')
const time = new Date().toLocaleTimeString()



function signUpSelect() {
    console.clear()
    console.log('---------- SIGN UP ---------------')
    let selelctUser = prompt('Enter 1 to Sign-Up as a student or 2 to Sign-Up as a lecturer: ')
    if (selelctUser == 1) {
        studentSignUp()
    } else if (selelctUser == 2) {
        lecturerSignUp()
    } else (
        console.log('Please Enter a valid Input'),
        signUpSelect()
    )
}
class User {
    id;
    fullName;
    phoneNumber;
    homeAddress;
    emailAddress;
    dateOfBirth;
    gender;
    department;
    username;
    password;
    status;
    courses;
    paymentHistory;
    acc;
    constructor(id, fullName, phoneNumber, homeAddress, emailAddress, dateOfBirth, gender, department, username, password, status, courses, paymentHistory, acc) {
        this.id = id;
        this.fullName = fullName;
        this.phoneNumber = phoneNumber;
        this.homeAddress = homeAddress;
        this.emailAddress = emailAddress;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.department = department;
        this.username = username;
        this.password = password;
        this.status = status;
        this.courses = courses;
        this.paymentHistory = paymentHistory;
        this.acc = acc;
    }
    get getUsername() {
        return this.username
    }
}
function studentSignUp() {
    console.clear()
    console.log('---------- STUDENT SIGN-UP -------------')
    let id;
    let fullName;
    let phoneNumber;
    let homeAddress;
    let emailAddress;
    let dateOfBirth;
    let gender;
    let department;
    let username;
    let password;
    let status = 'not paid';
    let courses = [];
    let paymentHistory = [];
    let acc = 0;

    while (true) {
        let input = prompt('Enter Your Full Name: ').toLowerCase()
        if (/^[a-zA-Z ]+$/.test(input)) {
            fullName = input
            false
            break
        } else if (input == '') {
            console.log('Field cannot be blank')
            true
        } else {
            console.log('Invalid Name Input')
            true
        }
    }
    while (true) {
        let number = prompt('Enter Your Phone Number: ').toLowerCase()
        if (/^[0-9]+$/.test(number) && number.length == 11) {
            phoneNumber = number
            false
            break
        } else if (number == '') {
            console.log('Field cannot be blank')
            true
        } else {
            console.log('Invalid Phone Number')
            true
        }
    }
    while (true) {
        let address = prompt('Enter Your home address: ').toLowerCase()
        if (/^[a-zA-Z0-9 ]+$/.test(address)) {
            homeAddress = address
            false
            break
        } else if (address == '') {
            console.log('Field cannot be blank')
            true
        } else {
            console.log('Invalid address')
            true
        }
    }
    while (true) {
        let email = prompt('Enter Your email address: ').toLowerCase()
        if (/^\S+@\S+\.\S+$/.test(email)) {
            emailAddress = email
            false
            break
        } else if (email == '') {
            console.log('Field cannot be blank')
            true
        } else {
            console.log('Invalid address')
            true
        }
    }
    while (true) {
        let dob = prompt('Enter Your date of birth in the format DD-MM-YYYY: ')
        //const dob = new Date(dateOfBirth).toLocaleDateString('en-GB')
        if (/^\d{2}-\d{2}-\d{4}$/.test(dob)) {
            dateOfBirth = dob
            false
            break
        } else if (dob == '') {
            console.log('Field cannot be blank')
            true
        } else {
            console.log('Invalid date')
            true
        }
    }
    while (true) {
        let choice = prompt('Enter Your gender, M for male or F for female: ').toUpperCase()
        if (choice == 'M') {
            gender = 'Male'
            false
            break
        } else if (choice == 'F') {
            gender = 'Female'
            false
            break
        } else if (choice == '') {
            console.log('Field cannot be blank')
            true
        } else {
            console.log('Invalid Input')
            true
        }
    }
    console.clear()
    while (true) {
        console.log('Select a Course of Study ')
        console.log('1 for Physics')
        console.log('2 for Mathathemics')
        let select = prompt(': ')
        if (select == 1) {
            department = 'Physics'
            false
            break
        } else if (select == 2) {
            department = 'Mathathemics'
            false
            break
        } else if (select == '') {
            console.log('Field cannot be blank')
            true
        } else {
            console.log('Invalid input')
            true
        }
    }
    while (true) {
        let pass = prompt('create your password: ')
        let confirmPass = prompt('confirm Password: ')
        if (pass == confirmPass) {
            console.log('Password created succesfully')
            password = pass
            false
            break
        } else {
            console.log('Password does not match')
            true
        }
    }
    var randomName = fullName.substring(0, 4)
    var randNum = math.floor(math.random() * 100 + 100)
    let generatedName = randomName + '.student' + randNum
    username = generatedName
    getId()
    function getId() {
        let number = studentData.length
        if (department === 'Physics') {
            id = 'U' + year + '/' + '55200' + number
        } else if (department === 'Mathathemics') {
            id = 'U' + year + '/' + '66200' + number
        }
    }
    while (true) {
        console.log('Please Confirm Your Details')
        console.log(`FullName: ${fullName}`)
        console.log(`PhoneNumber: ${phoneNumber}`)
        console.log(`HomeAddress: ${homeAddress}`)
        console.log(`EmailAddress: ${emailAddress}`)
        console.log(`DateOfBirth: ${dateOfBirth}`)
        console.log(`Gender: ${gender}`)
        console.log(`Department: ${department}`)
        let confrim = prompt('Enter 1 to confirm or 2 to restart registration: ')
        if (confrim == 1) {
            break
        }
        if (confrim == 2) {
            studentSignUp()
        }
        if (confrim > 2) {
            continue
        }

    }

    const student = new User(id, fullName, phoneNumber, homeAddress, emailAddress, dateOfBirth, gender, department, username, password, status, courses, paymentHistory, acc);
    studentData.push(student)
    fs.writeFileSync('./schoolManagement/studentData.json', JSON.stringify(studentData))
    function loadAnimation() {
        console.clear()
        const loading = setInterval(() => {
            process.stdout.write('.')
        }, 500);
        process.stdout.write('Creating Your Account')
        return new Promise((resolve) => {
            setTimeout(() => {
                clearInterval(loading);
                console.log(`\nCongratulations You have succefully registered\nYour Username is ${student.getUsername}`)
                resolve()
            }, 7000)
        })
    }
    loadAnimation().then(() => {
        console.log(`Id: ${student.id}`)
        console.log(`FullName: ${student.fullName}`)
        console.log(`PhoneNumber: ${student.phoneNumber}`)
        console.log(`HomeAddress: ${student.homeAddress}`)
        console.log(`EmailAddress: ${student.emailAddress}`)
        console.log(`DateOfBirth: ${student.dateOfBirth}`)
        console.log(`Gender: ${student.gender}`)
        console.log(`Department: ${student.department}`)
        while (true) {
            let proceed = prompt("\nPress Enter to Contine...")
            if (proceed !== '') {
                console.clear()
                continue;
            } else {
                console.clear()
                signIn()
                break
            }
        }

    }
    )
}
function lecturerSignUp() {
    console.clear()
    console.log('---------- LECTURER SIGN-UP -------------')
    let id;
    let fullName;
    let phoneNumber;
    let homeAddress;
    let emailAddress;
    let dateOfBirth;
    let gender;
    let department;
    let username;
    let password;
    let status = 'not paid'
    let courses = [];
    let paymentHistory = [];
    let acc = 0;
    while (true) {
        let input = prompt('Enter Your Full Name: ').toLowerCase()
        if (/^[a-zA-Z ]+$/.test(input)) {
            fullName = input
            false
            break
        } else if (input == '') {
            console.log('Field cannot be blank')
            true
        } else {
            console.log('Invalid Name Input')
            true
        }
    }
    while (true) {
        let number = prompt('Enter Your Phone Number: ').toLowerCase()
        if (/^[0-9]+$/.test(number) && number.length == 11) {
            phoneNumber = number
            false
            break
        } else if (number == '') {
            console.log('Field cannot be blank')
            true
        } else {
            console.log('Invalid Phone Number')
            true
        }
    }
    while (true) {
        let address = prompt('Enter Your home address: ').toLowerCase()
        if (/^[a-zA-Z0-9 ]+$/.test(address)) {
            homeAddress = address
            false
            break
        } else if (address == '') {
            console.log('Field cannot be blank')
            true
        } else {
            console.log('Invalid address')
            true
        }
    }
    while (true) {
        let email = prompt('Enter Your email address: ').toLowerCase()
        if (/^\S+@\S+\.\S+$/.test(email)) {
            emailAddress = email
            false
            break
        } else if (email == '') {
            console.log('Field cannot be blank')
            true
        } else {
            console.log('Invalid address')
            true
        }
    }
    while (true) {
        let dob = prompt('Enter Your date of birth in the format DD-MM-YYYY: ')
        //const dob = new Date(dateOfBirth).toLocaleDateString('en-GB')
        if (/^\d{2}-\d{2}-\d{4}$/.test(dob)) {
            dateOfBirth = dob
            false
            break
        } else if (dob == '') {
            console.log('Field cannot be blank')
            true
        } else {
            console.log('Invalid date')
            true
        }
    }
    while (true) {
        let choice = prompt('Enter Your gender, M for male or F for female: ').toUpperCase()
        if (choice == 'M') {
            gender = 'Male'
            false
            break
        } else if (choice == 'F') {
            gender = 'Female'
            false
            break
        } else if (choice == '') {
            console.log('Field cannot be blank')
            true
        } else {
            console.log('Invalid Input')
            true
        }
    }
    console.clear()
    while (true) {
        console.log('Select a Department to Teach ')
        console.log('1 for Physics')
        console.log('2 for Mathathemics')
        let select = prompt(': ')
        if (select == 1) {
            department = 'Physics'
            false
            break
        } else if (select == 2) {
            department = 'Mathematics'
            false
            break
        } else if (select == '') {
            console.log('Field cannot be blank')
            true
        } else {
            console.log('Invalid input')
            true
        }
    }
    while (true) {
        let pass = prompt('create your password: ')
        let confirmPass = prompt('confirm Password: ')
        if (pass == confirmPass) {
            console.log('Password created succesfully')
            password = pass
            false
            break
        } else {
            console.log('Password does not match')
            true
        }
    }
    console.clear()
    let attempts = 0;
    while (true) {
        console.log('To Complete Your Registeration Please Enter The Token Provided To You By The School')
        let validate = prompt('Enter Your Lecturer Token: ')
        if (validate == 'lec2023') {
            console.log('Validation Succefull')
            break
        } else {
            attempts++
            if (attempts <= 2) {
                console.log(`Incorrect Token, You will automatically be kicked-out after 3 failed attempts\nYou have ${3 - attempts} attempts left`);
                true;
            } else {
                console.log(`Maxium number of attempts reached!`)
                return console.log('GoodBye')
            }
            continue
        }
    }
    var randomName = fullName.substring(0, 4)
    var randNum = math.floor(math.random() * 100 + 100)
    let generatedName = randomName + '.lecturer' + randNum
    username = generatedName

    getId()
    function getId() {
        let number = lecturerData.length
        if (department === 'Physics') {
            id = 'U' + year + '/' + 'LEC/550' + number
        } else if (department === 'Mathathemics') {
            id = 'U' + year + '/' + 'LEC/660' + number
        }
    }

    while (true) {
        console.log('Please Confirm Your Details')
        console.log(`FullName: ${fullName}`)
        console.log(`PhoneNumber: ${phoneNumber}`)
        console.log(`HomeAddress: ${homeAddress}`)
        console.log(`EmailAddress: ${emailAddress}`)
        console.log(`DateOfBirth: ${dateOfBirth}`)
        console.log(`Gender: ${gender}`)
        console.log(`Department: ${department}`)
        let confrim = prompt('Enter 1 to confirm or 2 to restart registration: ')
        if (confrim == 1) {
            break
        }
        if (confrim == 2) {
            lecturerSignUp()
        }
        if (confrim > 2) {
            continue
        }

    }

    const lecturer = new User(id, fullName, phoneNumber, homeAddress, emailAddress, dateOfBirth, gender, department, username, password, status, courses, paymentHistory, acc);
    lecturerData.push(lecturer)
    fs.writeFileSync('./schoolManagement/lecturerData.json', JSON.stringify(lecturerData))
    function loadAnimation() {
        console.clear()
        const loading = setInterval(() => {
            process.stdout.write('.')
        }, 500);
        process.stdout.write('Creating Your Account')
        return new Promise((resolve) => {
            setTimeout(() => {
                clearInterval(loading);
                console.log(`\nCongratulations You have succefully registered\nYour Username is ${lecturer.getUsername}`)
                resolve()
            }, 7000)
        })
    }
    loadAnimation().then(() => {
        console.log(`id: ${lecturer.id}`)
        console.log(`FullName: ${lecturer.fullName}`)
        console.log(`PhoneNumber: ${lecturer.phoneNumber}`)
        console.log(`HomeAddress: ${lecturer.homeAddress}`)
        console.log(`EmailAddress: ${lecturer.emailAddress}`)
        console.log(`DateOfBirth: ${lecturer.dateOfBirth}`)
        console.log(`Gender: ${lecturer.gender}`)
        console.log(`Department: ${lecturer.department}`)
        while (true) {
            let proceed = prompt("\nPress Enter to Contine...")
            if (proceed !== '') {
                console.clear()
                console.log('Please press enter to continue..')
                false
            } else {
                console.clear()
                signIn()
                break
            }
        }

    }
    )
}
function signIn() {
    console.log('---------- SIGN IN ---------------')
    console.log('Please Enter Your Details')
    let username = prompt('Username: ').toLowerCase()
    let password = prompt('Password:')
    loadAnimation().then(() => {
        if (username.includes('student')) {
            const user = studentData.find(user => user.username === username && user.password === password);
            if (user) {
                let loggedInUser = user
                console.clear()
                console.log(`WELCOME ${user.fullName}`.toUpperCase())
                studentMenu(loggedInUser)
            } else {
                console.clear()
                console.log('Invalid Username or Password')
                signIn()
            }
        } else if (username.includes('lecturer')) {
            const user = lecturerData.find(user => user.username === username && user.password === password);
            if (user) {
                let loggedInUser = user
                console.clear()
                console.log(`WELCOME PROFESSOR ${user.fullName}`.toUpperCase())
                lecturerMenu(loggedInUser)
            } else {
                console.clear()
                console.log('Invalid Username or Password')
                signIn()
            }
        } else {
            console.clear()
            console.log('Invalid Username or Password')
            signIn()
        }
    })
    function loadAnimation() {
        const loading = setInterval(() => {
            process.stdout.write('.')
        }, 450);
        process.stdout.write('Signing in')
        return new Promise((resolve) => {
            setTimeout(() => {
                clearInterval(loading);
                resolve()
            }, 3000)
        })
    }

}
function studentMenu(loggedInUser) {
    console.log('-----------STUDENT MENU --------------')
    console.log('1. Student Profile')
    console.log('2. Register Courses')
    console.log('3. Enter Class')
    console.log('4. View Student Handbook')
    console.log('5. View Class Time Table')
    console.log('6. View Registered Courses')
    console.log('7. Student Account')
    console.log('8. Payment History')
    console.log('9. Download Assignments/lecture Notes')
    console.log('10. Log Out')
    input = parseInt(prompt('what operation would you like to perform? : '));
    if (input == 1) {
        console.clear()
        studentProfile(loggedInUser);
    } else if (input == 2) {
        console.clear()
        registerCourses(loggedInUser)
    } else if (input == 3) {
        console.clear()
        enterClass(loggedInUser);
    } else if (input == 4) {
        console.clear()
        studentHandBook(loggedInUser)
    } else if (input == 5) {
        console.clear()
        studentClassTimeTable()
    } else if (input == 6) {
        console.clear()
        viewRegisteredCourses(loggedInUser)
    } else if (input == 7) {
        console.clear()
        studentAcc(loggedInUser);
    } else if (input == 8) {
        console.clear()
        paymentHistory(loggedInUser);
    } else if (input == 9) {
        console.clear();
        assignments()
    } else if (input == 10) {
        console.clear()
        return logOut();
    } else {
        console.clear()
        console.log('Please enter a valid input')
        studentMenu(loggedInUser);
    }
    function studentProfile(loggedInUser) {
        if (loggedInUser) {
            console.clear();
            console.log('------------ STUDENT PROFILE -----------')
            console.log(`Id: ${loggedInUser.id}`.toUpperCase());
            console.log(`Name: ${loggedInUser.fullName}`.toUpperCase());
            console.log(`Username: ${loggedInUser.username}`.toUpperCase());
            console.log(`Phone Number: ${loggedInUser.phoneNumber}`.toUpperCase())
            console.log(`Home Address: ${loggedInUser.homeAddress}`.toUpperCase())
            console.log(`Email Address: ${loggedInUser.emailAddress}`.toUpperCase())
            console.log(`Date of Birth: ${loggedInUser.dateOfBirth}`.toUpperCase())
            console.log(`Gender: ${loggedInUser.gender}`.toUpperCase())
            console.log(`Department: ${loggedInUser.department}`.toUpperCase())
            console.log(`School Fee Status: ${loggedInUser.status}`.toUpperCase())

        }
        returnToMenu(loggedInUser)
    }
    function registerCourses(loggedInUser) {
        console.clear();
        console.log('------------ REGISTER COURSES -----------')
        if (loggedInUser) {
            if (loggedInUser.courses.length !== 0) {
                console.log('You have already registered your courses for the semester')
                returnToMenu(loggedInUser)
            } else {
                courseSelection()
                function courseSelection() {
                    console.log('Select Five Courses You Would Like To Register');
                    console.log('Your Three Departmental Courses(d) are compulsory, One General(g) and One Elective(e)');
                    if (loggedInUser.department == 'Mathematics') {
                        console.log('1. MTH 110.1 (d)');
                        console.log('2. MTH 120.1 (d)')
                        console.log('3. MTH 130.1 (d)')
                        console.log('4. GES 100.1 (g)')
                        console.log('5. GES 102.1 (g)')
                        console.log('6. PHY 102.1 (e)')
                        console.log('7. CHM 130.1 (e)')
                        const allCourses = ['', 'MTH 110.1', 'MTH 120.1', 'MTH 130.1', 'GES 100.1', 'GES 102.1', 'PHY 102.1', 'CHM 130.1',];
                        const selectedCourses = []
                        while (selectedCourses.length < 5) {
                            const select = parseInt(prompt(`Select Course: `))
                            if (select < 0 || select > allCourses.length || select == 0 || !/^[0-9]+$/.test(select)) {
                                console.log(`Invalid input. Please try again.`);
                                continue;
                            }
                            if (selectedCourses.includes(allCourses[select])) {
                                console.log(`Course already selected. Please try again.`);
                                continue;
                            }
                            selectedCourses.push(allCourses[select])
                            console.log(`You selected: ${selectedCourses}`)
                        }
                        console.log(`Courses: ${selectedCourses}\n`);
                        if ((selectedCourses.includes('MTH 110.1') && selectedCourses.includes('MTH 120.1') && selectedCourses.includes('MTH 130.1')) && (selectedCourses.includes('GES 100.1') && !selectedCourses.includes('GES 102.1')) || (!selectedCourses.includes('GES 100.1') && selectedCourses.includes('GES 102.1')) && (selectedCourses.includes('PHY 102.1') && !selectedCourses.includes('CHM 130.1')) || (!selectedCourses.includes('PHY 102.1') && selectedCourses.includes('CHM 130.1'))) {
                            while (true) {
                                let confirm = prompt('Enter 1 to confirm selection or 2 to restart registeration: ')
                                if (confirm == 1) {
                                    console.log(`Registeration Succefull`)
                                    studentData.push(loggedInUser.courses.push(...selectedCourses));
                                    fs.writeFileSync('./schoolManagement/studentData.json', JSON.stringify(studentData))
                                    let fullName = loggedInUser.fullName;
                                    let courses = selectedCourses;
                                    allStudentCourseData.push({ fullName, courses })
                                    fs.writeFileSync('./schoolManagement/allStudentCourseData.json', JSON.stringify(allStudentCourseData))
                                    returnToMenu(loggedInUser)
                                    break
                                } else if (confirm == 2) {
                                    courseSelection()
                                    break
                                } else {
                                    console.log('Invalid Input\n')
                                }
                            }
                        } else {
                            console.log(`Courses selected does not meet the selection standard, Please Try again!\n`)
                            courseSelection()
                        }
                    } else if (loggedInUser.department == 'Physics') {
                        console.log('1. PHY 101.1 (d)')
                        console.log('2. PHY 102.1 (d)')
                        console.log('3. PHY 103.1 (d)')
                        console.log('4. GES 100.1 (g)')
                        console.log('5. GES 102.1 (g)')
                        console.log('6. MTH 110.1 (e)')
                        console.log('7. CHM 130.1 (e)')
                        const allCourses = ['', 'PHY 101.1', 'PHY 102.1', 'PHY 103.1', 'GES 100.1', 'GES 102.1', 'MTH 110.1', 'CHM 130.1',];
                        const selectedCourses = []
                        while (selectedCourses.length < 5) {
                            const select = parseInt(prompt(`Select Course: `))
                            if (select < 0 || select > allCourses.length || select == 0 || !/^[0-9]+$/.test(select)) {
                                console.log(`Invalid input. Please try again.`);
                                continue;
                            }
                            if (selectedCourses.includes(allCourses[select])) {
                                console.log(`Course already selected. Please try again.`);
                                continue;
                            }
                            selectedCourses.push(allCourses[select])
                            console.log(`You selected: ${selectedCourses}`)
                        }
                        console.log(`Courses: ${selectedCourses}\n`);
                        if ((selectedCourses.includes('PHY 101.1') && selectedCourses.includes('PHY 102.1') && selectedCourses.includes('PHY 103.1')) && (selectedCourses.includes('GES 100.1') && !selectedCourses.includes('GES 102.1')) || (!selectedCourses.includes('GES 100.1') && selectedCourses.includes('GES 102.1')) && (selectedCourses.includes('MTH 110.1') && !selectedCourses.includes('CHM 130.1')) || (!selectedCourses.includes('MTH 110.1') && selectedCourses.includes('CHM 130.1'))) {
                            while (true) {
                                let confirm = prompt('Enter 1 to confirm selection or 2 to restart registeration: ')
                                if (confirm == 1) {
                                    console.log(`Registeration Succefull`)
                                    studentData.push(loggedInUser.courses.push(...selectedCourses));
                                    fs.writeFileSync('studentData.json', JSON.stringify(studentData))
                                    let fullName = loggedInUser.fullName;
                                    let courses = selectedCourses;
                                    allStudentCourseData.push({ fullName, courses })
                                    fs.writeFileSync('./schoolManagement/allStudentCourseData.json', JSON.stringify(allStudentCourseData))
                                    returnToMenu(loggedInUser)
                                    break
                                } else if (confirm == 2) {
                                    courseSelection()
                                    break
                                } else {
                                    console.log('Invalid Input\n')
                                }
                            }
                        } else {
                            console.log(`Courses selected does not meet the selection standard, Please Try again!\n`)
                            courseSelection()
                        }
                    }
                }
            }
        }
    }
    function viewRegisteredCourses(loggedInUser) {
        if (loggedInUser) {
            console.clear()
            console.log('------------ REGISTERED COURSES ----------')
            if (loggedInUser.courses.length != 0) {
                loggedInUser.courses.forEach(course => console.log(course))
            } else {
                console.log('You Have Not Registered Any Course Yet')
            }
        }
        returnToMenu(loggedInUser)
    }
    function enterClass(loggedInUser) {
        console.log('--------------- CLASS ---------------')
        if (loggedInUser) {
            const date = new Date()
            const currentTime = date.getHours()
            if (currentTime >= 8 && currentTime < 10) {
                console.log('MTH110.1 Class In Progress')
            }
            if (currentTime >= 10 && currentTime < 12) {
                console.log('MTH130.1 Class In Progress')
            }
            if (currentTime >= 12 && currentTime < 14) {
                console.log('PHY103.1 Class In Progress')
            }
            if (currentTime >= 14 && currentTime < 16) {
                console.log('PHY102.1 Class In Progress')
            }

            console.log('No Class In Progress')

        }
        returnToMenu(loggedInUser)
    }
    function studentHandBook(loggedInUser) {
        if (loggedInUser.department == 'Mathematics') {
            console.clear()
            console.log('------------- MATHEMATICS DEPARTMENT HANDBOOK -------------')
            console.log('100 LEVEL FIRST SEMESTER')
            console.log('MTH 110.1: ALGEBRA AND TRIGONOMETRY ')
            console.log('MTH 120.1: CALCULUS')
            console.log('MTH 130.1: CALCULUS WITH APPLICATIONS')
            console.log('GES 100.1: COMMUNICATION SKILL IN ENGLISH')
            console.log('GES 102.1: INTRODUCTION TO LOGIC AND PHILOSOPHY')
            console.log('PHY 102.1: PHYSICS LABORATORY ')
            console.log('CHM 130.1: GENERAL CHEMISTRY\n')
            console.log('100 LEVEL SECOND SEMESTER')
            console.log('MTH 124.2: COORDINATE GEOMETRY ')
            console.log('MTH 111.2: ELEMENTARY MATHEMATICS I ')
            console.log('MTH 121.2: ELEMENTARY MATHEMATICS II')
            console.log('GES 101.2: COMPUTER APPRECIATION AND APPLICATION ')
            console.log('GES 103.2: NIGERIAN PEOPLE AND CULTURE ')
            console.log('PHY 103.2: PHYSICS LABORATORY II ')
            console.log('CHM 131.2: GENERAL CHEMISTR II\n')

        } else if (loggedInUser.department == 'Physics') {
            console.clear()
            console.log('------------- PHYSICS DEPARTMENT HANDBOOK -------------')
            console.log('100 LEVEL FIRST SEMESTER')
            console.log('PHY 101.1: MECHANICS AND PROPERTIES OF MATTER')
            console.log('PHY 102.1: PHYSICS LABORATORY ')
            console.log('PHY 103.1: GENERAL PHYSIC III')
            console.log('GES 100.1: COMMUNICATION SKILL IN ENGLISH')
            console.log('GES 102.1: INTRODUCTION TO LOGIC AND PHILOSOPHY')
            console.log('MTH 110.1: ALGEBRA AND TRIGONOMETRY ')
            console.log('CHM 130.1: GENERAL CHEMISTRY\n')
            console.log('100 LEVEL SECOND SEMESTER')
            console.log('PHY 112.2: ELECTRICITY AND MAGNETISM')
            console.log('PHY 124.2: GEOMETRIC AND WAVE OPTICS')
            console.log('PHY 103.2: PHYSICS LABORATORY II')
            console.log('GES 101.2: COMPUTER APPRECIATION AND APPLICATION ')
            console.log('GES 103.2: NIGERIAN PEOPLE AND CULTURE ')
            console.log('MTH 111.2: ELEMENTARY MATHEMATICS I ')
            console.log('CHM 131.2: GENERAL CHEMISTR II\n')
        }
        returnToMenu(loggedInUser)
    }
    function paymentHistory(loggedInUser) {
        console.log('-------- PAYMENT HISTORY -----------')
        if (loggedInUser.paymentHistory.length !== 0) {
            //loggedInUser.paymentHistory.forEach(payment => console.log(payment))
            let allTransactions = loggedInUser.paymentHistory
            for (i = 0; i < allTransactions.length; i++) {
                const result = allTransactions[i]
                console.log(`Type: ${result.Type}, Amount: ${result.Amount}, Date: ${result.Date}`)
            }
        } else {
            console.log('No Payment Made Yet')
        }
        returnToMenu(loggedInUser)
    }
    function studentAcc(loggedInUser) {
        console.log('-------- STUDENT ACCOUT-----------')
        if (loggedInUser) {
            console.log('1. Account Balance')
            console.log('2. Fund Account')
            console.log('3. Pay School Fee')
            let input = prompt('select: ')
            if (input == 1) {
                console.clear()
                console.log(`Name: ${loggedInUser.fullName}`.toUpperCase());
                console.log(`Account Balance: #${loggedInUser.acc}`.toUpperCase());
                returnToMenu(loggedInUser)
            } else if (input == 2) {
                console.clear()
                fundAcc()
                function fundAcc() {
                    amt = parseInt(prompt('How much Would You Like To Deposit: #'))
                    checkAmt(amt)
                    function checkAmt(amt) {
                        if (isNaN(amt) == true) {
                            console.log(`Invalid amount`);
                            cont()
                        } else if (amt <= 0) {
                            console.log(`Invalid amount`);
                            cont()
                        } else {
                            studentData.push(loggedInUser.acc += amt)
                            fs.writeFileSync('./schoolManagement/studentData.json', JSON.stringify(studentData))
                            console.log(`\nYou have successfully funded your student acc with #${amt}`)
                            returnToMenu(loggedInUser)
                        }
                    }

                }
            } else if (input == 3) {
                console.clear()
                payFee()
                function payFee() {
                    console.log('-------------- FEE PAYMENT ---------------')
                    console.log('Outstanding Fee: #50000')
                    let input = prompt('Press 1 to proceed with payment or 2 to cancel: ')
                    if (input == 1) {
                        if (loggedInUser.acc >= 50000) {
                            studentData.push(loggedInUser.acc -= 50000)
                            studentData.push(loggedInUser.status = 'Paid')
                            studentData.push(loggedInUser.paymentHistory.push({ Type: 'School Fee Payment', Amount: `-#50000`, Date: `${date} at ${time}` }))
                            fs.writeFileSync('./schoolManagement/studentData.json', JSON.stringify(studentData))
                            console.log('School Fee Payment Successfull')
                            returnToMenu(loggedInUser)
                        } else {
                            console.log('Insufficient Fund in Student account, please fund your student account first')
                            returnToMenu(loggedInUser)
                        }
                    } else if (input == 2) {
                        returnToMenu(loggedInUser)
                    } else {
                        payFee()
                    }
                }
            } else {
                console.log('Invalid Input')
                studentAcc(loggedInUser)
            }
        }
    }
    function studentClassTimeTable() {
        console.log('----------------- TIME TABLE ----------------')
        const headers = ["TIME", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"];
        let timetable = [{ TIME: '8AM - 10AM', MONDAY: 'MTH 110.1', TUESDAY: 'MTH120.1', WEDNESDAY: 'GES100.1', THURSDAY: 'GES102.1', FRIDAY: 'PHY 102.1' },
        { TIME: '10AM - 12PM', MONDAY: 'MTH 130.1', TUESDAY: 'PHY102.1', WEDNESDAY: 'CHEM130.1', THURSDAY: 'PHY102.1', FRIDAY: 'PHY 101.1' },
        { TIME: '12PM - 2PM', MONDAY: 'PHY 103.1', TUESDAY: 'GES100.1', WEDNESDAY: 'GES102.1', THURSDAY: 'MTH110.1', FRIDAY: 'CHEM130.1' },
        { TIME: '2PM - 4PM', MONDAY: 'PHY 102.1', TUESDAY: 'CHM130.1', WEDNESDAY: 'PHY101.1', THURSDAY: 'MTH130.1', FRIDAY: 'PHY102.1' },
        ]
        console.table(timetable, headers)

        returnToMenu(loggedInUser)
    }

    function returnToMenu(loggedInUser) {
        var num = prompt('Press enter to return to main menu : ')
        if (num == '') {
            console.clear()
            studentMenu(loggedInUser)
        } else {
            console.log('Please Enter a valid Input')
            returnToMenu(loggedInUser)
        }
    }
}
function lecturerMenu(loggedInUser) {
    console.log('-----------LECTURER MENU --------------')
    console.log('1. Lecturer Profile')
    console.log('2. Register Course To Teach')
    console.log('3. View Registered Students')
    console.log('4. Enter Class')
    console.log('5. Lecturer Account')
    console.log('6. View Class Time Table')
    console.log('7. Salary History')
    console.log('8. Upload Assignment/lecture Note')
    console.log('9. Log Out')
    input = parseInt(prompt('what operation would you like to perform? : '));
    if (input == 1) {
        console.clear()
        lecturerProfile(loggedInUser);
    } else if (input == 2) {
        console.clear()
        registerCourseToTeach(loggedInUser)
    } else if (input == 3) {
        console.clear()
        viewRegisteredStudents(loggedInUser)
    } else if (input == 4) {
        console.clear()
        startClass();
    } else if (input == 5) {
        console.clear()
        lecturerAcc(loggedInUser)
    } else if (input == 6) {
        console.clear()
        viewTimeTable()
    } else if (input == 7) {
        console.clear()
        viewSalaryHistory(loggedInUser);
    } else if (input == 8) {
        console.clear()
        uploadNote();
    } else if (input == 9) {
        console.clear()
        logOut();
    } else {
        console.clear()
        console.log('Please enter a valid input')
        lecturerMenu(loggedInUser);
    }

    function lecturerProfile(loggedInUser) {
        if (loggedInUser) {
            console.clear();
            console.log('------------ LECTURER PROFILE -----------')
            console.log(`Id: ${loggedInUser.id}`.toUpperCase());
            console.log(`Name: ${loggedInUser.fullName}`.toUpperCase());
            console.log(`Username: ${loggedInUser.username}`.toUpperCase());
            console.log(`Phone Number: ${loggedInUser.phoneNumber}`.toUpperCase())
            console.log(`Home Address: ${loggedInUser.homeAddress}`.toUpperCase())
            console.log(`Email Address: ${loggedInUser.emailAddress}`.toUpperCase())
            console.log(`Date of Birth: ${loggedInUser.dateOfBirth}`.toUpperCase())
            console.log(`Gender: ${loggedInUser.gender}`.toUpperCase())
            console.log(`Department: ${loggedInUser.department}`.toUpperCase())
            console.log(`Salary Status: ${loggedInUser.status}`.toUpperCase())
        }
        returnToMenu(loggedInUser)
    }
    function registerCourseToTeach(loggedInUser) {
        console.clear();
        console.log('------------ REGISTER COURSE -----------')
        if (loggedInUser) {
            if (loggedInUser.courses.length !== 0) {
                console.log('You have already registered a course for the semester')
                returnToMenu(loggedInUser)
            } else {
                courseSelection()
                function courseSelection() {
                    console.log('Select a Course You Would Like To Teach');
                    if (loggedInUser.department == 'Mathematics') {
                        console.log('1. MTH 110.1 ');
                        console.log('2. MTH 120.1 ')
                        console.log('3. MTH 130.1 ')
                        console.log('4. GES 100.1 ')
                        console.log('5. GES 102.1 ')
                        console.log('6. PHY 102.1 ')
                        console.log('7. CHM 130.1 ')
                        const allCourses = ['', 'MTH 110.1', 'MTH 120.1', 'MTH 130.1', 'GES 100.1', 'GES 102.1', 'PHY 102.1', 'CHM 130.1',];
                        const selectedCourse = []
                        while (selectedCourse.length < 1) {
                            const select = parseInt(prompt(`Select Course: `))
                            if (select < 0 || select > allCourses.length || select == 0 || !/^[0-9]+$/.test(select)) {
                                console.log(`Invalid input. Please try again.`);
                                continue;
                            }
                            selectedCourse.push(allCourses[select])
                            console.log(`You selected: ${selectedCourse}`)
                        }
                        const check = allLecturerCourseData.find(check => check.course.includes(...selectedCourse))
                        if (check) {
                            console.clear()
                            console.log(`This Course has already been assigned to another lecturer, Please Try again!\n`)
                            courseSelection()
                        } else {
                            while (true) {
                                let confirm = prompt('Enter 1 to confirm selection or 2 to restart registeration: ')
                                if (confirm == 1) {
                                    console.log(`Registeration Succefull`)
                                    lecturerData.push(loggedInUser.courses.push(...selectedCourse));
                                    fs.writeFileSync('./schoolManagement/lecturerData.json', JSON.stringify(lecturerData))
                                    let fullName = loggedInUser.fullName;
                                    let course = selectedCourse;
                                    allLecturerCourseData.push({ fullName, course })
                                    fs.writeFileSync('./schoolManagement/allLecturerCourseData.json', JSON.stringify(allLecturerCourseData))
                                    returnToMenu(loggedInUser)
                                    break
                                } else if (confirm == 2) {
                                    courseSelection()
                                    break
                                } else {
                                    console.log('Invalid Input\n')
                                }
                            }
                        }
                    } else if (loggedInUser.department == 'Physics') {
                        console.log('1. PHY 101.1 ')
                        console.log('2. PHY 102.1 ')
                        console.log('3. PHY 103.1 ')
                        console.log('4. GES 100.1 ')
                        console.log('5. GES 102.1 ')
                        console.log('6. MTH 110.1 ')
                        console.log('7. CHM 130.1 ')
                        const allCourses = ['', 'PHY 101.1', 'PHY 102.1', 'PHY 103.1', 'GES 100.1', 'GES 102.1', 'MTH 110.1', 'CHM 130.1',];
                        const selectedCourse = []
                        while (selectedCourse.length < 1) {
                            const select = parseInt(prompt(`Select Course: `))
                            if (select < 0 || select > allCourses.length || select == 0 || !/^[0-9]+$/.test(select)) {
                                console.log(`Invalid input. Please try again.`);
                                continue;
                            }
                            selectedCourse.push(allCourses[select])
                            console.log(`You selected: ${selectedCourse}`)
                        }
                        const check = allLecturerCourseData.find(check => check.course.includes(...selectedCourse))
                        if (check) {
                            console.clear()
                            console.log(`This Course has already been assigned to another lecturer, Please Try again!\n`)
                            courseSelection()
                        } else {
                            while (true) {
                                let confirm = prompt('Enter 1 to confirm selection or 2 to restart registeration: ')
                                if (confirm == 1) {
                                    console.log(`Registeration Succefull`)
                                    lecturerData.push(loggedInUser.courses.push(...selectedCourse));
                                    fs.writeFileSync('./schoolManagement/lecturerData.json', JSON.stringify(lecturerData))
                                    let fullName = loggedInUser.fullName;
                                    let course = selectedCourse;
                                    allLecturerCourseData.push({ fullName, course })
                                    fs.writeFileSync('./schoolManagement/allLecturerCourseData.json', JSON.stringify(allLecturerCourseData))
                                    returnToMenu(loggedInUser)
                                    break
                                } else if (confirm == 2) {
                                    courseSelection()
                                    break
                                } else {
                                    console.log('Invalid Input\n')
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    function viewRegisteredStudents(loggedInUser) {
        console.log('------------- REGISTERED STUDENTS--------------')
        if (loggedInUser.courses.length !== 0) {
            const lectuerCourse = loggedInUser.courses;
            const students = allStudentCourseData.filter(students => students.courses.includes(...lectuerCourse))
            if (students) {
                let number = students.length
                console.log(`Course: ${lectuerCourse}`)
                console.log(`Number of Registered Studets = ${number}`)
                console.log(`------------- List of Students --------`)
                students.forEach(allStudent => console.log(allStudent.fullName.toUpperCase()))
            } else {
                console('No Student has registered yet')
            }
        } else {
            console.log('You Have Not Registered a Course to Teach for the Semester')
            console.log('Kindly register and check again')
        }
        returnToMenu(loggedInUser)

    }
    function viewSalaryHistory(loggedInUser) {
        console.log('-------- PAYMENT HISTORY -----------')
        if (loggedInUser.paymentHistory.length !== 0) {
            console.log('')
        } else {
            console.log('No Payment Received Yet')
        }
        returnToMenu(loggedInUser)
    }
    function viewTimeTable() {
        console.log('----------------- TIME TABLE ----------------')
        const headers = ["TIME", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"];
        let timetable = [{ TIME: '8AM - 10AM', MONDAY: 'MTH 110.1', TUESDAY: 'MTH120.1', WEDNESDAY: 'GES100.1', THURSDAY: 'GES102.1', FRIDAY: 'PHY 102.1' },
        { TIME: '10AM - 12PM', MONDAY: 'MTH 130.1', TUESDAY: 'PHY102.1', WEDNESDAY: 'CHEM130.1', THURSDAY: 'PHY102.1', FRIDAY: 'PHY 101.1' },
        { TIME: '12PM - 2PM', MONDAY: 'PHY 103.1', TUESDAY: 'GES100.1', WEDNESDAY: 'GES102.1', THURSDAY: 'MTH110.1', FRIDAY: 'CHEM130.1' },
        { TIME: '2PM - 4PM', MONDAY: 'PHY 102.1', TUESDAY: 'CHM130.1', WEDNESDAY: 'PHY101.1', THURSDAY: 'MTH130.1', FRIDAY: 'PHY102.1' },
        ]
        console.table(timetable, headers)
        returnToMenu(loggedInUser)
    }
    function returnToMenu(loggedInUser) {
        var num = prompt('Press enter to return to main menu : ')
        if (num == '') {
            console.clear()
            lecturerMenu(loggedInUser)
        } else {
            console.log('Please Enter a valid Input')
            returnToMenu(loggedInUser)
        }
    }
    function lecturerAcc(loggedInUser) {
        console.log('-------- LECTURER ACCOUT-----------')
        if (loggedInUser) {
            console.log('1. Account Balance')
            console.log('2. Withdraw')
            let input = prompt('select: ')
            if (input == 1) {
                console.clear()
                console.log(`Name: ${loggedInUser.fullName}`.toUpperCase());
                console.log(`Account Balance: #${loggedInUser.acc}`);
                returnToMenu(loggedInUser)
            } else if (input == 2) {
                console.clear()
                withdraw()
            } else {
                console.log('Invalid Input')
                lecturerAcc(loggedInUser)
            }


        }
    }
    function startClass(loggedInUser) {
        console.log('--------------- CLASS ---------------')
        if (loggedInUser) {
            const date = new Date()
            const currentTime = date.getHours()
            if (currentTime >= 8 && currentTime < 10) {
                console.log('MTH110.1 Class In Progress')
            }
            if (currentTime >= 10 && currentTime < 12) {
                console.log('MTH130.1 Class In Progress')
            }
            if (currentTime >= 12 && currentTime < 16) {
                console.log('PHY103.1 Class In Progress')
            }
            if (currentTime >= 14 && currentTime < 16) {
                console.log('PHY102.1 Class In Progress')
            }
         
                console.log('No Class In Progress')
            
        }
        returnToMenu(loggedInUser)
    }

}

function logOut() {
    return console.log('GoodBye ')
}



module.exports = { signUpSelect, signIn }