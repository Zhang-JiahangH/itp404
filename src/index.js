import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Routes/App";
import Login from "./Routes/Login";
import Register from "./Routes/Register";
import reportWebVitals from "./reportWebVitals";
import {
  saveComment,
  deletComment,
  updateComment,
  fetchComment,
} from "./Services";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
  redirect,
} from "react-router-dom";
import MyComponent from "./Routes/Main";
import Profile from "./Routes/Profile";
import { getComments } from "./Services";
import Comments from "./Routes/Comments";
import LeaveComment from "./Routes/LeaveComment";
import EditComment from "./Routes/EditComment";
import { createStandaloneToast } from "@chakra-ui/toast";
import NotFound from "./Routes/NotFound";

const { toast } = createStandaloneToast();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/map",
        element: <MyComponent />,
      },
      {
        path: "/profile",
        element: <Profile />,
        children: [
          {
            path: "/profile/comments",
            element: <Comments />,
            loader() {
              return getComments();
            },
          },
          {
            path: "/profile/comments/new",
            element: <LeaveComment />,
            action({ request, params }) {
              return request.formData().then((formData) => {
                console.log(formData.get("content"));
                return saveComment(
                  formData.get("content"),
                  formData.get("beach"),
                  formData.get("score")
                ).then(() => {
                  toast({
                    title: "Comment created.",
                    description: "Successfully create a comment.",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                  });
                  return redirect(`/profile/comments`);
                });
              });
            },
          },
        ],
      },
      {
        path: "/profile/comments/:id/destroy",
        action({ params, request }) {
          // deleting the comment
          return request.formData().then((formData) => {
            return deletComment(params.id).then(() => {
              toast({
                title: "Comment deleted.",
                description: "Successfully delete a comment.",
                status: "success",
                duration: 9000,
                isClosable: true,
              });
              // redirect
              return redirect(`/profile/comments`);
            });
          });
        },
      },
      {
        path: "/profile/comments/:id/edit",
        element: <EditComment />,
        loader({ params }) {
          return fetchComment(params.id);
        },
        action({ request, params }) {
          return request.formData().then((formData) => {
            console.log(
              params.id,
              formData.get("content"),
              formData.get("score")
            );
            return updateComment(
              params.id,
              formData.get("content"),
              formData.get("score")
            ).then(() => {
              toast({
                title: "Comment updated.",
                description: "Successfully update a comment.",
                status: "success",
                duration: 9000,
                isClosable: true,
              });
              return redirect(`/profile/comments`);
            });
          });
        },
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <RouterProvider 
    router={router} 
  />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
