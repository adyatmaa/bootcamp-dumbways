const form = document.getElementById("counter-form");

const counterCount = document.getElementById("counter-count");

let sum = localStorage.getItem("sum");
const keys = "saving-list";

let savingList = JSON.parse(localStorage.getItem(keys)) || [];

if (sum === null) {
  sum = 0;
} else {
  sum = parseInt(sum);
}

const formatIDR = (nominal) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(nominal);
};

const renderSaving = () => {
  const savingContainer = document.getElementById("saving-list");

  let savingHtml = "";

  savingList.map((item) => {
    savingHtml += `
        <li class="list-group-item d-flex gap-1 align-items-center text-nowrap overflow-auto">
          <span class="text-capitalize fw-semibold">Kamu</span>
          <span class="text-info">keluar uang</span>
          <span class="fs-6">${formatIDR(item.amount)} untuk</span>
          <span class="text-capitalize badge text-bg-primary">${item.name}</span>
         </li>
        `;
  });

  savingContainer.innerHTML = savingHtml;
  counterCount.textContent = `${formatIDR(sum)}`;
};

renderSaving();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const saving = document.getElementById("nominal").value;

  if (name == "" || saving == "") {
    alert("Isi dengan benar");
  } else {
    const newSaving = {
      id: Date.now(),
      name: name,
      amount: saving,
    };

    sum += parseInt(saving);
    savingList.push(newSaving);

    localStorage.setItem("sum", sum);

    localStorage.setItem(keys, JSON.stringify(savingList));

    form.reset();
    document.getElementById("name").focus();
    renderSaving();
  }
});
