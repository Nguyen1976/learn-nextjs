import React from "react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link rel="stylesheet" href="/login">
            Đăng nhập
          </Link>
        </li>
        <li>
          <Link rel="stylesheet" href="/register">
            Đăng ký
          </Link>
        </li>
      </ul>
      <ModeToggle />
    </div>
  );
}
