import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";
import { useStore } from "@/hooks/useStore";

afterEach(() => {
  cleanup();
  useStore.setState({ count: 0 });
});
