/* Сделав папку с [...что-то] мы по сути делаем динамический url не только для первого шага типо .../sign-in но и все что будут дальше по типу .../sign-in/users/new. Все они будут работать */
/* Можно сделать [[...чтото]] это нужно когда нету корневой родительской page на верхнем уровне папки, в нашем случае auth. Это решит проблему, показываться будет page из sign in */

const SignInPage = ({ params }) => {
  console.log(params);

  return <h1 className="text-7xl">SignInPage</h1>;
};
export default SignInPage;
