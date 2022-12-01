const products = [
  {
    id: 0,
    name: "Stövlar",
    englishName: "Boots",
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
    englishName: "Umbrella",
    price: 650,
    colors: [
      {
        name: "red",
        value: "#7b3130",
        imageUrls: [
          "image/products/umbrella/red_open.jpg",
          "image/products/umbrella/red_closed.jpg",
          "image/products/umbrella/red_inside.jpg",
        ],
      },
      {
        name: "mustard",
        value: "#785f29",
        imageUrls: [
          "image/products/umbrella/mustard_open.jpg",
          "image/products/umbrella/mustard_closed.jpg",
          "image/products/umbrella/mustard_inside.jpg",
        ],
      },
      {
        name: "purple",
        value: "#39313e",
        imageUrls: [
          "image/products/umbrella/purple_open.jpg",
          "image/products/umbrella/purple_closed.jpg",
          "image/products/umbrella/purple_inside.jpg",
        ],
      },
      {
        name: "green",
        value: "#3c523d",
        imageUrls: [
          "image/products/umbrella/green_open.jpg",
          "image/products/umbrella/green_closed.jpg",
          "image/products/umbrella/green_inside.jpg",
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Bucket hat",
    englishName: "Bucket hat",
    price: 600,
    colors: [
      {
        name: "blue",
        value: "#404d59",
        imageUrls: [
          "image/products/hat/blue_front.jpg",
          "image/products/hat/blue_top.jpg",
          "image/products/hat/blue_tag.jpg",
        ],
      },
      {
        name: "brown",
        value: "#5c5243",
        imageUrls: [
          "image/products/hat/brown_front.jpg",
          "image/products/hat/brown_top.jpg",
          "image/products/hat/brown_tag.jpg",
        ],
      },
      {
        name: "black",
        value: "#403e3f",
        imageUrls: [
          "image/products/hat/black_front.jpg",
          "image/products/hat/black_top.jpg",
          "image/products/hat/black_tag.jpg",
        ],
      },
      {
        name: "green",
        value: "#465844",
        imageUrls: [
          "image/products/hat/green_front.jpg",
          "image/products/hat/green_top.jpg",
          "image/products/hat/green_tag.jpg",
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Regnjacka",
    englishName: "Raincoat",
    price: 1337,
    colors: [
      {
        name: "blue",
        value: "#5a6b8c",
        imageUrls: [
          "image/products/raincoat/blue_front.jpg",
          "image/products/raincoat/blue_side.jpg",
          "image/products/raincoat/blue_back.jpg",
        ],
      },
      {
        name: "purple",
        value: "#5c546c",
        imageUrls: [
          "image/products/raincoat/purple_front.jpg",
          "image/products/raincoat/purple_side.jpg",
          "image/products/raincoat/purple_back.jpg",
        ],
      },
      {
        name: "yellow",
        value: "#c0ae31",
        imageUrls: [
          "image/products/raincoat/yellow_front.jpg",
          "image/products/raincoat/yellow_side.jpg",
          "image/products/raincoat/yellow_back.jpg",
        ],
      },
      {
        name: "green",
        value: "#383d29",
        imageUrls: [
          "image/products/raincoat/green_front.jpg",
          "image/products/raincoat/green_side.jpg",
          "image/products/raincoat/green_back.jpg",
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
const popUpSection = document.querySelector(".productPopup");
const gridPicturesElements = document.querySelectorAll(".gridPictures");
const closeButton = document.querySelector("#productPopUpCloseButton");



function setup() {
  const isEnglish = window.location.pathname === "/english.html";
  handleColorCircles();
  handleMiniProducts();
  productNameElement.innerHTML = `${
    isEnglish ? currentProduct.englishName : currentProduct.name
  } ${currentProduct.price} SEK`;
  productImage.style.backgroundImage = `url(${currentProduct.colors[0].imageUrls[0]})`;
  productImage.style.backgroundSize = "cover";
  currentChosenColorImageUrls = currentProductColors[0].imageUrls;
  currentChosenImage = 0;
  currentProductColors = currentProduct.colors.map((color) => color);
}

function handleMiniProducts() {
  const miniProductsElements = document.querySelectorAll(".miniProduct");
  const allProductsExceptChosen = products.filter(
    (product) => product.id !== currentProduct.id
  );
  //Hanterar miniprodukterna
  miniProductsElements.forEach((miniProductElement, elementIndex) => {
    allProductsExceptChosen.forEach((product, productIndex) => {
      if (elementIndex === productIndex) {
        miniProductElement.style.backgroundImage = `url(${product.colors[0].imageUrls[0]})`;
        miniProductElement.style.backgroundSize = "contain";

        miniProductElement.addEventListener("click", () => {
          console.log("det här är inte bra");
          currentProduct = product;
          setup();
        });
      }
    });
    
  });
}

products.forEach((product, productIndex) => {
  //Ger varje gridelement sin bild

  gridPicturesElements.forEach((gridElement, gridIndex) => {
    if (productIndex === gridIndex) {
      gridElement.style.backgroundImage = `url(${product.colors[0].imageUrls[0]})`;
      gridElement.style.backgroundSize = "contain";
      
      gridElement.addEventListener("click", () => {
        currentProduct = product;

        setup();
        
      });
    }
  });
});

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

// BUGG MED DETTA, När man trycker på något annat en skon första clicket så buggar det då det inte registrerar vilken produkt som trycktes på (kanske borde vara en foreach i en foreach);(Gå tillbaka till förgående version)

closeButton.addEventListener("click", () => {
  // currentProduct = products[0];
  popUpSection.classList.toggle("active");
});

gridPicturesElements.forEach(gridElement => {
  gridElement.addEventListener("click", () => {
    console.log("click");
    popUpSection.classList.toggle("active");
    
  });
  
});

setup();
