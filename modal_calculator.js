const openmodal_calculator = document.getElementById('openmodal_calculator');
const closemodal_calculator = document.getElementById('closemodal_calculator');
const modalpage_calculator = document.getElementById('modalpage_calculator');

openmodal_calculator.addEventListener('click', function() {
    modalpage_calculator.style.display = "flex";
});

closemodal_calculator.addEventListener('click', function(){
    modalpage_calculator.classList.add("fade-out");
    setTimeout(() => {
        modalpage_calculator.style.display ="none";
        modalpage_calculator.classList.remove("fade-out");
    }, 300);
});

const foodCalories = {
    ramen: 500,
    chicken: 2500,
    jjajang: 864,
    jjijji: 1.64,
    rice: 313,
    egg: 80,
    sweetPotato: 114,
    protein: 103,
  };
  
  let gicho;
  let Bfsum = 0;
  let lcsum = 0;
  let dnsum = 0;
  let lastsum = 0;
  let weight = 0;
  let walksum;
  let julsum;
  let runsum;
  let exsum;
  
  function setting() {
      weight=0;
    weight += document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const age = document.getElementById('age').value;
    const sex = document.getElementById('sex').value;
  
    if (sex === '남자') {
      gicho = 10 * weight + 6.25 * height - 5 * age + 5;
      document.getElementById('result').innerText = `기초대사량은 ${gicho} 입니다.`;
    } else if (sex === '여자') {
      gicho = 10 * weight + 6.25 * height - 5 * age - 161;
      document.getElementById('result').innerText = `기초대사량은 ${gicho} 입니다.`;
    }
  }
  
  function next() {
    if (gicho === undefined) {
      alert('기초대사량을 확인해주세요');
    } else {
      document.getElementById('page1').style.display = 'none';	
      document.getElementById('page2').style.display = 'block';
    }
  }
  
  function before() {
    document.getElementById('page1').style.display = 'block';
    document.getElementById('page2').style.display = 'none';
  }
  
  function next2(){
      document.getElementById('page3').style.display = 'block';
      document.getElementById('page2').style.display = 'none';
  }
  function before2(){
      document.getElementById('page3').style.display = 'none';
      document.getElementById('page2').style.display = 'block';
  }
  function discribe(){
      document.getElementById('lastpage').style.display = 'block';
      document.getElementById('page3').style.display = 'none';
      document.getElementById('gichoresult').innerText = `기초대사량 \n ${gicho}`;
      document.getElementById('foodresult').innerText = `총 섭취량 \n ${lastsum}`;
      document.getElementById('exerciseresult').innerText = `총 운동량 \n ${exsum}`;
  }
  function Gofirst(){
      document.getElementById('lastpage').style.display = 'none';
      document.getElementById('page1').style.display = 'block';
  }
  
  function bfcheck() {
    const Bfast = document.getElementsByName('Bfast');
    Bfsum = 0;
  
    for (let i = 0; i < Bfast.length; i++) {
      const foodId = Bfast[i].id;
      const quantity = parseInt(Bfast[i].value);
      const caloriePerItem = foodCalories[foodId];
      const totalCalories = quantity * caloriePerItem;
      Bfsum += totalCalories;
    }
  
    document.getElementById('bfresult').innerText = `아침에 섭취한 칼로리: ${Bfsum}Kcal`;
  }
  
  function lccheck() {
    const Lunch = document.getElementsByName("Lunch");
    lcsum = 0;
  
    for (let i = 0; i < Lunch.length; i++) {
      const foodId = Lunch[i].id;
      const quantity = parseInt(Lunch[i].value);
      const caloriePerItem = foodCalories[foodId];
      const totalCalories = quantity * caloriePerItem;
      lcsum += totalCalories;
    }
  
    document.getElementById('lcresult').innerText = `점심에 섭취한 칼로리: ${lcsum}Kcal`;
  }
  
  function Dncheck() {
    const Dinner = document.getElementsByName("Dinner");
    dnsum = 0;
  
    for (let i = 0; i < Dinner.length; i++) {
      const foodId = Dinner[i].id;
      const quantity = parseInt(Dinner[i].value);
      const caloriePerItem = foodCalories[foodId];
      const totalCalories = quantity * caloriePerItem;
      dnsum += totalCalories;
    }
  
    document.getElementById('Dnresult').innerText = `저녁에 섭취한 칼로리: ${dnsum}Kcal`;
  }
  
  function lastcheck() {
    lastsum = Bfsum + lcsum + dnsum;
    document.getElementById('lastresult').innerText = `오늘 먹은 칼로리: ${lastsum}Kcal 입니다.`;
  }
  
  function wkcheck(){
      const walktime = document.getElementById('walktime').value;
      walksum = ((weight/60)*walktime*4);
      document.getElementById('wkresult').innerText = `걷기로 소모한 칼로리는 ${walksum}Kcal 입니다`;
  }
  function julcheck(){
      const jultime = document.getElementById('jultime').value;
      julsum = (weight/60)*jultime*10.5;
      document.getElementById('julresult').innerText = `줄넘기로 소모한 칼로리는 ${julsum}Kcal 입니다`;
  }
  function runcheck(){
      const runtime = document.getElementById('runtime').value;
      runsum = (weight/60)*runtime*7.3;
      document.getElementById('runresult').innerText = `달리기로 소모한 칼로리는 ${runsum}Kcal 입니다.`;
  }
  function excheck(){
      exsum = walksum + julsum + runsum;
      document.getElementById('exresult').innerText = `총 소모하신 칼로리는 ${exsum}Kcal 입니다.`;
  }