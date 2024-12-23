"use client";

import FormRegister from "./FormRegister";

function RegisterPage() {
  return (
    <div>
      <h1 className="text-xl text-center">Đăng ký</h1>
      <div className="flex justify-center">
        <FormRegister />
      </div>
    </div>
  );
}

export default RegisterPage;
