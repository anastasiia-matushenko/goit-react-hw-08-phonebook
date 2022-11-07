import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ContactsPage } from "pages/ContactsPage/ContactsPage";
import { HomePage } from "pages/HomePage/HomePage";
import { LoginPage } from "pages/LoginPage/LoginPage";
import { RegisterPage } from "pages/RegisterPage/RegisterPage";
import { Layout } from "./Layout/Layout";
import { selectIsFetchingCurrentUser } from "redux/auth/authSelectors";
import { fetchCurrentUser } from "redux/auth/authOperations";
import { PublicRoute } from "HOCs/PublicRoute";
import { PrivateRoute } from "HOCs/PrivateRoute";


export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isFetchingCurrentUser ? <b>Refreshing user...</b> : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<PublicRoute><HomePage /></PublicRoute>} />
            <Route path="contacts" element={<PrivateRoute><ContactsPage /></PrivateRoute>} />
            <Route path="register" element={<PublicRoute restricted><RegisterPage /></PublicRoute>} />
            <Route path="login" element={<PublicRoute restricted><LoginPage /></PublicRoute>} />
          </Route>
        </Routes>)}
    </>
  );
};
