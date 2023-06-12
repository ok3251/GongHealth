const bottomSheet = document.getElementById("bottom-sheet");
const bottomsheetcontent = document.getElementById("bottom-sheet-content")

function openBottomSheet() {
    bottomSheet.style.display = 'flex';
	bottomsheetcontent.style.display = 'flex'
	bottomSheet.classList.add("fade-in");
	bottomsheetcontent.classList.add("slide-in");
}
  
function closeBottomSheet() {
	bottomsheetcontent.classList.add("slide-out");
	bottomSheet.classList.add("fade-out");
  setTimeout(() => {
    bottomsheetcontent.style.display = 'none';
	bottomSheet.style.display = 'none';
	bottomsheetcontent.classList.remove("slide-out");
	bottomSheet.classList.remove("fade-out");
  }, 300);
	
}

function anniversary(){
	const year = document.getElementById('year').value;
	const month = document.getElementById('month').value;
	const day = document.getElementById('day').value;

    const now = new Date();
	const firstDay = new Date(year,month-1,day);
	const toNow = now.getTime(); //getTime() 함수는 밀리초를 반환한다.
	const toFirst = firstDay.getTime();
	const passedTime = toNow - toFirst;
	const passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24));
	document.getElementById("pass").innerText = `${passedDay}일 째`;

	calcDate(100);
	calcDate(365);
	calcDate(731);
	calcDate(1096);

	function calcDate(day) {
    	const future = toFirst + day * (1000 * 60 * 60 * 24); 
    const someday = new Date(future);
    const Fyear = someday.getFullYear();
    const Fmonth = someday.getMonth() + 1;
    const Fday = someday.getDate();
		if(day==100){
			document.getElementById("date100").innerText = `100일 = ${Fyear}년 ${Fmonth}월 ${Fday}일`;
		}else if(day==365){
			document.getElementById("date1").innerText = `1년 = ${Fyear}년 ${Fmonth}월 ${Fday}일`;
		}else if(day==731){
			document.getElementById("date2").innerText = `2년 = ${Fyear}년 ${Fmonth}월 ${Fday}일`;
		}else if(day ==1096){
			document.getElementById("date3").innerText = `3년 = ${Fyear}년 ${Fmonth}월 ${Fday}일`;
		}
	}
}