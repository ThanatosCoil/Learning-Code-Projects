// Специальный файл, по другому назвать нельзя, будет отображать UI при ошибке, обязан иметь use client
"use client";

const error = () => {
  console.log(error);

  return <div>there was an error...</div>;
  //   return <div>{error.error.message}</div>; почему то не работает как надо
};
export default error;
