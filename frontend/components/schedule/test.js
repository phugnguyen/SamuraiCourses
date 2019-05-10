function arrayCompare(arr1, arr2) {
  let subArr = [];
  for (let i = 0; i < arr2.length; i++) {
    // insert callback below
    if (arr1.every(el => el === arr2[i])) {
      subArr.push(arr1.concat(arr2[i]));
    }
  }
  return subArr;
}

// expected output [ 8x [1,1,1] ];

const c = [[1, 1], [1, 2, 3, 1], [1, 1], [1, 1, 1]];
let masterArr = [];

for (let i = 0; i < c[0].length; i++) {
  let subArr = [[c[0][i]]];
  for (let j = 1; j < c.length; j++) {
    let subArr2 = [];
    for (let k = 0; k < subArr.length; k++) {
      subArr2 = subArr2.concat(arrayCompare(subArr[k], c[j]));
    }
    subArr = subArr2;
  }
  masterArr = masterArr.concat(subArr);
}
console.log(masterArr, masterArr.length);
