import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // optimizeDeps: {
  //   include: ["prop-types"], // کتابخانه‌هایی که نیاز دارید را اینجا تنظیم کنید
  // },
});
