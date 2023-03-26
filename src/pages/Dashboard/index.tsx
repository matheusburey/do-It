import { Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { useAuth } from "../../providers/Auth";
import { useTasks } from "../../providers/Tasks";
import { Card } from "./Card";
import { Search } from "./Search";

export function Dashboard() {
  const { user } = useAuth();
  const { tasks, loadTasks } = useTasks();
  const [loading, setLoading] = useState(false);

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
          <Card key={task.id} task={task} />
        ))}
      </Grid>
    </>
  );
}
