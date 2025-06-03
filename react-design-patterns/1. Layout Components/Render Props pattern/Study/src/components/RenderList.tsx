interface RenderListProps {
  data: any[];
  resourceName: string;
  dataToRender: any;
}

const RenderList = ({
  data,
  resourceName,
  dataToRender: ItemComponent,
}: RenderListProps) => {
  return (
    <div>
      {data.map((item, i) => (
        <ItemComponent key={i} {...{ [resourceName]: item }} />
        //По порядку. ItemComponent -> dataToRender -> MoviesInfo/GamesInfo/... Мы это задаем в App. То, как они рендерятся, мы задаем в соответсвующих компонентах
        //Затем в пропсах мы создаем объект с вычисляемыми свойствами, resourceName -> games/movies/... мы их задаем в App. item -> один из элементов массива data, он идет как значение.
        //В конце мы разворачиваем этот объект в пропсах, чтобы использовать его в соответсвующих компонентах. Например у нас может получится так: <GamesInfo games={item} /> или <MoviesInfo movies={item} />
      ))}
    </div>
  );
};
export default RenderList;
