window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    // Adjust scroll threshold as needed
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Add event listener for mouse hover
  document.querySelector(".navbar").addEventListener("mouseenter", () => {
    document.querySelector(".navbar").classList.add("scrolled");
  });

  // Remove the "scrolled" class when the mouse leaves the navbar
  document.querySelector(".navbar").addEventListener("mouseleave", () => {
    document.querySelector(".navbar").classList.remove("scrolled");
  });
});

// pop-up alert message as the caption of an image is clicked
function showCaptionAlert(captionText) {
  captionText = "In progress";
  alert(captionText);
}

//create section3Cars table
const section3ImageData = [
  {
    src: "images/section3/cars/elantra.png",
    alt: "elantra",
    caption: "The new ELANTRA",
  },
  {
    src: "images/section3/cars/sonata.png",
    alt: "sonata",
    caption: "The new SONATA",
  },
  {
    src: "images/section3/cars/azera.png",
    alt: "azera",
    caption: "The all-new AZERA",
  },
  {
    src: "images/section3/cars/veloster.png",
    alt: "veloster",
    caption: "VELOSTER",
  },
  { src: "images/section3/cars/i30.png", alt: "i30", caption: "The new i30" },
  { src: "images/section3/cars/accent.png", alt: "accent", caption: "ACCENT" },
  { src: "images/section3/cars/i20.png", alt: "i20", caption: "i20" },
  { src: "images/section3/cars/i10.png", alt: "i10", caption: "i10" },
  { src: "images/white.jpg", alt: " ", caption: " " },
];

const section3TableContainer = document.querySelector(
  ".section3TableContainer"
);

const createSection3Table = () => {
  const section3Table = document.createElement("table");
  const section3TableBody = document.createElement("tbody");

  let imageIndex = 0;

  for (let i = 0; i < 3; i++) {
    const section3TableRow = document.createElement("tr");
    for (let j = 0; j < 3; j++) {
      const section3TableCell = document.createElement("td");
      const section3ImageContainer = document.createElement("div");
      section3ImageContainer.classList.add("section3ImageContainer");

      const image = document.createElement("img");
      image.src = section3ImageData[imageIndex].src;
      image.alt = section3ImageData[imageIndex].alt;

      const section3Caption = document.createElement("p");
      section3Caption.classList.add("section3Caption");
      section3Caption.textContent = section3ImageData[imageIndex].caption;

      section3ImageContainer.appendChild(image);
      section3ImageContainer.appendChild(section3Caption);
      section3TableCell.appendChild(section3ImageContainer);
      section3TableRow.appendChild(section3TableCell);

      imageIndex++;
    }
    section3TableBody.appendChild(section3TableRow);
  }

  section3Table.appendChild(section3TableBody);
  section3TableContainer.appendChild(section3Table);
};

createSection3Table();

// event listener to the caption
document.querySelectorAll(".section3Caption").forEach((caption) => {
  caption.addEventListener("click", () => {
    showCaptionAlert(caption.textContent);
  });
});

//create section4Cars table
const section4ImageData = [
  {
    src: "images/section4/ioniq9.png",
    alt: "ioniq9",
    caption: "IONIQ 9",
  },
  {
    src: "images/section4/inster.png",
    alt: "inster",
    caption: "INSTER",
  },
  {
    src: "images/section4/ioniq5.png",
    alt: "ioniq5",
    caption: "The new IONIQ 5",
  },
  {
    src: "images/section4/ioniq6.png",
    alt: "ioniq6",
    caption: "IONIQ 6",
  },
  {
    src: "images/section4/kona_electric.png",
    alt: "kona_electric",
    caption: "The all-new KONA Electric",
  },
  { src: "images/section4/nexo.png", alt: "nexo", caption: "NEXO" },
  {
    src: "images/section4/tucson_hybrid.png",
    alt: "tucson_hybrid",
    caption: "The new TUCSON Hybrid",
  },
  {
    src: "images/section4/santafe_hybrid.png",
    alt: "santafe_hybrid",
    caption: "The all-new SANTA FE Hybrid",
  },
  {
    src: "images/section4/sonata_hybrid.png",
    alt: "sonata_hybrid",
    caption: "The new SONATA Hybrid",
  },
  {
    src: "images/section4/azera_hybrid.png",
    alt: "azera_hybrid",
    caption: "The all-new AZERA Hybrid",
  },
  {
    src: "images/section4/i30_hybrid.png",
    alt: "i30_hybrid",
    caption: "The new i30 Hybrid",
  },
  {
    src: "images/section4/staria_hybrid.png",
    alt: "staria_hybrid",
    caption: "STARIA Hybrid",
  },
];

