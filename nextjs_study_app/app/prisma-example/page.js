import prisma from "@/utils/db";

// Пример добавления в базу данных. У нас только content добавляемый, поэтому только он тут по сути и создается, но тут может быть сколько угодно данных
const prismaHandlers = async () => {
  await prisma.task.create({
    data: {
      content: "wake up",
    },
  });
  // Получаем все task - это название таблицы в БД и сортируем их по дате создания, это мы добавляли в task на этапе создания модели
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return allTasks;
};

const PrismaExample = async () => {
  const tasks = await prismaHandlers();

  return (
    <div>
      <h1 className="text-7xl">PrismaExample</h1>
      {tasks.map((task) => {
        return (
          <h2 key={task.id} className="text-xl py-2">
            🕑{task.content}
          </h2>
        );
      })}
    </div>
  );
};
export default PrismaExample;
