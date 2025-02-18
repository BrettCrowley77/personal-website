import Layout from "@/components/Layout";
import EducationSection from "@/components/EducationSection";
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
      </main>
    </Layout>
  );
};

export default About;
