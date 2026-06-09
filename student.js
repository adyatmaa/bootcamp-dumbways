const student = [
  {
    name: "Florri",
    class: "DevOps",
    grade: 90,
  },
  {
    name: "Daisey",
    class: "Fullstack A",
    grade: 77,
  },
  {
    name: "Orelee",
    class: "Fullstack A",
    grade: 97,
  },
  {
    name: "Ashlen",
    class: "Fullstack A",
    grade: 97,
  },
  {
    name: "Merry",
    class: "DevOps",
    grade: 100,
  },
  {
    name: "Axe",
    class: "Fullstack A",
    grade: 93,
  },
  {
    name: "Alene",
    class: "Fullstack B",
    grade: 91,
  },
  {
    name: "Jaclyn",
    class: "Fullstack A",
    grade: 85,
  },
  {
    name: "Arleyne",
    class: "DevOps",
    grade: 89,
  },
  {
    name: "Belia",
    class: "DevOps",
    grade: 80,
  },
];

const row = document.getElementById("student-rows");
const studentName = document.getElementById("student-name");
const mean = document.getElementById("mean");

const renderElement = (array) => {
  let studentHtml = "";
  let renderedArray = array || student;
  renderedArray.map((item, i) => {
    return (studentHtml += `
        <tr>
            <td>${i + 1}</td>
            <td>${item.name}</td>
            <td>${item.class}</td>
            <td>${item.grade}</td>
        </tr>`);
  });

  row.innerHTML = studentHtml;
  const studentMean = renderedArray.reduce((item, val) => item + val.grade, 0);
  mean.innerText = Math.floor(studentMean / renderedArray.length);
};

renderElement();

studentName.addEventListener("keyup", () => {
  const inputVal = studentName.value;
  if (inputVal !== "") {
    const filteredItems = student.filter((item) =>
      item.name.toLowerCase().includes(inputVal),
    );

    renderElement(filteredItems);
  } else {
    renderElement();
  }
});
