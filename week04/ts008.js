var Human;
(function (Human) {
    Human[Human["Man"] = 4] = "Man";
    Human[Human["Woman"] = 0] = "Woman";
    Human[Human["Gender"] = 4] = "Gender";
    Human[Human["g"] = "2212312".length] = "g";
})(Human || (Human = {}));
console.log(Human[4]); // Gender
