"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function ThemeProvider({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      enableColorScheme={false}
      storageKey="mavyn-theme"
      disableTransitionOnChange={false}
      themes={["light", "dark"]}
    >
      {children}
    </NextThemesProvider>
  );
}