const section4TableContainer = document.querySelector(
  ".section4TableContainer"
);

const createSection4Table = () => {
  const section4Table = document.createElement("table");
  const section4TableBody = document.createElement("tbody");

  let imageIndex = 0;

  for (let i = 0; i < 4; i++) {
    const section4TableRow = document.createElement("tr");
    for (let j = 0; j < 3; j++) {
      const section4TableCell = document.createElement("td");
      const section4ImageContainer = document.createElement("div");
      section4ImageContainer.classList.add("section4ImageContainer");

      const image = document.createElement("img");
      image.src = section4ImageData[imageIndex].src;
      image.alt = section4ImageData[imageIndex].alt;

      const section4Caption = document.createElement("p");
      section4Caption.classList.add("section4Caption");
      section4Caption.textContent = section4ImageData[imageIndex].caption;

      section4ImageContainer.appendChild(image);
      section4ImageContainer.appendChild(section4Caption);
      section4TableCell.appendChild(section4ImageContainer);
      section4TableRow.appendChild(section4TableCell);

      imageIndex++;
    }
    section4TableBody.appendChild(section4TableRow);
  }

  section4Table.appendChild(section4TableBody);
  section4TableContainer.appendChild(section4Table);
};

createSection4Table();

document.querySelectorAll(".section4Caption").forEach((caption) => {
  caption.addEventListener("click", () => {
    showCaptionAlert(caption.textContent);
  });
});

//create section5 table
const section5ImageData = [
  {
    src: "images/section5/tucson.png",
    alt: "tucson",
    caption: "The new TUCSON",
  },
  {
    src: "images/section5/santafe.png",
    alt: "santafe",
    caption: "The all-new SANTA FE",
  },
  {
    src: "images/section5/kona.png",
    alt: "kona",
    caption: "The all-new KONA",
  },
  {
    src: "images/section5/palisade.png",
    alt: "palisade",
    caption: "The new PALISADE",
  },
  {
    src: "images/section5/creta.png",
    alt: "creta",
    caption: "CRETA",
  },
  { src: "images/section5/venue.png", alt: "venue", caption: "VENUE" },
];

const section5TableContainer = document.querySelector(
  ".section5TableContainer"
);

const createSection5Table = () => {
  const section5Table = document.createElement("table");
  const section5TableBody = document.createElement("tbody");

  let imageIndex = 0;

  for (let i = 0; i < 2; i++) {
    const section5TableRow = document.createElement("tr");
    for (let j = 0; j < 3; j++) {
      const section5TableCell = document.createElement("td");
      const section5ImageContainer = document.createElement("div");
      section5ImageContainer.classList.add("section5ImageContainer");

      const image = document.createElement("img");
      image.src = section5ImageData[imageIndex].src;
      image.alt = section5ImageData[imageIndex].alt;

      const section5Caption = document.createElement("p");
      section5Caption.classList.add("section5Caption");
      section5Caption.textContent = section5ImageData[imageIndex].caption;

      section5ImageContainer.appendChild(image);
      section5ImageContainer.appendChild(section5Caption);
      section5TableCell.appendChild(section5ImageContainer);
      section5TableRow.appendChild(section5TableCell);

      imageIndex++;
    }
    section5TableBody.appendChild(section5TableRow);
  }

  section5Table.appendChild(section5TableBody);
  section5TableContainer.appendChild(section5Table);
};

createSection5Table();

document.querySelectorAll(".section5Caption").forEach((caption) => {
  caption.addEventListener("click", () => {
    showCaptionAlert(caption.textContent);
  });
});

