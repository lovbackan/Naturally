const products = [
  {
    id: 0,
    name: "Stövlar",
    price: 350,
    colors: [
      {
        name: "blue",
        value: "#8996b1",
        imageUrls: [
          "image/products/boot/side_blue.jpg",
          "image/products/boot/front_blue.jpg",
          "image/products/boot/base_blue.jpg",
        ],
      },
      {
        name: "brown",
        value: "#b7907f",
        imageUrls: [
          "image/products/boot/side_brown.jpg",
          "image/products/boot/front_brown.jpg",
          "image/products/boot/base_brown.jpg",
        ],
      },
      {
        name: "yellow",
        value: "#e4bc4e",
        imageUrls: [
          "image/products/boot/side_yellow.jpg",
          "image/products/boot/front_yellow.jpg",
          "image/products/boot/base_yellow.jpg",
        ],
      },
      {
        name: "green",
        value: "#9a987b",
        imageUrls: [
          "image/products/boot/side_green.jpg",
          "image/products/boot/front_green.jpg",
          "image/products/boot/base_green.jpg",
        ],
      },
    ],
  },
  {
    id: 1,
    name: "Paraply",
    price: 650,
    colors: [
      {
        name: "blue",
        value: "#8996b1",
        imageUrls: [
          "image/products/umbrella/umbrella.webp",
          "image/products/boot/front_blue.jpg",
          "image/products/boot/base_blue.jpg",
        ],
      },
      {
        name: "brown",
        value: "#b7907f",
        imageUrls: [
          "image/products/boot/side_brown.jpg",
          "image/products/boot/front_brown.jpg",
          "image/products/boot/base_brown.jpg",
        ],
      },
      {
        name: "yellow",
        value: "#e4bc4e",
        imageUrls: [
          "image/products/boot/side_yellow.jpg",
          "image/products/boot/front_yellow.jpg",
          "image/products/boot/base_yellow.jpg",
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Bucket hat",
    price: 600,
    colors: [
      {
        name: "blue",
        value: "#8996b1",
        imageUrls: [
          "image/products/hat/buckethat.jpg",
          "image/products/boot/front_blue.jpg",
          "image/products/boot/base_blue.jpg",
        ],
      },
      {
        name: "brown",
        value: "#b7907f",
        imageUrls: [
          "image/products/boot/side_brown.jpg",
          "image/products/boot/front_brown.jpg",
          "image/products/boot/base_brown.jpg",
        ],
      },
      {
        name: "yellow",
        value: "#e4bc4e",
        imageUrls: [
          "image/products/boot/side_yellow.jpg",
          "image/products/boot/front_yellow.jpg",
          "image/products/boot/base_yellow.jpg",
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Regnjacka",
    price: 1337,
    colors: [
      {
        name: "blue",
        value: "#8996b1",
        imageUrls: [
          "image/products/raincoat/raincoat.webp",
          "image/products/boot/front_blue.jpg",
          "image/products/boot/base_blue.jpg",
        ],
      },
      {
        name: "brown",
        value: "#b7907f",
        imageUrls: [
          "image/products/boot/side_brown.jpg",
          "image/products/boot/front_brown.jpg",
          "image/products/boot/base_brown.jpg",
        ],
      },
      {
        name: "yellow",
        value: "#e4bc4e",
        imageUrls: [
          "image/products/boot/side_yellow.jpg",
          "image/products/boot/front_yellow.jpg",
          "image/products/boot/base_yellow.jpg",
        ],
      },
    ],
  },
];

let currentProduct = products[0];
let currentProductColors = currentProduct.colors.map((color) => color);
let currentChosenColorImageUrls = currentProductColors[0].imageUrls;
let currentChosenImage = 0;

const productNameElement = document.querySelector("#productPopupImagePrice");
const colorCircleElements = document.querySelectorAll(".colorCircle");
const productImage = document.querySelector(".productPopupImage");
const leftArrow = document.querySelector("#productPopUpArrowButtonLeft");
const rightArrow = document.querySelector("#productPopUpArrowButtonRight");


function setup() {
  handleColorCircles();
  handleMiniProducts();
  productNameElement.innerHTML = `${currentProduct.name} ${currentProduct.price} SEK`;
  productImage.style.backgroundImage = `url(${currentProduct.colors[0].imageUrls[0]})`;
  productImage.style.backgroundSize = "cover";
  currentChosenColorImageUrls = currentProductColors[0].imageUrls;
  currentChosenImage = 0;
  currentProductColors = currentProduct.colors.map((color) => color);
}

function handleMiniProducts() {
  const miniProductsElements = document.querySelectorAll(".miniProduct");
  const gridPicturesElements = document.querySelectorAll(".gridPictures");
  const allProductsExceptChosen = products.filter(
    (product) => product.id !== currentProduct.id
  );

  miniProductsElements.forEach((miniProductElement, elementIndex) => {
    allProductsExceptChosen.forEach((product, productIndex) => {
      if (elementIndex === productIndex) {
        miniProductElement.style.backgroundImage = `url(${product.colors[0].imageUrls[0]})`;
        miniProductElement.style.backgroundSize = "contain";

        miniProductElement.addEventListener("click", () => {
          currentProduct = product;
          setup();
        });
      }
    });
  });

  products.forEach((product, productIndex) => {
    const popUpSection =document.querySelector(".productPopup");
    gridPicturesElements.forEach((gridElement, gridIndex) => {
      if (productIndex === gridIndex) {
        gridElement.style.backgroundImage = `url(${product.colors[0].imageUrls[0]})`;
        gridElement.style.backgroundSize = "contain";

        gridElement.addEventListener("click", () => {
          // HÄR togglar vi show popup
          popUpSection.classList.toggle("active");
          currentProduct = product;
          setup();
        });
      }
    });
  });
}
function handleColorCircles() {
  // Sets color circles from chosen product
  // and sets onClick on each circle to change
  // to correct image
  colorCircleElements.forEach((circleElement, circleIndex) => {
    currentProductColors.forEach((color, colorIndex) => {
      if (circleIndex === colorIndex) {
        circleElement.style.backgroundColor = color.value;
        circleElement.addEventListener("click", () => {
          currentChosenColorImageUrls = color.imageUrls;
          currentChosenImage = 0;
          productImage.style.backgroundImage = `url(${color.imageUrls[0]})`;
          productImage.style.backgroundSize = "contain";
        });
      }
    });
  });
}

leftArrow.addEventListener("click", () => {
  changeImage(currentChosenImage - 1);
});

rightArrow.addEventListener("click", () => {
  changeImage(currentChosenImage + 1);
});

function changeImage(newValue) {
  if (newValue > 2 || newValue < 0) {
    return;
  } else {
    currentChosenImage = newValue;
    currentChosenColorImageUrls.forEach((imageUrl, index) => {
      if (currentChosenImage === index) {
        productImage.style.backgroundImage = `url(${imageUrl})`;
      }
    });
  }
}

setup();
