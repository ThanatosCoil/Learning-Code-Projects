// Динамическая страница, создается через папку с названием в квадратных скобках [что-то]
// что-то можно как угодно назвать, но лучше id или что то похожее
// Теперь если в браузере забить .../drinks/ЧТОУГОДНО то высветится эта страница, чтоугодно это реально что угодно, как параметр функции

import Link from "next/link";
import Image from "next/image"; // Img компонент, это с некста, он лучше чем стандартный html потому что имеет автоматическую оптимизацию изображения

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

import drinkImg from "./drink.avif";

const getSingleDrink = async (id) => {
  const response = await fetch(`${url}${id}`);

  if (!response.ok) {
    throw new Error("Cant fetch data");
  }

  return response.json();
};

const SingleDrink = async ({ params }) => {
  const data = await getSingleDrink(params.id);
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;

  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        back to drinks
      </Link>
      <Image
        src={imgSrc}
        width={300}
        height={300}
        /* это надо добавлять чтобы next понимал соотношение сторон */ className="w-48 h-48 rounded-lg shadow-lg mb-4"
        priority /* это надо чтобы приоритезировать загрузку изображения на странице */
        alt={title}
        /* И все еще будет ОШИБКА, потому что надо еще настроить next.config.mjs чтобы подгружать картинку откуда то */
      />
      {/* <Image src={drinkImg} className="w-48 h-48 rounded-lg" alt="drink" /> */}
      <h1 className="text-4xl mb-8">Title: {title}</h1>
    </div>
  );
};

export default SingleDrink;
