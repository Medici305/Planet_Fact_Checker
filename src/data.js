import earth from "./Images/planet-earth.svg";

const data = () => {
  return [
    {
      name: "earth",
      description:
        "Earth Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
      image: earth,
      source: "",
      rotationTime: .99,
      revolutionTime: 365.26,
      radius: 6371,
      temp: 16,
    },
    {},
    {},
  ];
};

export default data;
