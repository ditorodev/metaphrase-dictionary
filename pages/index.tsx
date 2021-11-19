import Head from 'next/head'
import Image from 'next/image'

import Layout from '../components/Layout'
import DefinitionArticle from '../components/DefinitionArticle';

const CryptocurrencyArt = ({ className }: { className?: string }) => (<svg width="150" height="162" viewBox="0 0 150 162" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
  <circle cx="81.0051" cy="92.6087" r="48.7216" transform="rotate(-142.939 81.0051 92.6087)" fill="black" stroke="white" />
  <circle cx="79.7011" cy="89.9791" r="48.7216" transform="rotate(-142.939 79.7011 89.9791)" fill="black" stroke="#FFF5DB" />
  <circle cx="78.3976" cy="87.3497" r="48.7216" transform="rotate(-142.939 78.3976 87.3497)" fill="black" stroke="#FFEDBE" />
  <circle cx="77.0937" cy="84.72" r="48.7216" transform="rotate(-142.939 77.0937 84.72)" fill="black" stroke="#FFE49D" />
  <circle cx="75.79" cy="82.0906" r="48.7216" transform="rotate(-142.939 75.79 82.0906)" fill="black" stroke="#FFDC83" />
  <circle cx="74.4863" cy="79.461" r="48.7216" transform="rotate(-142.939 74.4863 79.461)" fill="black" stroke="#FFD363" />
  <circle cx="73.1823" cy="76.8314" r="48.7216" transform="rotate(-142.939 73.1823 76.8314)" fill="black" stroke="#FFCC47" />
  <circle cx="71.8786" cy="74.202" r="48.7216" transform="rotate(-142.939 71.8786 74.202)" fill="black" stroke="#FFC32A" />
  <circle cx="70.5746" cy="71.5723" r="48.7216" transform="rotate(-142.939 70.5746 71.5723)" fill="black" stroke="#FFBD13" />
  <circle cx="68.9428" cy="68.9429" r="48.2216" transform="rotate(-142.939 68.9428 68.9429)" fill="black" stroke="#FFA800" strokeWidth="2" />
</svg>
)

export default function Home() {
  return (
    <Layout>
      <div className="flex -mt-5 h-full">
        {/* sidemenu */}
        <div className="border-r  border-opacity-40  border-maintext w-1/4 p-10">
          <ul className='list text-white'>
            <li className='list-item'>
              <span className='font-serif text-xl'>
                Terminology
              </span>
              <ul className='list pl-6 pt-2'>
                {definitions.map(({ title }, index) => {
                  return (<li className='list-item list-disc underline text-linkaccent' key={`${title}_${index}`}>
                            <a href={`/d/${title.replace(/\s/g, '_').toLowerCase()}`}>
                              <span className='font-bold'>
                                {title}
                              </span>
                            </a>
                          </li>)
                })}
              </ul>
            </li>
          </ul>
        </div>
        {/* main-content */}
        <div className="space-y-5 w-3/4 max-h-full overflow-y-auto">
          {definitions.map((definition, index) => (<DefinitionArticle key={`${index}_${definition.title}`} title={definition.title} definition={definition.definition} type={definition.type} />))}
        </div>
      </div>
    </Layout>
  )
}

const definitions = [
  {
    title: 'Cryptocurrency',
    definition: 'Cryptocurrency is a digital currency in which transactions are verified and records maintained by a decentralized system using cryptography, rather than by a centralized authority.',
    type: 'terminology'
  },
  {
    title: 'Blockchain',
    definition: 'Blockchain is a system in which a record of transactions made in bitcoin or another cryptocurrency are maintained across several computers that are linked in a peer-to-peer network.',
    type: 'terminology'
  },
  {
    title: 'Orange Pill',
    definition: 'Orange Pill is in reference to someone who has placed ultra high conviction in Bitcoin specifically, either in thought or in their financial stake. \nEx: “I just gave a 20 minute speech to my buddy about Bitcoin. Ended with him taking the Orange Pill.”',
    type: 'terminology'
  },
  {
    title: 'WAGMI',
    definition: 'WAGMI is a common acronym that stands for “We’re All Gonna Make It.” It is used to illustrate extreme optimism and that everyone participating in whatever it’s in reference to will reap massive financial upside. \nEx: “Was wishing I bought in earlier and then I realized it didn’t matter cause WAGMI.”',
    type: 'terminology'
  },
  {
    title: 'ATH',
    definition: 'ATH is an acronym that stands for “All Time High.” It is used to indicate the point in which an asset or security trade’s at a market price higher than it has at any other point in time.',
    type: 'terminology'
  },
  {
    title: 'Pump and Dump',
    definition: 'Pump and Dump is a commong trading phrase that is used to denote the fraudulent practice of encouraging investors to buy into an asset or security in order to inflate the price artificially, and then selling one\'s own stake while the price is high, resulting in a steep drop in price.',
    type: 'terminology'
  }
]
