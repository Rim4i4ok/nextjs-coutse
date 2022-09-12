import Link from "next/link";

function ClientsPage() {
  const clients = [
    { id: "rim", name: "Rim4i4ok" },
    { id: "bar", name: "Barlog" },
    { id: "lem", name: "Lembas" },
  ];

  return (
    <div>
      <h1>Clients page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
