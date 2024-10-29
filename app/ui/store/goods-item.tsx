import Image from "next/image";

type GoodItem = {
  id: number;
  name: string;
  price: number;
  image: string;
};
export default function GoodItem({ goods }: { goods: GoodItem }) {
  return (
    <div>
      <div>{goods.id}</div>
      <div>{goods.name}</div>
      <div>{goods.price}</div>
      {/* <div style={{ position: "relative" }}>
        <Image src="/image.png" alt="candy" layout="fill" objectFit="cover" />
      </div> */}
      <div>
        <Image
          src="/image.png"
          alt="candy"
          width={1000}
          height={1000}
          objectFit="cover"
        />
      </div>
    </div>
  );
}
