import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { HomePage } from "../pages/user/HomePage";
import { LoginPage } from "../pages/user/LoginPage";
import { SignupPage } from "../pages/user/SignupPage";
import { UserLayout } from "../layouts/UserLayout";
import { CoursePage } from "../pages/user/CoursePage";
import { CourseDetailsPage } from "../pages/user/CourseDetailsPage";
import { ErrorPage } from "../pages/user/ErrorPage";
import { UserAuth } from "./protectedRoutes/UserAuth";
import { ProfilePage } from "../pages/user/ProfilePage";
import { InstructorLoginPage } from "../pages/instructor/InstructorLogin";
import { CreateCoursePage } from "../pages/instructor/CreateCoursePage";
import { CartPage } from "../pages/user/CartPage";
import { Success } from "../pages/user/Success";
import { Cancel } from "../pages/user/Cancel";

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
                path: "about",
                element: <h1>About page</h1>,
            },
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "signup",
                element: <SignupPage />,
            },
        ],
    },
    {
        path: "user",
        element: (
            <UserAuth>
                <UserLayout />
            </UserAuth>
        ),
        children: [
            {
                path: "course",
                element: <CoursePage />,
            },
            {
                path: "profile",
                element: <ProfilePage />,
            },
            {
                path: "my-learnings",
                element: <h1>Learning dashboard</h1>,
            },
            {
                path: "course-details/:id",
                element: <CourseDetailsPage />,
            },
            {
                path: "cart",
                element: <CartPage />,
            },
            {
                path: "payment/success",
                element: <Success />,
            },
            {
                path: "payment/cancel",
                element: <Cancel />,
            },
        ],
    },
    {
        path: "instructor-login",
        element: <InstructorLoginPage />,
    },
    {
        path: "instructor",
        element: (
            <UserAuth>
                <UserLayout />
            </UserAuth>
        ),
        children: [
            {
                path: "course",
                element: <CoursePage />,
            },
            {
                path: "profile",
                element: <ProfilePage />,
            },
            {
                path: "course-details/:id",
                element: <CourseDetailsPage />,
            },
            {
                path: "create-course",
                element: <CreateCoursePage />,
            },
        ],
    },
]);
