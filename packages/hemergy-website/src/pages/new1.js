import { Web3Button } from '@web3modal/react'
import { useAccount } from 'wagmi'

export default function HomePage() {
  const { address, isConnected } = useAccount()
  return (
    <>
      {false ? address
        :
        <Web3Button icon="show" label="Connect Wallet" balance="show" />}


    </>
  )
}

