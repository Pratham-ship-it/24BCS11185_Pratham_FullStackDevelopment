import UserInfo from "./UserInfo";

function FoodMenu({ user }) {
  return (
    <div>
      <h4>Food Menu</h4>
      <UserInfo user={user} />
    </div>
  );
}
export default FoodMenu;