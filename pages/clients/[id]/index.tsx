import { useRouter } from 'next/router';

const Show = () => {
  const router = useRouter();

  console.log(router.query);
  const loadProjectHandler = () => {
    router.push({
      pathname: '/clients/[id]/[projectid]',
      query: {
        id: router.query?.id,
        projectid: 'Project_A',
      },
    });
  };

  return (
    <div>
      <h1>Clients Show Page</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default Show;
