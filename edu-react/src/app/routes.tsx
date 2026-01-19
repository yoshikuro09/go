import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layout/RootLayout";
import { DashboardPage } from "../pages/DashboardPage/DashboardPage";
import { LessonsPage } from "../pages/LessonsPage/LessonsPage";
import { LessonPage } from "../pages/LessonPage/LessonPage";
import { QuizPage } from "../pages/QuizPage/QuizPage";
import { ProgressPage } from "../pages/ProgressPage/ProgressPage";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <div style={{ padding: 16 }}>Router error / 404</div>,
    children: [
      { path: "/", element: <DashboardPage /> },
      { path: "/lessons", element: <LessonsPage /> },
      { path: "/lessons/:id", element: <LessonPage /> },
      { path: "/lessons/:id/quiz", element: <QuizPage /> },
      { path: "/progress", element: <ProgressPage /> },
    ],
  },
]);
