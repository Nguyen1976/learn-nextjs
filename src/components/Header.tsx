import React from "react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/login">
            Đăng nhập
          </Link>
        </li>
        <li>
          <Link href="/register">
            Đăng ký
          </Link>
        </li>
      </ul>
      <ModeToggle />
    </div>
  );
}
