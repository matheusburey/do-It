import { DATABASE_TASKS } from "../../services";
import { IResponseGetTasks, IResponseCreateTask, ITask } from "./types";

export const getTasks = async (userId: number): Promise<IResponseGetTasks> => {
  const data = DATABASE_TASKS.filter((task) => task.userId === userId);
  return { detail: { status: "ok" }, data };
};

export const createNewTask = async (data: Omit<ITask, "id">): Promise<IResponseCreateTask> => {
  const newTask = { ...data, id: DATABASE_TASKS.length };
  DATABASE_TASKS.push(newTask);

  return { detail: { status: "ok" }, data: newTask };
};
