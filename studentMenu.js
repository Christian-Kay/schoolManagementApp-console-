// const prompt = require('prompt-sync')();
// const fs = require('fs');
// const studentData = JSON.parse(fs.readFileSync('studentData.json'))

// function studentMenu(loggedInUser) {
//     console.log('-----------STUDENT MENU --------------')
//     console.log('1. Student Profile')
//     console.log('2. Register Courses')
//     console.log('3. Enter Class')
//     console.log('4. Download Lecture Notes')
//     console.log('5. View Class Time Table')
//     console.log('6. View Registered Courses')
//     console.log('7. Pay school fee')
//     console.log('8. Payment History')
//     console.log('9. Log Out')
//     input = parseInt(prompt('what operation would you like to perform? : '));
//     if (input == 1) {
//         console.clear()
//         studentpProfile(loggedInUser);
//     } else if (input == 2) {
//         console.clear()
//         registerCourses(loggedInUser)
//     } else if (input == 3) {
//         console.clear()
//         enterClass();
//     } else if (input == 4) {
//         console.clear()
//         lectureNotes()
//     } else if (input == 5) {
//         console.clear()
//         studentClassTimeTable()
//     } else if (input == 6) {
//         console.clear()
//         viewRegisteredCourses(loggedInUser)
//     } else if (input == 7) {
//         console.clear()
//         paySchoolFees();
//     } else if (input == 8) {
//         console.clear()
//         paymentHistory();
//     } else if (input == 9) {
//         console.clear()
//         return logOut();
//     } else {
//         console.clear()
//         console.log('Please enter a valid input')
//         studentMenu();
//     }
// }

// function studentpProfile(loggedInUser) {
//     if (loggedInUser) {
//         console.clear();
//         console.log('------------ STUDENT PROFILE -----------')
//         console.log(`Name: ${loggedInUser.fullName}`.toUpperCase());
//         console.log(`Username: ${loggedInUser.username}`.toUpperCase());
//         console.log(`Phone Number: ${loggedInUser.phoneNumber}`.toUpperCase())
//         console.log(`Home Address: ${loggedInUser.homeAddress}`.toUpperCase())
//         console.log(`Email Address: ${loggedInUser.emailAddress}`.toUpperCase())
//         console.log(`Date of Birth: ${loggedInUser.dateOfBirth}`.toUpperCase())
//         console.log(`Gender: ${loggedInUser.gender}`.toUpperCase())
//         console.log(`Department: ${loggedInUser.department}`.toUpperCase())
//         console.log(`School Fee Status: ${null}`)
//     }
//     returnToMenu(loggedInUser)
// }

// function registerCourses(loggedInUser) {
//     console.clear();
//     console.log('------------ REGISTER COURSES -----------')
//     if (loggedInUser) {
//         if (loggedInUser.courses.length !== 0) {
//             console.log('You have already registered your courses for the semester')
//             returnToMenu(loggedInUser)
//         } else {
//             courseSelection()
//             function courseSelection() {
//                 console.log('Select Four Courses You Would Like To Register');
//                 console.log('Your Two Departmental Courses(d) are compulsory, One General(g) and One Elective(e)');
//                 if (loggedInUser.department == 'Mathematics') {
//                     console.log('1. MTH 110.1 (d)');
//                     console.log('2. MTH 120.1 (d)')
//                     console.log('3. GES 100.1 (g)')
//                     console.log('4. GES 102.1 (g)')
//                     console.log('5. PHY 102.1 (e)')
//                     console.log('6. CHM 130.1 (e)')
//                     const allCourses = ['', 'MTH 110.1', 'MTH 120.1', 'GES 100.1', 'GES 102.1', 'PHY 102.1', 'CHM 130.1',];
//                     const selectedCourses = []
//                     while (selectedCourses.length < 4) {
//                         const select = parseInt(prompt(`Select Course: `))
//                         if (select < 0 || select > allCourses.length || select == 0 || !/^[0-9]+$/.test(select)) {
//                             console.log(`Invalid input. Please try again.`);
//                             continue;
//                         }
//                         if (selectedCourses.includes(allCourses[select])) {
//                             console.log(`Course already selected. Please try again.`);
//                             continue;
//                         }
//                         selectedCourses.push(allCourses[select])
//                         console.log(`You selected: ${selectedCourses}`)
//                     }
//                     console.log(`Selected Courses: ${selectedCourses}\n`);
//                     if ((selectedCourses.includes('MTH 110.1') && selectedCourses.includes('MTH 120.1')) && (selectedCourses.includes('GES 100.1') && !selectedCourses.includes('GES 102.1')) || (!selectedCourses.includes('GES 100.1') && selectedCourses.includes('GES 102.1')) && (selectedCourses.includes('PHY 102.1') && !selectedCourses.includes('CHM 130.1')) || (!selectedCourses.includes('PHY 102.1') && selectedCourses.includes('CHM 130.1'))) {
//                         console.log(`Registeration Succefull`)
//                         studentData.push(loggedInUser.courses.push(selectedCourses));
//                         fs.writeFileSync('studentData.json', JSON.stringify(studentData))
//                         returnToMenu(loggedInUser)
//                     } else {
//                         console.log(`Courses selected does not meet the selection standard, Please Try again!\n`)
//                         courseSelection()
//                     }
//                 } else if (loggedInUser.department == 'Physics') {
//                     console.log('1. PHY 102.1 (d)');
//                     console.log('2. PHY 120.1 (d)')
//                     console.log('3. PHY 130.1 (d)')
//                     console.log('4. CHM 130.1 (e)')
//                     console.log('5. GES 100.1 (g)')
//                     console.log('6. GES 102.1 (g)')
//                     console.log('7. MTH 110.1 (e)')
//                 }
//             }
//         }
//     }
// }
// function viewRegisteredCourses(loggedInUser){
//     if(loggedInUser){
//         console.clear()
//         console.log('------------ REGISTERED COURSES ----------')
//         if(loggedInUser.courses.length != 0){  
//         loggedInUser.courses.forEach(course => console.log(course))
//         }else{
//             console.log('You Have Not Registered Any Course Yet')
//         }
//     }
//     returnToMenu(loggedInUser)
// }
// function returnToMenu(loggedInUser) {
//     var num = prompt('Press enter to return to main menu : ')
//     if (num == '') {
//         console.clear()
//         studentMenu(loggedInUser)
//     } else {
//         console.log('Please Enter a valid Input')
//         returnToMenu(loggedInUser)
//     }
// }

// module.exports = { studentMenu }