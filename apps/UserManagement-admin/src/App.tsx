import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserShoppingListList } from "./userShoppingList/UserShoppingListList";
import { UserShoppingListCreate } from "./userShoppingList/UserShoppingListCreate";
import { UserShoppingListEdit } from "./userShoppingList/UserShoppingListEdit";
import { UserShoppingListShow } from "./userShoppingList/UserShoppingListShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"UserManagement"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="UserShoppingList"
          list={UserShoppingListList}
          edit={UserShoppingListEdit}
          create={UserShoppingListCreate}
          show={UserShoppingListShow}
        />
      </Admin>
    </div>
  );
};

export default App;
