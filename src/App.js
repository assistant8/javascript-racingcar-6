import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.carObj = {};
  }
  
  async play() {
    const carInput = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    this.handleCarName(carInput);
    const tryInput = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    const tryNumber = this.handleTryNumber(tryInput);
    
  }

  oneTurn(carArray) {
    for(let i=0; i<carArray.length; i++) {
      const car = carArray[i];
      oneTurnEachCar(eachCar); //전역변수에 각 자동차 전진여부에 따라 - 붙임    
      MissionUtils.Console.print(`${car} : ${this.carObj[car]}`)
    }
  }

  oneTurnEachCar(car) {
    const carRandomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    if(carRandomNumber >= 4) {
      this.carObj[car].concat("-"); 
    }
  }

  handleCarName(input) {
    try {
      const arr = input.split(",");
      arr.forEach(e=>{
        this.carObj[e] = ""; //객체 초기화
        if(e.length>6) throw new Error("[ERROR] 자동차 이름은 5자 이하여야 합니다.")
      })
      return arr;
    } catch(error) {
      console.error(error.message);
      throw error;      
    }
  }

  handleTryNumber(input) {
    try {
      console.log(typeof(input)) //
      if(typeof(input)==='number') {
        return Number(input)
      } else throw new Error("[ERROR] 횟수는 숫자여야 합니다. ")
    } catch(error) {
      console.error(error.message);
      throw error;      
    }
  }

  

  
}

export default App;
