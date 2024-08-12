import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { HomePage } from "../pages/user/HomePage";
import { LoginPage } from "../pages/user/LoginPage";
import { SignupPage } from "../pages/user/SignupPage";
import { UserLayout } from "../layouts/UserLayout";
import { CoursePage } from "../pages/user/CoursePage";
import { CourseDetailsPage } from "../pages/user/CourseDetailsPage";
import { ErrorPage } from "../pages/user/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <HomePage />,
            },
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/signup",
                element: <SignupPage />,
            },
        ],
    },
    {
        path: "user",
        element: <UserLayout />,
        children: [
            {
                path: "course",
                element: <CoursePage />,
            },
            {
                path: "course-details/:id",
                element: <CourseDetailsPage />,
            },
        ],
    },
]);
