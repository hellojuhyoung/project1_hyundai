const section3ImageData = [
  {
    src: "images/section3/cars/sonata.png",
    alt: "Image 1",
    caption: "Caption 1",
  },
  { src: "image2.jpg", alt: "Image 2", caption: "Caption 2" },
  { src: "image3.jpg", alt: "Image 3", caption: "Caption 3" },
  { src: "image4.jpg", alt: "Image 4", caption: "Caption 4" },
  { src: "image5.jpg", alt: "Image 5", caption: "Caption 5" },
  { src: "image6.jpg", alt: "Image 6", caption: "Caption 6" },
  { src: "image7.jpg", alt: "Image 7", caption: "Caption 7" },
  { src: "image8.jpg", alt: "Image 8", caption: "Caption 8" },
  { src: "image9.jpg", alt: "Image 9", caption: "Caption 9" },
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
