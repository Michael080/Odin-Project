const people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

const admitted = document.querySelector(".admitted");
const refused = document.querySelector(".refused");
admitted.textContent = "Admit: ";
refused.textContent = "Refuse: ";

// loop starts here
for (guest of people) {
  if (guest === 'Phil' || guest === 'Lola') {
    refused.textContent += `${guest}, `;
    // admitted.textContent += ...;
  } else {
    // refused.textContent += ...;
    admitted.textContent += `${guest}, `;
  }
}

// **bonus question**
const formatList = list => list.slice(0, list.length - 2) + '.';

refused.textContent = formatList(refused.textContent);
admitted.textContent = formatList(admitted.textContent);

