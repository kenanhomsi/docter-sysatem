import {Footer} from "@/components/Footer";
import {Navbar} from "@/components/Navbar";
import {TopBar} from "@/components/TopBar";

export default function BlogLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-1 flex-col">
      <TopBar />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

