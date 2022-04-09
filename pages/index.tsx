import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader';
import Layout from '@components/Layout/Layout';
import ProductList from '@components/ProductList/ProductList';
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [avocados, setAvocados] = useState<TProduct[]>([]);
  useEffect(() => {
    window.fetch('/api/avo')
      .then(res => res.json())
      .then(({data, length}) => setAvocados(data));
  }, [])

  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={avocados} />
    </Layout>
  )
}

export default Home