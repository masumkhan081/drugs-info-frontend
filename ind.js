let obj = "select";
let obj2 = "select.grp.name";
console.log(obj.split("."));

let obj3 = {
  select: {
    grp: {
      name: "name khan",
    },
  },
};
console.log(obj3.`{$select.grp.name}`]);