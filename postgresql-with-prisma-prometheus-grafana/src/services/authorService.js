const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createAuthor = async (name) => {
  try {
    const newAuthor = await prisma.author.create({ data: { name } });
    return newAuthor;
  } catch (error) {
    console.error("Error creating author:", error);
    throw error;
  }
};

const deleteAuthor = async (id) => {
  try {
    const deletedAuthor = await prisma.author.delete({
      where: { id },
      include: { books: true },
    });
    return deletedAuthor;
  } catch (error) {
    console.error("Error deleting author:", error);
    throw error;
  }
};

module.exports = { createAuthor, deleteAuthor };
