import { useAuth } from "../../providers/Auth";

export function Dashboard() {
  const { signOut } = useAuth();
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={signOut} type="button">
        log out
      </button>
    </div>
  );
}
