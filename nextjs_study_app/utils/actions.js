"use server";
import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getOneTasks = async (id) => {
  return await prisma.task.findUnique({
    where: {
      id: id,
    },
  });
};

export const createTask = async (formData) => {
  const content = formData.get("content"); //Получили импут по свойству name
  // Создали новый таск, но без ревалидации он не появится на странице, хоть и в ДБ уже есть
  await prisma.task.create({
    data: {
      content: content,
    },
  });
  revalidatePath("/tasks");
};

export const createTaskCustom = async (prevState, formData) => {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const content = formData.get("content");

  const Task = z.object({
    content: z.string().min(5),
  });

  try {
    Task.parse({ content });
    await prisma.task.create({
      data: {
        content,
      },
    });
    revalidatePath("/tasks");
    return { message: "success!" };
  } catch (error) {
    console.log(error);

    return { message: "error" };
  }
};

export const deleteTask = async (formData) => {
  const id = formData.get("id");
  await prisma.task.delete({
    where: { id },
  });
  revalidatePath("/tasks");
};

export const editTask = async (formData) => {
  const id = formData.get("id");
  const content = formData.get("content");
  const completed = formData.get("completed");

  await prisma.task.update({
    where: { id },
    data: {
      content,
      completed: completed === "on" ? true : false,
    },
  });
  redirect("/tasks"); //Не будет работать если там где будет вызываться не будет 'use client'
};
