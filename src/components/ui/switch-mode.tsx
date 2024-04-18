"use client";
import { useTheme } from "next-themes";
import { Button } from "./button";

export default function SwitchMode() {
  const { setTheme } = useTheme();

  return (
    <div className="flex gap-2 fixed bottom-5 left-5 z-20 justify-center items-center">
      <span>Debug dark mode tools: </span>
      <Button onClick={() => setTheme("light")}>Light</Button>
      <Button onClick={() => setTheme("dark")}>Dark</Button>
      <Button onClick={() => setTheme("system")}>System</Button>
    </div>
  );
}
