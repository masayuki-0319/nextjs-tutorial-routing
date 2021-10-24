import { useRouter } from 'next/router';

const ClientProjectId = () => {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  return (
    <div>
      <h1>Client Show Project Page</h1>
    </div>
  );
};

export default ClientProjectId;
