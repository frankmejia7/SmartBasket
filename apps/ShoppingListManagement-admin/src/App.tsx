import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ShoppingListList } from "./shoppingList/ShoppingListList";
import { ShoppingListCreate } from "./shoppingList/ShoppingListCreate";
import { ShoppingListEdit } from "./shoppingList/ShoppingListEdit";
import { ShoppingListShow } from "./shoppingList/ShoppingListShow";
import { ShoppingListProductList } from "./shoppingListProduct/ShoppingListProductList";
import { ShoppingListProductCreate } from "./shoppingListProduct/ShoppingListProductCreate";
import { ShoppingListProductEdit } from "./shoppingListProduct/ShoppingListProductEdit";
import { ShoppingListProductShow } from "./shoppingListProduct/ShoppingListProductShow";
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
        title={"ShoppingListManagement"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ShoppingList"
          list={ShoppingListList}
          edit={ShoppingListEdit}
          create={ShoppingListCreate}
          show={ShoppingListShow}
        />
        <Resource
          name="ShoppingListProduct"
          list={ShoppingListProductList}
          edit={ShoppingListProductEdit}
          create={ShoppingListProductCreate}
          show={ShoppingListProductShow}
        />
      </Admin>
    </div>
  );
};

export default App;
