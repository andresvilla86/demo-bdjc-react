import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { ProtectedRoute } from "./components/ProtectedRoutes";
import { Register } from "./components/Register";
import Table from "./components/Table";
import { AuthProvider } from "./context/authContext";
import React from "react";
import { FetchData } from "./components/FetchData";
import  {LinkBook }from "./components/LinkBook";

function App() {

  const columns = React.useMemo(
    () => [
      {
        Header: "Titulo",
        accessor: "titulo",
      },
      {
        Header: "Contacto",
        accessor: "email",
      },
      {
        Header: "Autor(es)",
        accessor: "autor",
      },
      {
        Header: "URL",
        accessor: "linkUrl",
      },
      {
        Header: "Link",
        urlAccessor: "linkUrl",
        Cell: LinkBook,
      },
    
    ],
    []
  );

  const getData = () => [
    {
      titulo: "Biografía Doctor Jacinto Convit: Médico, científico, docente y humanista",
      email: "biblioteca@jacintoconvit.org",
      autor: "Drs. Katiuska C. Huerta1a, María A. Duarte2a, Jeismar M. Carballo3b, Maritza Mendez4a, Ramón Escovar5a, Ana F. Convit6ab*",
      linkUrl:
        "https://drive.google.com/file/d/10JRgiE-EitgPB2w0GJ3F9uWtkalVdWTU/view",
    },
    
  ];
  const data = React.useMemo(() => getData(), []);

  const myBooks = FetchData();
  console.log(myBooks)
  return (
    //<div className="bg-slate-300 h-screen text-white flex">
    <div>
      <Header />
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
                <Table columns={columns} data={data}/>
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}
export default App;
