const skills: string[] = ['HTML', "JS", "React"];

for (const skill of skills) {
    console.log(skill.toLocaleLowerCase())
};

const res = skills.filter(s => s !== "HTML")
    .map(s => s + "! ")
    .reduce((a, b) => a + b);

console.log(res);