import React, { useEffect, useState } from 'react'
import {useRouter} from 'next/router'
import Layout from '@components/Layout/Layout';
import ProductSummary from '@components/ProductSummary/ProductSummary';

const ProductItem = () => {
  const {query} = useRouter();
  const [avocado, setAvocado] = useState<TProduct | null>(null);
  useEffect(() => {
    if(!query.id) return;
    window.fetch(`/api/avo/${query.id}`)
      .then(res => res.json())
      .then((data:TProduct) => setAvocado(data));
  }, [query.id])

  return (
    <Layout>
      {avocado == null ? null : <ProductSummary product={avocado} />}
    </Layout>
  )
}

export default ProductItem