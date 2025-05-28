import GamesInfo from "./components/GamesInfo";
import MoviesInfo from "./components/MoviesInfo";
import RenderList from "./components/RenderList";
import { games, movies } from "./data/data";

const App = () => {
  return (
    <div className="grid grid-cols-2">
      <div>
        <RenderList
          data={games}
          resourceName="games"
          dataToRender={GamesInfo}
        ></RenderList>
      </div>
      <div className="border-l-2 border-slate-400 pl-2">
        <div>
          <RenderList
            data={movies}
            resourceName="movies"
            dataToRender={MoviesInfo}
          ></RenderList>
        </div>
      </div>
    </div>
  );
};
export default App;
