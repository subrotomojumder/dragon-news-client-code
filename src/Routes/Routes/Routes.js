import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Category from "../../Pages/Category/Category/Category";
import Home from "../../Pages/Home/Home";
import Register from "../../Pages/Home/Register/Register";
import Login from "../../Pages/Login/Login";
import News from "../../Pages/News/News/News";
import Profile from "../../Pages/Other/Profile";
import TermsAndConditions from "../../Pages/TermsAndConditions/TermsAndConditions";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('https://danger-news-server.vercel.app/news')
            },
            {
                path: 'category/:id',
                element: <Category></Category>,
                loader: ({params})=> fetch(`https://danger-news-server.vercel.app/category/${params.id}`)
            },
            {
                path: 'news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({params}) => fetch(`https://danger-news-server.vercel.app/news/${params.id}`)
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: 'profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }
        ]
    }
])