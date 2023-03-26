import { DATABASE_TASKS } from "../../services";
import { IResponseGetTasks, IResponseCreateTask, ITask } from "./types";

const DB = DATABASE_TASKS;

export const getTasks = async (userId: number): Promise<IResponseGetTasks> => {
  if (!DB.length) {
    const getIntem = JSON.parse(localStorage.getItem("@Doit:tasks") || "[]");
    DB.push(...getIntem);
  }
  const data = DB.filter((task) => task.userId === userId);
  return { detail: { status: "ok" }, data };
};

export const createNewTask = async (data: Omit<ITask, "id">): Promise<IResponseCreateTask> => {
  const newTask = { ...data, id: DB.length + 1 };
  DB.push(newTask);
  localStorage.setItem("@Doit:tasks", JSON.stringify(DATABASE_TASKS));
  return { detail: { status: "ok" }, data: newTask };
};
