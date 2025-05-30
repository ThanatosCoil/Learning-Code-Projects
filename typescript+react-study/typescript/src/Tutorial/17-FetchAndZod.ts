//-------------------------------------- FETCH DATA + ZOD -----------------------------
// По хорошему через axios и/или react query
// Zod нужен для проверки во время выполнения кода, а не во время сборки
import { z } from "zod";
import { name } from "./Tutorial/14.1-ModulesImport";

const url = "https://www.course-api.com/react-tours-project";

type Patriot = {};
const tourSchema = z.object({
  id: z.string(), // Метод z будет проверять является ли id строкой и тд
  name: z.string(),
  info: z.string(),
  image: z.string(),
  price: z.string(),
  // Если я добавлю сюда что то, чего нет в данных которые я получаю, то благодаря safeParse и дальнейшей логике, я получу ошибку
});

type Tours = z.infer<typeof tourSchema>; // Вместо того чтобы дублировать код с заданием типа Tour, сделали через метод Zod-а infer

async function fetchData(url: string): Promise<Tours[]> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const rawData: Tours[] = await response.json();

    const result = tourSchema.array().safeParse(rawData); // safeParse не триггерит ошибку, т.е. catch блок
    if (!result.success) {
      // Если не получится parse данные, то мы вручную триггерим ошибку
      throw new Error(`Invalid data: ${result.error}`);
    }
    return result.data;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "there was an error...";
    console.log(errorMessage);
    return [];
  }
}

const tours = await fetchData(url);
tours.map((tour) => {
  console.log(tour.price);
});
