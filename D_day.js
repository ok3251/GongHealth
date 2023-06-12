var Time;

function D_day() {
	clearInterval(Time);
    const mokjuk = prompt("디데이로 설정할 이름을 입력해주세요","기말고사");
    const inputdday = prompt("지정일(2023-01-01)을 입력해주세요.", "2023-06-07");
    const ddayArray = inputdday.split("-");
    const year = parseInt(ddayArray[0]);
    const month = parseInt(ddayArray[1]);
    const day = parseInt(ddayArray[2]);
    const dday = new Date(year, month - 1, day).getTime();
    

	Time = setInterval(function() {
        const today = new Date().getTime();
        const pass = today- dday;
        const gap = dday - today;
		if (gap < 0) {
            const daypass = Math.floor(pass / (1000 * 60 * 60 * 24));
            const hourpass = Math.floor((pass % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minpass = Math.floor((pass % (1000 * 60 * 60)) / (1000 * 60));
            const secpass = Math.floor((pass % (1000 * 60)) / 1000);
            document.getElementById("count").innerHTML = mokjuk+"까지"+" D + " + daypass + "<br>" + hourpass + " : " + minpass + " : " + secpass;
        } else {
            const daygap = Math.floor(gap / (1000 * 60 * 60 * 24));
            const hourgap = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mingap = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
            const secgap = Math.floor((gap % (1000 * 60)) / 1000);
            document.getElementById("count").innerHTML = mokjuk+"까지"+"D - " + daygap + "<br>" + hourgap + " : " + mingap + " : " + secgap;
        }
    }, 1000);
};