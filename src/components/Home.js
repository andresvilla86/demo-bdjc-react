import { async } from "@firebase/util";
import { useAuth } from "../context/authContext";

export function Home() {
  const { user, logout } = useAuth();

  console.log(user);
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h1>Bienvenido {}</h1>
      
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
