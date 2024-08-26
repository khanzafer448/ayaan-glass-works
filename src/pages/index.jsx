import Home from "../components/home/home";
import Layout from "../components/layout/layout";

const IndexPage = () => {
  return (
    <Layout>
      <div className="home-page">
        <Home />
      </div>
    </Layout>
  );
};

export default IndexPage;
