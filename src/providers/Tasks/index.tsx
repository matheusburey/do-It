import { useToast } from "@chakra-ui/react";
import { createContext, useContext, useCallback, useState, useMemo } from "react";

import { createNewTask, getTasks } from "../../api/tasks";
import { ITask } from "../../api/tasks/types";
import { IProps, ITasksContext } from "./types";

const TasksContext = createContext({} as ITasksContext);

export const useTasks = () => useContext(TasksContext);

export function TasksProvider({ children }: IProps) {
  const toast = useToast();
  const [tasks, setTasks] = useState<ITask[]>([]);

  const loadTasks = useCallback(async (userId: number, acessToken: string) => {
    if (!acessToken) {
      toast({ position: "top-right", title: "Token invalido", status: "error" });
    } else {
      const tasksResponse = await getTasks(userId);
      setTasks(tasksResponse.data);
    }
  }, []);

  const createTask = useCallback(async (data: Omit<ITask, "id">, acessToken: string) => {
    if (!acessToken) {
      toast({ position: "top-right", title: "Token invalido", status: "error" });
    } else {
      const newTask = await createNewTask(data);
      setTasks((prev) => [...prev, newTask.data]);
      toast({ position: "top-right", title: "Task criada com sucesso", status: "success" });
    }
  }, []);

  const value = useMemo(() => ({ tasks, createTask, loadTasks }), [tasks]);

  return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>;
}
