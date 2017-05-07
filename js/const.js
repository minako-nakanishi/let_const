
const room = "トイレ";
console.log("room" + room); // roomはトイレ

room = "台所";
console.log("room変更後" + room); // Uncaught TypeErrorが出る。roomの値の変更不可.
