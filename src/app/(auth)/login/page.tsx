import FormLogin from "./FormLogin";

function LoginPage() {
  return (
    <div>
      <h1 className="text-xl text-center">Đăng nhập</h1>
      <div className="flex justify-center">
        <FormLogin />
      </div>
    </div>
  );
}

export default LoginPage;
