const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createBook = async (title, authorId, publishedDate) => {
  try {
    const newBook = await prisma.book.create({
      data: {
        title,
        publishedDate,
        author: {
          connect: { id: authorId },
        },
      },
      include: { author: true },
    });
    return newBook;
  } catch (error) {
    console.error("Error creating book:", error);
    throw error;
  }
};

const getBooks = async () => {
  try {
    const books = await prisma.book.findMany({ include: { author: true } });
    return books;
  } catch (error) {
    console.error("Error getting books:", error);
    throw error;
  }
};

const getBookById = async (id) => {
  try {
    const book = await prisma.book.findUnique({
      where: { id },
      include: { author: true },
    });

    if (!book) {
      throw new Error(`Book with the given id: ${id} not found`);
    }

    return book;
  } catch (error) {
    console.error("Error getting book by id:", error);
    throw error;
  }
};

const updateBook = async (id, newTitle) => {
  try {
    const updatedBook = await prisma.$transaction(async (prisma) => {
      const book = await prisma.book.findUnique({
        where: { id },
        include: { author: true },
      });

      if (!book) {
        throw new Error(`Book with the given id: ${id} not found`);
      }

      return prisma.book.update({
        where: { id },
        data: { title: newTitle },
        include: { author: true },
      });
    });

    return updatedBook;
  } catch (error) {
    console.error("Error updating book:", error);
    throw error;
  }
};

const deleteBook = async (id) => {
  try {
    const deletedBook = await prisma.$transaction(async (prisma) => {
      const book = await prisma.book.findUnique({
        where: { id },
      });

      if (!book) {
        throw new Error(`Book with the given id: ${id} not found`);
      }

      return prisma.book.delete({
        where: { id },
      });
    });

    return deletedBook;
  } catch (error) {
    console.error("Error deleting book:", error);
    throw error;
  }
};

module.exports = { createBook, getBooks, getBookById, updateBook, deleteBook };