//create section6 table
const section6ImageData = [
  {
    src: "images/section6/ioniq5N.png",
    alt: "ioniq5N",
    caption: "The all-new IONIQ 5 N",
  },
  {
    src: "images/section6/elantraN.png",
    alt: "elantraN",
    caption: "The new ELANTRA N",
  },
  {
    src: "images/section6/i30N.png",
    alt: "i30N",
    caption: "i30 N",
  },
  {
    src: "images/section6/fastbackN.png",
    alt: "fastbackN",
    caption: "i30 Fastback N",
  },
  {
    src: "images/section6/i20N.png",
    alt: "i20N",
    caption: "i20 N",
  },
  { src: "images/white.jpg", alt: " ", caption: " " },
];

const section6TableContainer = document.querySelector(
  ".section6TableContainer"
);

const createSection6Table = () => {
  const section6Table = document.createElement("table");
  const section6TableBody = document.createElement("tbody");

  let imageIndex = 0;

  for (let i = 0; i < 2; i++) {
    const section6TableRow = document.createElement("tr");
    for (let j = 0; j < 3; j++) {
      const section6TableCell = document.createElement("td");
      const section6ImageContainer = document.createElement("div");
      section6ImageContainer.classList.add("section6ImageContainer");

      const image = document.createElement("img");
      image.src = section6ImageData[imageIndex].src;
      image.alt = section6ImageData[imageIndex].alt;

      const section6Caption = document.createElement("p");
      section6Caption.classList.add("section6Caption");
      section6Caption.textContent = section6ImageData[imageIndex].caption;

      section6ImageContainer.appendChild(image);
      section6ImageContainer.appendChild(section6Caption);
      section6TableCell.appendChild(section6ImageContainer);
      section6TableRow.appendChild(section6TableCell);

      imageIndex++;
    }
    section6TableBody.appendChild(section6TableRow);
  }

  section6Table.appendChild(section6TableBody);
  section6TableContainer.appendChild(section6Table);
};

createSection6Table();

document.querySelectorAll(".section6Caption").forEach((caption) => {
  caption.addEventListener("click", () => {
    showCaptionAlert(caption.textContent);
  });
});

//create section7 table
const section7ImageData = [
  {
    src: "images/section7/ioniq5NLine.png",
    alt: "ioniq5NLine",
    caption: "The new IONIQ 5 N Line",
  },
  {
    src: "images/section7/tucsonNLine.png",
    alt: "tucsonNLine",
    caption: "The new TUCSON N Line",
  },
  {
    src: "images/section7/elantraNLine.png",
    alt: "elantraNLine",
    caption: "The new ELANTRA N Line",
  },
  {
    src: "images/section7/sonataNLine.png",
    alt: "sonataNLine",
    caption: "The new SONATA N Line",
  },
  {
    src: "images/section7/konaNLine.png",
    alt: "konaNLine",
    caption: "The all-new KONA N Line",
  },
  {
    src: "images/section7/i30NLine.png",
    alt: "i30NLine",
    caption: "The new i30 N Line",
  },
  {
    src: "images/section7/i10NLine.png",
    alt: "i10NLine",
    caption: "The all-new i10 N Line",
  },
  {
    src: "images/white.jpg",
    alt: " ",
    caption: " ",
  },
  {
    src: "images/white.jpg",
    alt: " ",
    caption: " ",
  },
];

const section7TableContainer = document.querySelector(
  ".section7TableContainer"
);

const createsection7Table = () => {
  const section7Table = document.createElement("table");
  const section7TableBody = document.createElement("tbody");

  let imageIndex = 0;

  for (let i = 0; i < 3; i++) {
    const section7TableRow = document.createElement("tr");
    for (let j = 0; j < 3; j++) {
      const section7TableCell = document.createElement("td");
      const section7ImageContainer = document.createElement("div");
      section7ImageContainer.classList.add("section7ImageContainer");

      const image = document.createElement("img");
      image.src = section7ImageData[imageIndex].src;
      image.alt = section7ImageData[imageIndex].alt;

      const section7Caption = document.createElement("p");
      section7Caption.classList.add("section7Caption");
      section7Caption.textContent = section7ImageData[imageIndex].caption;

      section7ImageContainer.appendChild(image);
      section7ImageContainer.appendChild(section7Caption);
      section7TableCell.appendChild(section7ImageContainer);
      section7TableRow.appendChild(section7TableCell);

      imageIndex++;
    }
    section7TableBody.appendChild(section7TableRow);
  }

  section7Table.appendChild(section7TableBody);
  section7TableContainer.appendChild(section7Table);
};

