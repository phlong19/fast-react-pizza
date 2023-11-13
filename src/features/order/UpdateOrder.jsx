import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="patch">
      <Button disabled={fetcher.state !== "idle"} type="primary">
        {fetcher.state !== "idle" ? "Updating..." : "Make priority"}
      </Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ params }) {
  await updateOrder(params.id, { priority: true });
  return null;
}
