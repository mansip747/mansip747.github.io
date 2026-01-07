import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { BlogPreview } from "@/components/BlogPreview";
import { ProjectsPreview } from "@/components/home/ProjectsPreview";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProjectsPreview />
      <BlogPreview />
    </Layout>
  );
};

export default Index;
