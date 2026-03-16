import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";

import router from "@/routes";

const container = document.getElementById("app");
if (!container) throw new Error("Failed to find the root element");
const root = createRoot(container);

root.render(<RouterProvider router={router} />);
