// Это файл с кодом, который будет запускаться после действия с регвестом, но до того как он выполнится

import { NextResponse } from "next/server";

// Будет выполняться после каждого действия на сайте, например переходы между страницами
export function middleware(request) {
  return NextResponse.redirect(new URL("/", request.url));
}

// С этой настройкой, код выше выполнится только при переходе на то что в matcher
export const config = {
  matcher: ["/about:path*"],
};
