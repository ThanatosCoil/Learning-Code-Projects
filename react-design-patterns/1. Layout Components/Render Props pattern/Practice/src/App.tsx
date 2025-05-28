import ProductInfo from "./components/ProductInfo";
import RenderList from "./components/RenderList";
import { clothes, electronics, homeGoods } from "./data/data";

const App = () => {
  return (
    <div className="grid grid-cols-3">
      <div>
        <RenderList
          data={electronics}
          resourceName="product"
          dataToRender={ProductInfo}
        ></RenderList>
      </div>
      <div className="border-l-2 border-slate-400 pl-2">
        <div>
          <RenderList
            data={clothes}
            resourceName="product"
            dataToRender={ProductInfo}
          ></RenderList>
        </div>
      </div>
      <div className="border-l-2 border-slate-400 pl-2">
        <div>
          <RenderList
            data={homeGoods}
            resourceName="product"
            dataToRender={ProductInfo}
          ></RenderList>
        </div>
      </div>
    </div>
  );
};
export default App;
