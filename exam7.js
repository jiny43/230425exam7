// function exampleOne(arr, dataType, itemToFind) {
//   if (Array.isArray(arr) === false) {
//     console.log("배열이 아닙니다.");
//     return false;
//   }
//   return true;
// }
// const isDataTypeMatched = typeof itemToFind === dataType;
// const isItemExist = arr.includes(itemToFind);

// if (isDataTypeMatched === true && isItemExist === true) {
//   console.log(`${itemToFind}은(는) 배열에 존재합니다.`);
//   return true;
// } else if (isItemExist === false) {
//   console.log(`${itemToFind}은(는) 배열에 존재하지 않습니다.`);
//   return false;
// } else if (isDataTypeMatched === false) {
//   console.log(`찾으려는 항목은 ${dataType}데이터타입이 아닙니다.`);
//   return false;
// }

const basicData = [
  "안녕하세요",
  "어디선가",
  "입력된",
  "데이터를",
  "찾아보는",
  "함수입니다.",
];

// exampleOne(basicData, "string", "어디선가");
// exampleOne(basicData, "string", "함수입니다.");

// helper method 사용해보기 feat.gpt
// 특정 기능을 수행하는 코드 블록을 함수로 만들어서 여러 곳에서
// 재사용 가능하도록 만든 것을 말한다.
//checkArray가 여러번 사용되더라도 한번만 작성하면 된다.
function checkArray(arr) {
  if (Array.isArray(arr) === false) {
    console.log("배열이 아닙니다.");
    return false;
  }
  return true;
}

function exampleOne(arr, dataType, itemToFind) {
  if (!checkArray(arr)) return false;

  const isDataTypeMatched = typeof itemToFind === dataType;
  const isItemExist = arr.includes(itemToFind);

  if (isDataTypeMatched && isItemExist) {
    console.log(`${itemToFind}은(는) 배열에 존재합니다.`);
    return true;
  } else if (!isItemExist) {
    console.log(`${itemToFind}은(는) 배열에 존재하지 않습니다.`);
  } else if (!isDataTypeMatched) {
    console.log(`찾으려는 항목은 ${dataType} 데이터타입이 아닙니다.`);
    return false;
  }
}
// class와 getter, setter를 이용하여 변형해보기 (feat.gpt)
class ArrayHelper {
  //ArrayHelper라는 클래스를 정의
  constructor(arr) {
    this.arr = arr;
    //this.arr에 할당함
  }
  //접근할 수 있도록
  get array() {
    return this.arr;
  }

  set array(arr) {
    if (Array.isArray(arr)) {
      this.arr = arr;
    } else {
      console.log("배열이 아닙니다.");
    }
  }
  //클래스 내부에서 처리할 수 있도록 함
  checkTypeAndFindItem(dataType, itemToFind) {
    if (!Array.isArray(this.arr)) {
      console.log("배열이 아닙니다.");
      return false;
    }

    const isDataTypeMatched = typeof itemToFind === dataType;
    const isItemExist = this.arr.includes(itemToFind);

    if (isDataTypeMatched && isItemExist) {
      console.log(`${itemToFind}은(는) 배열에 존재합니다.`);
      return true;
    } else if (!isDataTypeMatched) {
      console.log(`찾으려는 항목은 ${dataType}데이터타입이 아닙니다.`);
      return false;
    } else {
      console.log(`${itemToFind}은(는) 배열에 존재하지 않습니다.`);
      return false;
    }
  }
}

const arrayHelper = new ArrayHelper(basicData);
arrayHelper.checkTypeAndFindItem("string", "어디선가");
