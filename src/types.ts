export interface Task {
  id: string;
  text: string;
  time: string;
  timeCompleted?: string;
  date: string;
  completed: boolean;
}