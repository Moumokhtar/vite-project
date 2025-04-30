import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <div>تسجيل الدخول</div>
      <Link to="/login">
        <button>Go to Login</button>
      </Link>
    </div>
  );
}
