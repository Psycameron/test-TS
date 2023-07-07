"use strict";
function getFullName(firstName, surName) {
    return `${firstName} ${surName}`;
}
const getFullNameArrow = (firstName, surName) => {
    return `${firstName} ${surName}`;
};
console.log(getFullName("Ivan", "Ivanov"));
