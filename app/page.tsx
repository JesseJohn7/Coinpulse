import React from 'react'
import Image from 'next/image'
import Datatable from '@/components/Datatable'
import { Link } from 'lucide-react'

const columns : DataTableColumn<TrendingCoin>[] = [
  {
  header: 'name',
  cellClassName:'name-cell',
  cell:(coin)=>{
      const item = coin.item

      return (
        <Link href={`/coins/${item.id}`}>
          <Image src={item.large} alt={item.name} width={36} height={36}/>
          <p>{item.name}</p>
                  </Link>      
                  )
  }
  {
    header:'24hr change',
    cellClassName:'name-cell',
    cell:(coin) =>{
      const item = coin.item
      const change = item.data.price_change_percentage_24h.usd > 0
    }
  }
}
]
  return (

  <main className='main-container'>
    <section className='home-grid'>
      <div id='coin-overview'>
        <div className='header pt-2'>
          <Image src='https://assets.coingecko.com/coins/images/1/large/bitcoin.png' alt='Bitcoin' width={56} height={56} />
          <div className='info'>
            <p className='name'>Bitcoin / BTC</p>
            <h1>$89,113.00</h1>
          </div>
        </div>
      </div>

      <p>Trending Coins</p>
      <Datatable data={[]} columns = {[{header:'Title'},{header:'Price'}]} />
    </section>

    <section className='w-full mt-7 space-y-4'>
      <p>Categories</p>
    </section>
  </main>
  )
}

export default page