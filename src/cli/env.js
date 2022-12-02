const prefix = 'RSS_';

const parseEnv = () => {
  const { env } = process;
  const results = Object.entries(env)
    .filter(([key]) => key.startsWith(prefix))
    .map(([key, val]) => `${key}=${val}`);

  console.log(results.join('; '));
};

parseEnv();
