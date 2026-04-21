import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { Home } from "./pages/Home";
import { BlogIndex } from "./pages/BlogIndex";
import { BlogArticle } from "./pages/BlogArticle";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="min-h-screen bg-paper pt-[76px] text-ink dark:bg-[#0f0e0b] dark:text-zinc-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
