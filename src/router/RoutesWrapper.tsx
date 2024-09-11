import { createElement, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { adminRoutes } from "./routes";
import Loading from "src/components/Common/Loading";
import NotFound from "src/pages/NotFound/NotFound";
import PanelLayout from "src/layouts/PanelLayout";
import { useTranslation } from "react-i18next";

const RoutesWrapper = () => {
  const { t } = useTranslation();

  const SelectedLayout = PanelLayout;
  const selectedRoute =  adminRoutes(t);
  const redirectFromRootPath =  "/dashboard";

  return (
    <BrowserRouter>
      <SelectedLayout>
        <Suspense fallback={<Loading />}>
          <Routes>
            {/* 404 Page  */}
            <Route path="*" element={<NotFound />} />

            {/* Redirect from root  */}
            <Route
              path="/"
              element={<Navigate replace to={redirectFromRootPath} />}
            />

            {/* Routes  */}
            {selectedRoute.map((item, index) =>
              !item?.children ? (
                <Route
                  key={index}
                  path={item.path}
                  element={createElement(item.component)}
                />
              ) : (
                // Render route for children
                item.children.map((child, index) => (
                  <Route
                    key={index}
                    path={child.path}
                    element={createElement(child.component)}
                  />
                ))
              )
            )}
          </Routes>
        </Suspense>
      </SelectedLayout>
    </BrowserRouter>
  );
};

export default RoutesWrapper;
