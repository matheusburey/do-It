/* eslint-disable no-nested-ternary */
import { Grid, useDisclosure, Center, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { ITask } from "../../api/tasks/types";
import { Header } from "../../components/Header";
import { CreateNewTask } from "../../components/Modals";
import { TasksDetail } from "../../components/Modals/TasksDetail";
import { CardNotFoundSkeleton, CardSkeleton } from "../../components/Skeleton";
import { useAuth } from "../../providers/Auth";
import { useTasks } from "../../providers/Tasks";
import { Card } from "./Card";
import { FirstTask } from "./FirstTask";
import { Search } from "./Search";

export function Dashboard() {
  const { user } = useAuth();
  const { tasks, loadTasks, taskNotFound } = useTasks();
  const { isOpen: isOpenTasksDetail, onClose: onCloseTasksDetail, onOpen: onOpenTasksDetail } = useDisclosure();
  const { isOpen: isOpenCreateNewTask, onClose: onCloseCreateNewTask, onOpen: onOpenCreateNewTask } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const [selectedTask, setSelectedTask] = useState({} as ITask);

  const openTaskDetail = (task: ITask) => {
    setSelectedTask(task);
    onOpenTasksDetail();
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      loadTasks(user.id, user.acessToken);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Header />
      <Search onOpen={onOpenCreateNewTask} />
      {taskNotFound ? (
        <Center mt="10" textAlign="center" display="flex" flexDir="column">
          <Heading size="lg">Não encontramos resultados para</Heading>
          <Text size="xl" color="gray.300" fontWeight="bold">
            {taskNotFound}
          </Text>
          <CardNotFoundSkeleton />
        </Center>
      ) : !loading && !tasks.length ? (
        <FirstTask onOpen={onOpenCreateNewTask} />
      ) : (
        <Grid templateColumns="repeat(auto-fill, minmax(420px, 1fr))" gap="10" px={["4", "8"]} mt="8">
          {!loading ? <CardSkeleton /> : tasks.map((task) => <Card key={task.id} task={task} openTaskDetail={openTaskDetail} />)}
        </Grid>
      )}
      <TasksDetail isOpen={isOpenTasksDetail} onClose={onCloseTasksDetail} task={selectedTask} />
      <CreateNewTask isOpen={isOpenCreateNewTask} onClose={onCloseCreateNewTask} />
    </>
  );
}
