import Navbar from '@/app/components/Navbar';
import DealDetails from '@/app/components/DealDetails';

export default function DealDetailsPage() {
  // This would typically come from an API or database
  const company = {
    name: 'Inox Leasing and Finance',
    logo: '💼',
    code: 'INE608E01014',
    type: 'Investment',
    location: 'MUMBAI'
  };

  return (
    <div>
      <Navbar />
      <DealDetails company={company} />
    </div>
  );
}