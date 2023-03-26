import { ReactNode } from "react";

export interface IProps {
  children: ReactNode;
}

export interface ITasksContext {
  tasks: ITasks[];
  createTask: (data: Omit<ITasks, "id">, acessToken: string) => void;
  loadTasks: (userId: number, acessToken: string) => void;
}