createsection7Table();

document.querySelectorAll(".section7Caption").forEach((caption) => {
  caption.addEventListener("click", () => {
    showCaptionAlert(caption.textContent);
  });
});

//create section8 table
const section8ImageData = [
  {
    src: "images/section8/staria.png",
    alt: "staria",
    caption: "STARIA",
  },
  {
    src: "images/white.jpg",
    alt: " ",
    caption: " ",
  },
  {
    src: "images/white.jpg",
    alt: " ",
    caption: " ",
  },
  {
    src: "images/white.jpg",
    alt: " ",
    caption: " ",
  },
  {
    src: "images/white.jpg",
    alt: " ",
    caption: " ",
  },
];

const section8TableContainer = document.querySelector(
  ".section8TableContainer"
);

const createsection8Table = () => {
  const section8Table = document.createElement("table");
  const section8TableBody = document.createElement("tbody");

  let imageIndex = 0;

  for (let i = 0; i < 1; i++) {
    const section8TableRow = document.createElement("tr");
    for (let j = 0; j < 5; j++) {
      const section8TableCell = document.createElement("td");
      const section8ImageContainer = document.createElement("div");
      section8ImageContainer.classList.add("section8ImageContainer");

      const image = document.createElement("img");
      image.src = section8ImageData[imageIndex].src;
      image.alt = section8ImageData[imageIndex].alt;

      const section8Caption = document.createElement("p");
      section8Caption.classList.add("section8Caption");
      section8Caption.textContent = section8ImageData[imageIndex].caption;

      section8ImageContainer.appendChild(image);
      section8ImageContainer.appendChild(section8Caption);
      section8TableCell.appendChild(section8ImageContainer);
      section8TableRow.appendChild(section8TableCell);

      imageIndex++;
    }
    section8TableBody.appendChild(section8TableRow);
  }

  section8Table.appendChild(section8TableBody);
  section8TableContainer.appendChild(section8Table);
};

createsection8Table();

document.querySelectorAll(".section8Caption").forEach((caption) => {
  caption.addEventListener("click", () => {
    showCaptionAlert(caption.textContent);
  });
});

//create section9 table
const section9ImageData = [
  {
    src: "images/section9/staria11.png",
    alt: "staria11",
    caption: "STARIA 11 Seater / Van",
  },
  {
    src: "images/section9/h1.png",
    alt: "h1",
    caption: "H-1",
  },
  {
    src: "images/section9/h100.png",
    alt: "h100",
    caption: "H-100",
  },
];

const section9TableContainer = document.querySelector(
  ".section9TableContainer"
);

const createsection9Table = () => {
  const section9Table = document.createElement("table");
  const section9TableBody = document.createElement("tbody");

  let imageIndex = 0;

  for (let i = 0; i < 1; i++) {
    const section9TableRow = document.createElement("tr");
    for (let j = 0; j < 3; j++) {
      const section9TableCell = document.createElement("td");
      const section9ImageContainer = document.createElement("div");
      section9ImageContainer.classList.add("section9ImageContainer");

      const image = document.createElement("img");
      image.src = section9ImageData[imageIndex].src;
      image.alt = section9ImageData[imageIndex].alt;

      const section9Caption = document.createElement("p");
      section9Caption.classList.add("section9Caption");
      section9Caption.textContent = section9ImageData[imageIndex].caption;

      section9ImageContainer.appendChild(image);
      section9ImageContainer.appendChild(section9Caption);
      section9TableCell.appendChild(section9ImageContainer);
      section9TableRow.appendChild(section9TableCell);

      imageIndex++;
    }
    section9TableBody.appendChild(section9TableRow);
  }

  section9Table.appendChild(section9TableBody);
  section9TableContainer.appendChild(section9Table);
};

createsection9Table();

document.querySelectorAll(".section9Caption").forEach((caption) => {
  caption.addEventListener("click", () => {
    showCaptionAlert(caption.textContent);
  });
});
