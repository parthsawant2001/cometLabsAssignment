import Image from 'next/image';
import Navbar from './components/Navbar';
import Hompage from './components/Hompage';

export default function Home() {
  return (
    <main className='relative'>
      <Navbar />
      <Hompage />
    </main>
  );
}
