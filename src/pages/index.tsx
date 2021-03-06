import { allPages } from "contentlayer/generated";
import { PageBox } from "src/components/page-box";
import { Box } from "theme-ui";

// TODO: Set up getStaticProps to optimise build

const Home = () => {
  const homePage = allPages.find((post) => post.slug === "");
  if (homePage) return <PageBox post={homePage} />;
  else return <Box>Not found</Box>;
};
export default Home;
