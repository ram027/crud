const Dashboard = () => {
  const blogs = [
    {
      id: 1,
      title: 'First blog',
      body: 'lorem ipsum lorem ispusm lorem ispusm lorem ',
    },
    {
      id: 2,
      title: 'First blog',
      body: 'lorem ipsum lorem ispusm lorem ispusm lorem ',
    },
    {
      id: 3,
      title: 'First blog',
      body: 'lorem ipsum lorem ispusm lorem ispusm lorem ',
    },
  ];
  return (
    <div>
      {blogs.map((blog) => {
        return (
          <div key={blog.id}>
            <h3>{blog.title}</h3>
            <pre>{blog.body}</pre>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
