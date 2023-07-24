// const prompt = require('prompt-sync')();
// module.exports = { lecturerMenu }

// function lecturerMenu() {
//     console.log('-----------LECTURER MENU --------------')
//     console.log('1. Profile')
//     console.log('2. Register Course To Teach')
//     console.log('3. Registered Students')
//     console.log('4. Start Class')
//     console.log('5. Upload Lecture Notes')
//     console.log('6. View Class Time Table')
//     console.log('7. Log Out')
//     input = parseInt(prompt('what operation would you like to perform? : '));
//     if (input == 1) {
//         console.clear()
//         lecturerProfile();
//     } else if (input == 2) {
//         console.clear()
//         registerCourseToTeach()
//     } else if (input == 3) {
//         console.clear()
//         viewRegisteredStudents()
//     } else if (input == 4) {
//         console.clear()
//         startClass();
//     } else if (input == 5) {
//         console.clear()
//         uploadLectureNote()
//     } else if (input == 6) {
//         console.clear()
//         viewTimeTable()
//     } else if (input == 7) {
//         console.clear()
//         logOut();
//         // } else if (input == 8) {
//         //     console.clear()
//         //     return logOut();
//     } else {
//         console.clear()
//         console.log('Please enter a valid input')
//         lecturerMenu();
//     }

// }

// function lecturerProfile() {
//     console.clear();
//     console.log('------------ LECTURER PROFILE -----------')
//     if (user) {
//         console.log(`Name: ${user.fullName}`.toUpperCase());
//         console.log(`Username: ${user.username}`.toUpperCase());
//         console.log(`Phone Number: ${user.phoneNumber}`.toUpperCase())
//         console.log(`Home Address: ${user.homeAddress}`.toUpperCase())
//         console.log(`Email Address: ${user.emailAddress}`.toUpperCase())
//         console.log(`Date of Birth: ${user.dateOfBirth}`.toUpperCase())
//         console.log(`Gender: ${user.gender}`.toUpperCase())
//         console.log(`Department: ${user.department}`.toUpperCase())
//     }
//     cont()
//     function cont() {
//         var num = prompt('Press enter to return to main menu : ')
//         if (num == '') {
//             console.clear()
//             studentMenu()
//         } else {
//             console.log('Please Enter a valid Input')
//             cont()
//         }
//     }

// }