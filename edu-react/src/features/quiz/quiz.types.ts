export type Question = {
  id: string;
  text: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
};
