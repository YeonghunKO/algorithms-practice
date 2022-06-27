const chroma = require('chroma-js');
const namer = require('color-namer');

const getHSLvalue = (color, type) => chroma(color).get('hsl.' + type);
const setColor = (color, value, type) =>
  chroma(color).set('hsl.' + type, value);

const getRandom = arr => arr[getRandomNum(arr.length)];
const getRandomNum = num => Math.floor(Math.random() * num);
const getRandomDir = value => (Math.random() * 1 > 0.5 ? value : -value);

const getColorStr = colorObj => `rgb(${colorObj.rgb().join(',')})`;

function smartColorGenerator(prevColor) {
  let newColor;
  let newName;

  if (prevColor) {
    const rules = [
      // change hue
      ({ color }) => {
        let newHueValue;
        const prevColorHue = getHSLvalue(color, 'h');
        const innerRules = [10, 255 / 2, 255 / 4];

        newHueValue = prevColorHue + getRandomDir(getRandom(innerRules));
        const newColor = setColor(color, newHueValue, 'h');
        return getColorStr(newColor);
      },
      // change sat
      ({ color }) => {
        let newSatValue;
        const prevColorSat = getHSLvalue(color, 's');
        do {
          newSatValue = prevColorSat + Math.random() * 0.3;
        } while (newSatValue < 0.1 || newSatValue > 0.9);
        const newColor = setColor(color, newSatValue, 's');
        return getColorStr(newColor);
      },
      // change light
      ({ color }) => {
        let newLightValue;
        const prevColorLight = getHSLvalue(color, 'l');
        do {
          newLightValue = prevColorLight + Math.random() * 0.2;
        } while (newLightValue < 0.2 || newLightValue > 0.95);
        const newColor = setColor(color, newLightValue, 's');
        return getColorStr(newColor);
      },
    ];

    newColor = getRandom(rules)(prevColor);
  } else {
    newColor = `rgb(${getRandomNum(255)},${getRandomNum(255)},${getRandomNum(
      255
    )})`;
  }

  newName = namer(newColor);

  newName = Object.keys(newName).map(colorKey => newName[colorKey][0]);

  newName = getRandom(newName).name;

  return { color: newColor, name: newName };
}

class ColorPalette {
  constructor() {
    this.colors = [
      { name: 'SPINDLE', color: 'rgb(173,211,237)', locked: false },
      { name: 'MALIBU', color: 'rgb(110,178,224)', locked: false },
    ];
  }

  getRandomSmartColor(basedOn, baseColors) {
    let newColorObj;
    const notUniqueColor = newColorObj =>
      baseColors.some(
        colorObj =>
          colorObj.color === newColorObj.color ||
          colorObj.name === newColorObj.name
      );
    do {
      newColorObj = smartColorGenerator(basedOn);
    } while (notUniqueColor(newColorObj));
    return newColorObj;
  }

  autoColorsGenerator() {
    const newColors = [];
    const baseColors = this.colors;

    for (let i = 0; i < 20; i++) {
      const basedOnColor = getRandom(baseColors);
      const newColor = this.getRandomSmartColor(basedOnColor, baseColors);
      baseColors.push(newColor);
      newColors.push(newColor);
    }

    return newColors;
  }
}

const colorPalette = new ColorPalette();

const newColors = colorPalette.autoColorsGenerator();
console.log(newColors);

/*
- prevColor를 토대로 random하게 색깔을 변형시킨다.
h/s/l중에 무엇을 살짝 변경할것인지는 랜덤하게 결정
그리고 변경될 정도도 랜덤하게 결정됨

1. newColor 추출

1-1. hue를 변경
- getHSLvalue를 이용해서 prev의 hue를 구한다.
- innerRules를 이용해서 prev hue가 얼마나 변할지 랜덤하게 결정됨
- 그리고 prevColor + 변경될 정도 를 setColor를 이용해서 변경된 color를 뽑아냄

1-2. saturation을 변경
- 변경될 정도를 0.3범위내에 결정
- 변경될 정도와 prevColor의 sat를 합침
- 결과가 0.1 ~ 0.9정도가 될때까지 반복

1-3. light를 변경
- 변경될 정도를 0.2범위내에 결정
- 변경될 정도와 prevColor의 light를 합침
- 결과가 0.2 ~ 0.95정도가 될때까지 반복

2. newName 추출 
- namer로 후보 name을 추출
- key별로 뽑은 다음에 map을 이용해서 각각의 key에서 가장 첫번째것을 뽑아서 array로 리턴
- array안에서 랜덤하게 name을 추출

3. newName, newColor 리턴
*/

/*
getRandom 로직
- some함수를 써서 this.colors안에 겹치는게 없을때까지 while안에서 smartColor get하는 걸 반복한다.

autoColorsGenerator 로직
- newColors라는 arr를 만들기
- baseColors를 만들기(this.colors로 시작) - unique한 color를 만들기 위함.
- for 문을 이용해서 20개의 newColorsObj를 만들기, 
- 뽑는 기준으로 삼을 basedon color를 baseColors에서 뽑기.
- baseColors와 basedon color가 뽑히면 비로서 최종적으로 newColors에 넣기
*/
