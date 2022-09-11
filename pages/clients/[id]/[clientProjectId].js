import { useRouter } from "next/router";

function SelectedClientProjectsPage() {
  const router = useRouter();

  const { clientProjectId, id } = router.query;

  return (
    <div>
      <h1>Selected client projects page</h1>
      <div>Client id: {id}</div>
      <div>Client project id: {clientProjectId}</div>
    </div>
  );
}

export default SelectedClientProjectsPage;
