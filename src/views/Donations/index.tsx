import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { SignMessage } from '../../components/SignMessage';
import { SendTransaction } from '../../components/SendTransaction';
import { SendVersionedTransaction } from '../../components/SendVersionedTransaction';
import { chbTransaction } from '../../components/chbTransaction';

interface Donation {
  userName: string;
  title: string;
}

interface DonationPageViewProps {
  userName: string; // Add this prop
}

const DonationPageView: FC<DonationPageViewProps> = ({ userName }) => {
  const router = useRouter();
  const [donationData, setDonationData] = useState<Donation[]>([]);

  useEffect(() => {
    async function fetchDonationData() {
      try {
        const response = await fetch(`http://localhost:3000/Donation/${userName}`);
        const data: Donation[] = await response.json();
        setDonationData(data);
      } catch (error) {
        console.error('Error fetching donation data:', error);
        setDonationData([]);
      }
    }
    if (userName) {
      fetchDonationData();
    }
  }, [userName]);

  if (!userName) {
    return <div className="text-[57px] font-semibold" style={{ marginTop: '60px', transform: 'translateX(400px)' }}>404 Not Found</div>;
  }

  // ...rest of your component code
};

export default DonationPageView;
