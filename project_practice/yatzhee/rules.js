/*
** Rule class(base)
sum,
freq,
count(dice,val) 메소드 만들기!
    - dice중에서 val이 몇개 들어있느냐

** Rule을 기반으로한 class
- TotalOneNumber
- SumCount
    - this.count보다 freq가 많으면 다 합하기.
- FullHouse (같은게 3개 2개 이렇게 나와야함) //25
- SmallStraight (순서대로 4개가 나와야함) // 30
- LargeStraight (순서대로 5개가 나와야함) // 40
- Yahtzee (모든게 같은 숫자여야함) // 50
- 
*/

class Rule {
  constructor(params) {
    Object.assign(this, params);
  }

  sum(dice) {
    return dice.reduce((prev, curr) => prev + curr);
  }

  freq(dice) {
    const map = new Map();
    for (const num of dice) {
      map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1);
    }

    return [...map.values()];
  }

  count(dice, val) {
    return dice.filter(num => num === val).length;
  }
}

class TotalOneNumber extends Rule {
  evalDice = dice => {
    return this.val * super.count(dice, this.val);
  };
}
class SumCount extends Rule {
  evalDice = dice => {
    const freq = super.freq(dice);
    return freq.some(num => num >= this.count) ? super.sum(dice) : 0;
  };
}

class FullHouse extends Rule {
  evalDice = dice => {
    const freq = super.freq(dice);
    return freq.length >= 2 && freq.every(num => num >= 2) ? this.score : 0;
  };
}

class SmallStraight extends Rule {
  evalDice = dice => {
    const set = new Set(dice);

    const stringifiedDice = Array.from(set).sort().join('');
    return stringifiedDice.length >= 4 &&
      stringifiedDice.search(/1234|2345|3456/) >= 0
      ? this.score
      : 0;
  };
}

class LargeStraight extends Rule {
  evalDice = dice => {
    const set = new Set(dice);

    return set.size >= 5 && (!set.has(6) || !set.has(1)) ? this.score : 0;
  };
}

class Yahtzee extends Rule {
  evalDice = dice => {
    const freq = super.freq(dice);
    return freq[0] === 5 ? this.score : 0;
  };
}

const ones = new TotalOneNumber({ val: 1 });
const twos = new TotalOneNumber({ val: 2 });
const threeOfKind = new SumCount({ count: 3 });
const fullHouse = new FullHouse({ score: 25 });
const smallStraight = new SmallStraight({ score: 30 });
const largeStraight = new LargeStraight({ score: 40 });
const yahtzee = new Yahtzee({ score: 50 });

// console.log(yahtzee.evalDice([3, 3, 3, 3, 3]));
