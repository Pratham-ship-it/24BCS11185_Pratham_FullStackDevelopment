import FoodMenu from "./FoodMenu";

function Restaurant({ user }) {
  return (
    <div>
      <h3>Restaurant: Punjabi Tadka</h3>
      <FoodMenu user={user} />
    </div>
  );
}
export default Restaurant;