import Layout from "@/components/Layout";
import coverImage from "@/assets/cover.jpg";
import "./styles.css";

const Home = () => {
  return (
    <Layout>
      <header className="page-header">
        <img src={coverImage} alt="Profile Cover" className="cover-image" />
        <h1>Brett Crowley</h1>
      </header>
      <main>
        <p>
          Welcome to my personal website! I’m a resourceful professional with a
          background in economics, software development, and engineering. My
          motivation is to help society work better for people and the planet.
        </p>
      </main>
    </Layout>
  );
};

export default Home;
