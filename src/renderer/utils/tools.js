// 单个随机数
const getRandom = (min, max) => {
  return Math.floor(Math.random() * max + min)
}

// 多个随机数
const getRangeRandom = (n, min, max) => {
  let arr = [];

  const isExist = (arr, ran) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === ran) {
        return true;
      }
    }
    return false;
  }

  for (let i = 0; i < n; i++) {
    let ran = Math.ceil(Math.random() * (max - min) + min);
    while (isExist(arr, ran)) {
      ran = Math.ceil(Math.random() * (max - min) + min);
    }
    arr[i] = ran;
  }
  return arr;
}

export {
  getRandom,
  getRangeRandom
}