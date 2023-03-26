import { DATABASE_TASKS } from "../../services";
import { IResponseDefault } from "../types";
import { IResponseGetTasks, IResponseCreateTask, ITask } from "./types";

export const getTasks = async (userId: number): Promise<IResponseGetTasks> => {
  if (!DATABASE_TASKS.length) {
    const getIntem = JSON.parse(localStorage.getItem("@Doit:tasks") || "[]");
    DATABASE_TASKS.push(...getIntem);
  }
  const data = DATABASE_TASKS.filter((task) => task.userId === userId);
  return { detail: { status: "ok" }, data };
};

export const createNewTask = async (data: Omit<ITask, "id">): Promise<IResponseCreateTask> => {
  const newTask = { ...data, id: DATABASE_TASKS.length + 1 };
  DATABASE_TASKS.push(newTask);
  localStorage.setItem("@Doit:tasks", JSON.stringify(DATABASE_TASKS));
  return { detail: { status: "ok" }, data: newTask };
};

export const deleteTasks = async (taskId: number): Promise<IResponseDefault> => {
  const getIntem: ITask[] = JSON.parse(localStorage.getItem("@Doit:tasks") || "[]");
  const tasks = getIntem.filter((task) => task.id !== taskId);
  localStorage.setItem("@Doit:tasks", JSON.stringify(tasks));
  return { detail: { status: "ok" } };
};

export const updateTasks = async (taskId: number): Promise<IResponseDefault> => {
  const getIntem: ITask[] = JSON.parse(localStorage.getItem("@Doit:tasks") || "[]");
  const task = getIntem.find((task) => task.id === taskId);
  if (task) {
    const filteredTaks = getIntem.filter((task) => task.id !== taskId);
    task.completed = true;
    localStorage.setItem("@Doit:tasks", JSON.stringify([...filteredTaks, task]));
  }
  return { detail: { status: "ok" } };
};
