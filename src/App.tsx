import { Outlet, Route, Routes } from "react-router";
import ShadcnPoint from "./shadcn/ShadcnPoint";
import { Toaster } from "sonner";
import IndexPage from "@/pages/index-page";
import SignInPage from "./pages/sign-in-page";
import SignUpPage from "./pages/sign-up-page";
import CounterPage from "./pages/counter-page";
import TodoListPage from "./pages/todo-list-page";
import TodoDetailPage from "./pages/todo-detai-page";

function AuthLayout() {
  return (
    <div>
      auth layout
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/counter" element={<CounterPage />} />
      <Route path="/todolist" element={<TodoListPage />} />
      <Route path="/todolist/:id" element={<TodoDetailPage />} />
      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Route>
    </Routes>
  );
}

export default App;
