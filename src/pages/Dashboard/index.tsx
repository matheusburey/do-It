import { Grid, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { ITask } from "../../api/tasks/types";
import { Header } from "../../components/Header";
import { TasksDetail } from "../../components/Modals/TasksDetail";
import { useAuth } from "../../providers/Auth";
import { useTasks } from "../../providers/Tasks";
import { Card } from "./Card";
import { Search } from "./Search";

export function Dashboard() {
  const { user } = useAuth();
  const { tasks, loadTasks } = useTasks();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const [selectedTask, setSelectedTask] = useState({} as ITask);

  const openTaskDetail = (task: ITask) => {
    setSelectedTask(task);
    onOpen();
  };

  useEffect(() => {
    setTimeout(() => {
      loadTasks(user.id, user.acessToken);
      setLoading(true);
    }, 1000);
  }, []);

  return (
    <>
      <Header />
      <Search />
      <Grid templateColumns="repeat(auto-fill, minmax(420px, 1fr))" gap="10" px="8" mt="8">
        {tasks.map((task) => (
          <Card key={task.id} task={task} openTaskDetail={openTaskDetail} />
        ))}
      </Grid>
      <TasksDetail isOpen={isOpen} onClose={onClose} task={selectedTask} />
    </>
  );
}
