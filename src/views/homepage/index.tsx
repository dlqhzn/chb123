import { FC } from "react";
import Link from "next/link";
import Image from 'next/image';

export const Homepageview: FC = ({ }) => {
    return (
        <div>
        <div className="main">
        <Image className="mainimg" src="/chbimg.png" alt="chb img" width={200}  height={0}/>
        </div>
        <div className='maintext'>
        Streamig as a donation.<br></br>Let&apos;s make it together
        </div>
        <div className='sidetext'>
        Gat the money to the streamer.
        </div>
        <Link href={'/home'}>
        <button className="button1">Lunch app</button>
        </Link>
        <a href='https://www.charactbit.com/' target='blank'><button className='button2'>Read Doce</button></a>
    </div>
    );
};