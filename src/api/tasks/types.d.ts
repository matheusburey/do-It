export interface ITask {
  id: number;
  title: string;
  description: string;
  userId: number;
  completed: boolean;
}

export interface IResponseCreateTask {
  detail: {
    status: string;
  };
  data: ITask;
}

export interface IResponseGetTasks {
  detail: {
    status: string;
  };
  data: ITask[];
}
