import Footer from "./ui/page/footer";
import Header from "./ui/page/header";
import MenuList from "./ui/page/menuList";
import GoodList from "./ui/store/goods-list";

export default function Page() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <input></input>
      </div>
      <div>
        <MenuList />
      </div>
      <div>
        <GoodList></GoodList>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
