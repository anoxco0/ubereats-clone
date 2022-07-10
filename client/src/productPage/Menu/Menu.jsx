import "./Menu.css";

export const Menu = () => {
  const data = [
    {
      img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/deals.png",
      title: "Deals",
    },
    {
      img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/grocery.png",
      title: "Groceries",
    },
    {
      img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/convenience.png",
      title: "Convenience",
    },
    {
      img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/alcohol.png",
      title: "Alcohol",
    },
    {
      img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/pharmacy-v2.png",
      title: "Pharmacy",
    },
    {
      img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/baby.png",
      title: "Baby",
    },
    {
      img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/specialty_foods.jpg",
      title: "Speciality Foods",
    },
    {
      img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/pet_supplies.jpg",
      title: "Pet Supplies",
    },
    {
      img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/flowers.jpg",
      title: "Flowers",
    },
    {
      img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/retail-v2.png",
      title: "Retail",
    },
    {
      img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/top_eats.png",
      title: "Best Overall",
    },
    {
      img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/bakery.png",
      title: "Bakery",
    },
    {
      img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/coffeeandtea.png",
      title: "Coffee and Tea",
    },
    {
      img: "https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/bubbletea.png",
      title: "Bubble Tea",
    },
  ];
  return (
    <div className="navMenu">
      <div>
      {data.map((e) => {
        return (
          <div key={e.title}>
            <img
              height="60px"
              width="60px"
              src={e.img}
              alt=""
            />
            <div>{e.title}</div>
          </div>
        );
      })}
      </div>
    </div>
  );
};
