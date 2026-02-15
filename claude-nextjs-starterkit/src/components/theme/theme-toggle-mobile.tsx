"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

// 모바일용 테마 토글 (인라인 버튼 그룹)
export function ThemeToggleMobile() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // hydration 깜빡임 방지
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const options = [
    { value: "light", label: "라이트", icon: Sun },
    { value: "dark", label: "다크", icon: Moon },
  ] as const;

  return (
    <div className="px-3">
      <p className="mb-2 text-sm font-medium text-muted-foreground">테마</p>
      <div className="grid grid-cols-2 gap-2">
        {options.map((option) => (
          <Button
            key={option.value}
            variant={theme === option.value ? "secondary" : "ghost"}
            size="sm"
            className="w-full gap-1.5"
            onClick={() => setTheme(option.value)}
          >
            <option.icon className="h-4 w-4" />
            {option.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
