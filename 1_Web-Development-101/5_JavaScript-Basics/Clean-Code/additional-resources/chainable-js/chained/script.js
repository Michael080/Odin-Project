function main(num) {
  let i = num;
  return {
    add: function(num) {
      i += num;
      // appears to return "this" object
      return this;
    },
    subtract: function(num) {
      i -= num;
      return this;
    },
    print() {
      return i;
    },
  };
}

const x = main(10);
const res = x.add(6).subtract(15).print();
console.log(res);
