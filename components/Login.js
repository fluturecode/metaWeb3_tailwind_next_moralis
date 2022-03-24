import Image from 'next/image';
import logo from './fluture_logo';

export const Login = () => {
  return (
    <div className="relative bg-black text-white">
      Login
      <div>{/* logo + logo button */}</div>
      <div>
        <Image src={logo}/>
      </div>
    </div>
  )
}
