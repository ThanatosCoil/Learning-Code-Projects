// Роутинг по умолчанию в next настроен через структуру файлов. Основная page лежит в app, а переходы к другим страницам делаем через папки, например about
// Чтобы вложить одно в другое, просто создаем еще одну папку, внутри страницы, где хотим вложить

import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-5xl mb-8 font-bold">HomePage</h1>
      {/* Сделали ссылку на другую страницу */}
      <Link href="/client" className="btn btn-accent uppercase">
        get started
      </Link>
    </div>
  );
};
export default HomePage;
