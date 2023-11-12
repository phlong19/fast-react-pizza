import { useSelector, useDispatch } from "@reduxjs/toolkit";

function Username() {
  const username = useSelector((store) => store.user.username);

  if (!username) return null;

  return (
    <div className="hidden text-right text-sm font-semibold md:block">
      {username}
    </div>
  );
}

export default Username;
