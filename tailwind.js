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
        blue: "#384B70",
        turquoise_custon: "#01BAEF",
      },
    },
    backgroundImage: {
      "hero-img": "url('assets/real-estate.jpg')",
      "no-img": "none",
      hero: "url('assets/real-estate.jpg')",
      cleaning: "url('assets/cleaning.jpg')",
      cleaning_2: "url('assets/cleaning-2.jpg')",
      real_estate: "url('assets/real-estate.jpg')",
      relocation: "url('assets/moving.jpg')",
      pattern: "url('assets/bg-1.jpg')",
    },
  },
};
