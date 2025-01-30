let input = document.getElementById("input");
let value;
let uppercase = document.getElementById("uppercase");
let lowercase = document.getElementById("lowercase");
let camelcase = document.getElementById("camelcase");
let pascalcase = document.getElementById("pascalcase");
let snakecase = document.getElementById("snakecase");
let kebabcase = document.getElementById("kebabcase");
let trim = document.getElementById("trim");

input.addEventListener("input", (e) => {
  value = input.value.trim();
  display(value);
});

// camelCase function
function camelFun(value) {
  let newValue = "";
  let slice;
  let char;
  let str = "";
  value = value.split(" ");
  for (let i in value) {
    if (i == 0) {
      newValue = value[i].toLowerCase();
    } else {
      char = value[i].charAt(0).toUpperCase();
      slice = value[i].slice(1).toLowerCase();
      str = char + slice;
    }
    newValue = newValue + str;
  }
  return newValue;
}

// PascalCase function
function pascalFun(value) {
  value = value.split(" ");
  let slice;
  let char;
  let str = "";
  for (let i in value) {
    char = value[i].charAt(0).toUpperCase();
    slice = value[i].slice(1).toLowerCase();
    str = str + char + slice;
  }
  // console.log(str);
  return str;
}

// snake_case function
function snakeFun(value) {
  value = value.split(" ");
  let arr = value.join("_");
  // console.log(arr);
  return arr;
}

// kebab-case function
function kebabFun(value) {
  value = value.split(" ");
  let arr = value.join("-");
  // console.log(arr);
  return arr;
}

// trim function
function trimFun(value) {
  value = value.split(" ");
  let arr = value.join("");
  // console.log(arr);
  return arr;
}

function display(value) {
  uppercase.value = value.toUpperCase();
  lowercase.value = value.toLowerCase();
  camelcase.value = camelFun(value);
  pascalcase.value = pascalFun(value);
  snakecase.value = snakeFun(value);
  kebabcase.value = kebabFun(value);
  trim.value = trimFun(value);
}
