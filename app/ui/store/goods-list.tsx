import GoodItem from "./goods-item";

export default function GoodList() {
  const list = [
    {
      id: 1,
      name: "candy1",
      price: 12,
      image: "",
    },
    {
      id: 2,
      name: "candy1",
      price: 12,
      image: "",
    },
    {
      id: 3,
      name: "candy1",
      price: 12,
      image: "",
    },
    {
      id: 4,
      name: "candy1",
      price: 12,
      image: "",
    },
    {
      id: 5,
      name: "candy1",
      price: 12,
      image: "",
    },
    {
      id: 6,
      name: "candy1",
      price: 12,
      image: "",
    },
    {
      id: 7,
      name: "candy1",
      price: 12,
      image: "",
    },
    {
      id: 8,
      name: "candy1",
      price: 12,
      image: "",
    },
    {
      id: 9,
      name: "candy1",
      price: 12,
      image: "",
    },
    {
      id: 10,
      name: "candy1",
      price: 12,
      image: "",
    },
    {
      id: 11,
      name: "candy1",
      price: 12,
      image: "",
    },
  ];
  return (
    <div className="flex flex-wrap">
      {list.map((item, index) => {
        return (
          <div key={index} className="pc:basis-1/4 pad:basis-1/3 phone:basis-1/2 border-2 border-red-500">
            <GoodItem goods={item}></GoodItem>
          </div>
        );
      })}
    </div>
  );
}
