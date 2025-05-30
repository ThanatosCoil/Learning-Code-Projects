import DrinksList from "../components/DrinksList";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDrinks = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); //добавил задержку чтобы увидеть loading
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  console.log(data); // В консоли ничего не будет, т.к. тут мы фетчим данные на сервере, лог можно увидеть теперь в терминале
  return data;
};

const DrinksPage = async () => {
  const data = await fetchDrinks();
  console.log(data);

  return (
    <div>
      <DrinksList drinks={data.drinks} />
    </div>
  );
};
export default DrinksPage;
