import { NextResponse } from "next/server";

export function proxy(request) {
  // Add your middleware logic here
  // Example: redirect, auth check, etc.
  return NextResponse.next();
}
