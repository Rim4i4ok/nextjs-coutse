import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();

  const { id } = router.query;

  console.log(router.query);

  function clientProjectHandler() {
    // some hard work
    router.push("/clients/max/someproject");
  }

  function clientProjectAltHandler() {
    // some hard work
    router.push({
      pathname: "/clients/[id]/[clientProjectId]",
      query: { id: "rim", clientProjectId: "someprojectalt" },
    });
  }

  return (
    <div>
      <h1>Client projects page with id: {id}</h1>
      <button onClick={clientProjectHandler}>Load Project</button>
      <button onClick={clientProjectAltHandler}>Load Project Alt</button>
    </div>
  );
}

export default ClientProjectsPage;
