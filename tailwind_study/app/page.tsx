export default function Home() {
  return (
    <>
      {/*------------------------------------  ЦВЕТА, КАСТОМИЗАЦИЯ  */}
      <div>
        <h1 className="bg-green-600 text-white border-newcolor-900 border-4">
          Hello world!
        </h1>
        <h1 className="text-xs sm:text-base md:text-4xl lg:text-6xl mt-1 new-style">
          Hello world!
        </h1>
        {/* Можно добавить свое значение к ютилити на лету с помощью [], ничего не меняя в конфиге,
      если например нужно в одном месте, какое то точное значение. Тут могут
      быть пиксели, цвета, шрифты, даже функции темы например. */}
        <h1 className="bg-[#bada55] text-white ">Hello world!</h1>
      </div>
      <hr className="my-5 border-t-4 border-gray-800" />
      {/*------------------------------------- ТИПОГРАФИЯ */}
      <div>
        {/* По умолчанию tailwind не применяет никаких стилей к разным h1 h2 h3. Они одинаковые */}
        <h1 className="text-3xl italic uppercase ">Title 1</h1>
        <h2 className="text-2xl line-through lowercase">Title 2</h2>
        <h3 className="text-xl overline">Title 3</h3>
        <p className="text-base">a reqular paragraph</p>
        <p className="leading-loose text-sm underline decoration-1 underline-offset-4 decoration-red-600 decoration-wavy">
          A description paragraph
        </p>
        <p className="truncate text-xs w-60">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni harum
          assumenda ipsum, voluptates quisquam quidem saepe. Eos explicabo
          cupiditate fugiat vel possimus assumenda exercitationem, dolor
          obcaecati doloribus impedit provident quaerat.
        </p>
        <p className="text-nowrap text-xs w-60">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni harum
          assumenda ipsum, voluptates quisquam quidem saepe. Eos explicabo
          cupiditate fugiat vel possimus assumenda exercitationem, dolor
          obcaecati doloribus impedit provident quaerat.
        </p>
        <p className="break-words">
          Glkgmfdlkhmfdsklmhhkfdmhgkdmhleafkmdfkhmvldhgomhdlfg
        </p>
      </div>
      <hr className="my-5 border-t-4 border-gray-800" />
      {/*--------------------------------------------- ИНТЕРВАЛЫ и РАЗМЕРЫ */}
      <div className="bg-blue-300 font-bold p-2 my-4 ml-2">hello</div>
      <div className="bg-blue-300 font-bold p-2 my-4 ml-2">hello</div>
      {/* Негативные значения */}
      <div className="w-36 h-16 bg-sky-600 opacity-20 "></div>
      <div className="-mt-8 bg-sky-300 ">-mt-8</div>
      {/* Пространство между и размеры */}
      <div className="bg-red-200 my-6 flex space-x-4 max-w-md">
        <div className="bg-red-500 w-8 h-8">01</div>
        <div className="bg-red-500 w-1/5 min-h-screen">02</div>
        <div className="bg-red-500 w-1/5 h-8">03</div>
      </div>
      <hr className="my-5 border-t-4 border-gray-800" />
      {/*---------------------------------------------- FLEX */}
      <div>
        <div className="bg-blue-300">Header</div>
        <div className="flex flex-col sm:flex-row ">
          <div className="bg-blue-400 basis-3/4 ">Main content</div>
          <div className="flex flex-col basis-1/4 ">
            <div className="bg-blue-200">Sidebar</div>
            <div className="bg-blue-200">Menu</div>
          </div>
        </div>
        <div className="flex justify-between items-center ">
          <div className="bg-blue-300 w-32 ">1</div>
          <div className="bg-blue-300 w-32 h-32">2</div>
          <div className="bg-blue-300 w-32">3</div>
        </div>
        <div className="flex items-baseline ">
          <div className="bg-blue-500 pt-2 pb-6">01</div>
          <div className="bg-red-500 pt-8 pb-12">02</div>
          <div className="bg-green-500 pt-12 pb-4">03</div>
        </div>
      </div>
      <hr className="my-5 border-t-4 border-gray-800" />
      {/*--------------------------------------------- GRIDS */}
      <div>
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
            <div className="p-6 rounded-lg bg-blue-400 col-start-3">1 col</div>
            <div className="p-6 rounded-lg bg-blue-600 col-span-2 ">2 col</div>
            <div className="p-6 rounded-lg bg-blue-700 col-span-3">3 col</div>
            <div className="p-6 rounded-lg bg-blue-400">4 col</div>
            <div className="p-6 rounded-lg bg-blue-400">5 col</div>
            <div className="p-6 rounded-lg bg-blue-400">6 col</div>
          </div>
          <div className="mt-5 gap-4 grid grid-flow-col auto-cols-max">
            <div className="p-6 rounded-lg bg-green-400">4 colgdfgfsddsgf</div>
            <div className="p-6 rounded-lg bg-green-400">5 cfsafsol</div>
            <div className="p-6 rounded-lg bg-green-400">6 col</div>
          </div>
          <div className="mt-5 grid grid-flow-col grid-rows-5 gap-4">
            <div className="p-6 rounded-lg bg-yellow-400 row-span-3">1 col</div>
            <div className="p-6 rounded-lg bg-yellow-400">2 col</div>
            <div className="p-6 rounded-lg bg-yellow-400">3 col</div>
            <div className="p-6 rounded-lg bg-yellow-400">4 col</div>
            <div className="p-6 rounded-lg bg-yellow-400">5 col</div>
            <div className="p-6 rounded-lg bg-yellow-400">6 col</div>
            <div className="p-6 rounded-lg bg-yellow-400">7 col</div>
            <div className="p-6 rounded-lg bg-yellow-400">8 col</div>
            <div className="p-6 rounded-lg bg-yellow-400">9 col</div>
            <div className="p-6 rounded-lg bg-yellow-400">10 col</div>
            <div className="p-6 rounded-lg bg-yellow-400">11 col</div>
            <div className="p-6 rounded-lg bg-yellow-400 row-span-2">
              12 col
            </div>
          </div>
          <div className=" mt-5 gap-4 grid grid-flow-row-dense grid-cols-3 grid-rows-3">
            <div className="p-6 rounded-lg bg-blue-300 col-span-2">1 col</div>
            <div className="p-6 rounded-lg bg-blue-300 col-span-2">2 col</div>
            <div className="p-6 rounded-lg bg-blue-300">3 col</div>
            <div className="p-6 rounded-lg bg-blue-300">4 col</div>
            <div className="p-6 rounded-lg bg-blue-300">5 col</div>
          </div>
        </div>
      </div>
      <hr className="my-5 border-t-4 border-gray-800" />

      {/* ---------------------------------------------------Layouts */}
      <div className="container mx-auto bg-gray-300 columns-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          autem totam, porro sequi debitis quidem accusamus? Quibusdam labore
          perferendis incidunt. Esse in tempore, quae voluptas omnis repellat
          eaque itaque quas?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          autem totam, porro sequi debitis quidem accusamus? Quibusdam labore
          perferendis incidunt. Esse in tempore, quae voluptas omnis repellat
          eaque itaque quas?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          autem totam, porro sequi debitis quidem accusamus? Quibusdam labore
          perferendis incidunt. Esse in tempore, quae voluptas omnis repellat
          eaque itaque quas?
        </p>
      </div>
      <div className="container mt-6 px-2">
        <img src="/favicon.ico" className="w-32 float-left" />
        <img src="/favicon.ico" className="w-48 float-right" />
        <p className="clear-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          autem totam, porro sequi debitis quidem accusamus? Quibusdam labore
          perferendis incidunt. Esse in tempore, quae voluptas omnis repellat
          eaque itaque quas?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          autem totam, porro sequi debitis quidem accusamus? Quibusdam labore
          perferendis incidunt. Esse in tempore, quae voluptas omnis repellat
          eaque itaque quas?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          autem totam, porro sequi debitis quidem accusamus? Quibusdam labore
          perferendis incidunt. Esse in tempore, quae voluptas omnis repellat
          eaque itaque quas?
        </p>
      </div>
      <div className="container mt-6 px-2">
        <div className="relative w-32 h-32 bg-red-500 rounded-lg">
          <div className="w-24 h-24 bg-blue-500 rounded-lg absolute inset-0 "></div>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-4">
        <div className="bg-blue-300">01</div>
        <div className="invisible bg-blue-300">02</div>
        <div className="bg-blue-300">03</div>
      </div>
      <hr className="my-5 border-t-4 border-gray-800" />

      {/* ---------------------------------------------------Border */}
      <div className="container">
        <header className="w-full border-b-4 border-l-8  border-b-red-300 border-l-blue-600">
          Header
        </header>
        <div className="mt-4 divide-y-2 divide-yellow-400 divide-dashed">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
        <div className="m-4 space-x-4">
          <button className="ring-slate-800 rounded-lg border-blue-500 ring-offset-2 ring-2">
            Button A
          </button>
          <button className="rounded-lg ring-offset-2 ring">Button B</button>
          <button className="... ring-offset-2 ring-4">Button C</button>
        </div>
      </div>
      <hr className="my-5 border-t-4 border-gray-800" />
      {/*-------------------------------------------------- EFFECTS */}
      <div className="container bg-slate-200 flex gap-4 px-2 py-2 text-center ">
        <div className="shadow-md w-16 h-16 bg-white rounded-lg content-center ">
          1
        </div>
        <div className="shadow-lg shadow-teal-400 w-16 h-16 bg-white rounded-lg content-center hover:contrast-125">
          2
        </div>
        <div className="shadow-xl shadow-cyan-500/50  w-16 h-16 bg-white rounded-lg content-center hover:brightness-150">
          3
        </div>
        <div className="shadow-2xl  w-16 h-16 bg-white rounded-lg content-center blur-sm hover:blur-none">
          4
        </div>
        <div className="shadow-inner opacity-50 w-16 h-16 bg-white rounded-lg content-center hover:drop-shadow-lg">
          5
        </div>
      </div>
      <hr className="my-5 border-t-4 border-gray-800" />
      {/*-------------------------------------------------- ПЕРЕХОДЫ И АНИМАЦИИ */}
      <div className="container p-2">
        <button className="animate-pulse transition rounded-md ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ">
          Save Changes
        </button>
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
      </div>
      <hr className="my-5 border-t-4 border-gray-800" />
      {/*-------------------------------------------------- TEST */}
    </>
  );
}
