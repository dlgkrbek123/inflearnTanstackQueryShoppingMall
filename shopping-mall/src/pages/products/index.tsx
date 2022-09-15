import { useQuery } from 'react-query';
import { fetcher, QueryKeys } from '../../queryClient';

const ProductListPage = () => {
  const { data } = useQuery(QueryKeys.PRODUCTS, () =>
    fetcher({ method: 'GET', path: '/products' })
  );

  console.log(data);

  return (
    <div>
      <ul>
        {data?.map((product) => {
          return <ProductItem {...product} key={product.id} />;
        })}
      </ul>
    </div>
  );
};

export default ProductListPage;
