import { QueryClient } from 'react-query';

const SERVER_URL = 'https://fakestoreapi.com';

export const getClient = (() => {
  let client: QueryClient | any = null;

  return () => {
    if (!client) client = new QueryClient({});
    return client;
  };
})();

export const fetcher = async ({
  method,
  path,
  params,
  body,
}: {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  params?: any;
  body?: { [key: string]: any };
}) => {
  try {
    const url = `${SERVER_URL}${path}`;
    const fetchOptions = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Access_Control-Allow-Origin': SERVER_URL,
      },
    };

    const res = await fetch(url, fetchOptions);
    const json = await res.json();
    return json;
  } catch (e) {
    console.error(e);
  }
};

export const QueryKeys = {
  PRODUCTS: 'PRODUCTS',
};
