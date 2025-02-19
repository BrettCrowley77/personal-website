import Layout from "@/components/Layout";
import EducationSection from "@/components/EducationSection";
import PublicationsSection from "@/components/PublicationsSection";
import Skills from "@/components/Skills";
import WhereIveWorked from "@/components/WhereIveWorked";

const About = () => {
  return (
    <Layout>
      <header className="page-header">
        <h1>About Me</h1>
      </header>
      <main>
        <EducationSection />
        <Skills />
        <WhereIveWorked />
        <PublicationsSection />
      </main>
    </Layout>
  );
};

export default About;
