/*
- this.characters 에 단어 하나하나를 저장하고 trie처럼 뻗어나간다.
- 단어 하나하나가 Trie노드이다.
- isWord가 true면 단어가 완성되었다는 뜻이고, 뻗어나갈 단어가 더이상 없다는 뜻이다.

1. add
- word랑 index를 인자로 받는다
- 일단 index가 word의 length랑 같으면 단어를 다 완성했다는 뜻이며르 isWord를 true로 하고 this를 리턴한다
- 그게 아니면 word에서 현재 타게팅하고있는 알파벳을 char에 할당
- 이제 subTrie를 만들것임. charaters[char]가 있으면 그걸 써서 기존의 것을 build up해감
    - 아니면 새로운 Trie를 만들어서 subTrie에 할당
- subtrie.add(word,index+1)을 해주어서 subTrie를 재귀로 끝까지 완성함
- 완성되면 characters[char] 에 subTrie를 저장
- this를 리턴.

2. getWords
- 기본적으로는 chracters안에 key를 for문으로 돈다
- 그리고 한번 key를 잡으면 key에 해당하는 characters를 파고들면서 단어를 build up한다.
- 그리고  array에 push한다

3. autoComplete
- 기본은 인자로 들어온 prefix string을 하나씩 돌면서 characters쪽으로 계속 파고드는 것이다.
    - 파고들다가 chracters[str]이 없으면 자동으로 포문을 빠져나온다
- 그리고 파고들때까지 파고든 trie가 있을때만 trie.getWords()를 실시한다.
- 그럼 prefix + 나머지 알파벳이 예쁘게 arr안에 담겨 나올 것이다.
- 1분도 안남앗다!! 9시

*/

class Trie {
  constructor() {
    this.characters = {};
    this.isWord = false;
  }

  addWord(word, index = 0) {
    if (index === word.length) {
      this.isWord = true;
    } else {
      const char = word[index];
      const subTrie = this.characters[char] || new Trie();
      subTrie.addWord(word, index + 1);
      this.characters[char] = subTrie;
    }
    return this;
  }

  getWords(words = [], char = '') {
    if (this.isWord) {
      words.push(char);
    } else {
      for (const alpahabet in this.characters) {
        const builtUpChar = char + alpahabet;
        this.characters[alpahabet].getWords(words, builtUpChar);
      }
    }

    return words;
  }

  autoComplete(pre) {
    let trie = this;
    const words = [];
    for (const str of pre) {
      trie = trie.characters[str];
      if (!trie) {
        break;
      }
    }

    if (trie) {
      trie.getWords(words, pre);
    }

    return words;
  }
}

const trie = new Trie();
trie.addWord('cool');
trie.addWord('coke');
