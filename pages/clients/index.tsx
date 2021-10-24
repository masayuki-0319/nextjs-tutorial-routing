import Link from 'next/link';

const Index = () => {
  const clients = [
    { id: 'max', name: 'Maximilian' },
    { id: 'masayuki', name: 'Masayuki' },
  ];

  return (
    <div>
      <h1>Clients Index Page</h1>
      <ul>
        {clients.map((client) => {
          return (
            <li key={client.id}>
              <Link href={`/clients/${client.id}`}>{client.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Index;
