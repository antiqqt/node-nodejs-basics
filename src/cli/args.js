const prefix = '--';
const glue = ', ';

const parseArgs = () => {
  const { argv } = process;
  const args = argv.slice(2);

  const reducer = (total, currentArg, index, array) => {
    const nextArg = array[index + 1];

    if (currentArg.startsWith(prefix) && nextArg) {
      total.push([currentArg.slice(2), nextArg]);
    }

    return total;
  };

  const mapper = ([key, val]) => `${key} is ${val}`;

  const results = args.reduce(reducer, []).map(mapper).join(glue);
  console.log(results);
};

parseArgs();
