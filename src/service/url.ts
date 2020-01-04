const getUrl = (env: string = process.env.NODE_ENV) => {
  let url: string = '';
  switch (env) {
    case 'development':
      url = '/api/';
      break;
    default:
      url = '/';
  }
  return url;
};

export default getUrl;
