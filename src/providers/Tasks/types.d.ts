import { ReactNode } from "react";

export interface IProps {
  children: ReactNode;
}

export interface ITasksContext {
  tasks: ITasks[];
  taskNotFound: string | undefined;
  createTask: (data: Omit<ITasks, "id">, acessToken: string) => Promise<void>;
  loadTasks: (userId: number, acessToken: string) => Promise<void>;
  deleteTask: (taskId: number, acessToken: string) => Promise<void>;
  updateTask: (taskId: number, acessToken: string) => Promise<void>;
  searchTask: (title: string) => Promise<void>;
}
