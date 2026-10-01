const rawSchedule = "BS.nguyen_van_hai-KHOA_TIM_MACH-08:30-PHONG_302";

const schedule = rawSchedule.split("-");
const rawDoctor = schedule[0];
const rawDepartment = schedule[1];
const examinationTime = schedule[2];
const rawRoom = schedule[3];

const doctorName = rawDoctor.replace("BS.", "").replaceAll("_", " ").toLowerCase();

const doctorWords = doctorName.split(" ");
let formattedDoctor = "";

for (let i = 0; i < doctorWords.length; i++) {
    const word = doctorWords[i];
    const formattedWord = word.slice(0, 1).toUpperCase() + word.slice(1);

    formattedDoctor += formattedWord;

    if (i < doctorWords.length - 1) {
        formattedDoctor += " ";
    }
}

const department = rawDepartment.replaceAll("_", " ").toLowerCase();
const departmentWords = department.split(" ");
let formattedDepartment = "";

for (let i = 0; i < departmentWords.length; i++) {
    const word = departmentWords[i];
    const formattedWord =word.slice(0, 1).toUpperCase() + word.slice(1);

    formattedDepartment += formattedWord;
    if (i < departmentWords.length - 1) {
        formattedDepartment += " ";
    }
}

const roomNumber = rawRoom.slice(6);
const formattedRoom = "Phòng " + roomNumber;

console.log(`
Bác sĩ      : ${formattedDoctor}
Chuyên khoa : ${formattedDepartment}
Giờ khám    : ${examinationTime}
Phòng khám  : ${formattedRoom}
    `);