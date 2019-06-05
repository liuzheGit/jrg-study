let a = [10,9,8,7,6,11,2,33,4,5,44,12];

let n = 1;

while (n <= a.length - 1){
  let m = 0;
  while (m < a.length - n){
    if(a[m] > a[m + 1]){
      let t = a[m];
      a[m] = a[m + 1];
      a[m + 1] = t;
    }
    m = m + 1;
  }
  n = n + 1
}

console.log(a);
