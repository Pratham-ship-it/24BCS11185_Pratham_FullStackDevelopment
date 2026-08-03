import Restaurant from "./Restaurant";

function Home({ user }) {
  return (
    <div>
      <h2>Home</h2>
      <Restaurant user={user} />
    </div>
  );
}
export default Home;