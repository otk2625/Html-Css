//1. 자바스크립트는 자료형이 동적으로 정해진다.

var num = 100000000; //정수 4Byte -> Heap
console.log("num : ", num);

var srt = "문자열"; //문자열 4Byte -> Heap
console.log("srt : ", srt); 

var flotNum = 10.5; //실수 4Byte -> Heap
console.log("flotNum : ", flotNum); 

var charStr = "가"; //문자 4Byte -> Heap
console.log("charStr : ", charStr); 

var boolData = true; //참, 거짓 (true, false) 4Byte -> Heap
console.log("boolData : ", boolData); 

var list = [1,2,3,4,5,6]; //4Byte -> Heap (배열)
console.log("list : ", list);
console.log("list[0] : ", list[0]);
console.log("list [5]: ", list[5]);

//자바 스크립트 오브젝트( key : value ) 4Byte -> Heap
var user = {
                name : "홍길동",
                phone : "0102222"
};
console.log("user : ", user);
console.log("user -> name: ", user.name);


console.log("phone -> phone: ", user.phone);

//함수저장 4Byte
var hello = function (){
                alert("함수 호출됨");
}
hello();  //함수 호출