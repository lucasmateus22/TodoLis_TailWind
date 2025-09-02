export interface Task {
  id: string;
  text: string;
  time: string;
  date: string;
  completed: boolean;
  timeCompleted?: string; // só vem se completed = true
}