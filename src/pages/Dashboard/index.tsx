import { Grid } from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { useTasks } from "../../providers/Tasks";
import { Card } from "./Card";
import { Search } from "./Search";

export function Dashboard() {
  const { tasks } = useTasks();
  return (
    <>
      <Header />
      <Search />
      <Grid templateColumns="repeat(auto-fill, minmax(420px, 1fr))" gap="10" px="8" mt="8">
        {tasks.map((task) => (
          <Card key={task.id} task={task} />
        ))}
      </Grid>
    </>
  );
}
