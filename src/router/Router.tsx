import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "./../layout";
import { RouterLinks } from "../constants/links";
import ItemPage from "../pages/ItemPage";
import ChildrenPage from "../pages/ChildrenPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={RouterLinks.Home} element={<HomePage />} />
          <Route path={RouterLinks.MenuItem1} element={<ItemPage id={1} />} />
          <Route path={RouterLinks.MenuItem2} element={<ItemPage id={2} />} />
          <Route path={RouterLinks.MenuItem3} element={<ItemPage id={3} />} />
          <Route path={RouterLinks.MenuItem4} element={<ItemPage id={3} />}>
            <Route
              path={RouterLinks.MenuItem4 + RouterLinks.ChildrenItem1}
              element={<ChildrenPage id={1} />}
            />
            <Route
              path={RouterLinks.MenuItem4 + RouterLinks.ChildrenItem2}
              element={<ChildrenPage id={2} />}
            />
            <Route
              path={RouterLinks.MenuItem4 + RouterLinks.ChildrenItem3}
              element={<ChildrenPage id={3} />}
            />
            <Route
              path={RouterLinks.MenuItem4 + RouterLinks.ChildrenItem4}
              element={<ChildrenPage id={4} />}
            />
          </Route>
          <Route path={RouterLinks.MenuItem5} element={<ItemPage id={5} />} />
          <Route path={RouterLinks.MenuItem6} element={<ItemPage id={6} />} />
          <Route path={RouterLinks.MenuItem7} element={<ItemPage id={7} />} />
          <Route path={RouterLinks.MenuItem8} element={<ItemPage id={8} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
