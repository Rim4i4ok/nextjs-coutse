import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();

  const { id } = router.query;

  return (
    <div>
      <h1>Client projects page with id: {id}</h1>
    </div>
  );
}

export default ClientProjectsPage;
