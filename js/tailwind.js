tailwind.config = {
  theme: {
    extend: {
      colors: {
        primaryRed: "#CF0A11",
        darkBlue: "#040F16",
        gray: {
          1: "#E4E7E9",
          2: "#898989",
          3: "#F2F2F2",
          4: "#cdcdcd",
          5: "#747474",
          bg: "#F3F3F3",
        },
        blue: {
          1: "#384B70",
          2: "#179fee",
          3: "#f4faf7",
        },
        turquoise_custom: "#01BAEF",
        green_custom: "#118B50",
      },
    },
    backgroundImage: {
      "no-img": "none",
      cleaning: "url('img/cleaning.jpg')",
      cleaning_2: "url('img/cleaning-2.jpg')",
      real_estate: "url('img/real-estate.jpg')",
      real_estate_bg: "url('../img/real-estate-1.jpg')",
      relocation: "url('img/moving.jpg')",
      pattern: "url('img/bg-1.jpg')",
      pattern_realestate: "url('../img/image.png')",
    },
  },
};
