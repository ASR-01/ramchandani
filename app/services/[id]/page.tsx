import { notFound } from 'next/navigation';
import { getServiceById } from '@/lib/services-data';
import ServiceDetail from '@/components/Services/ServiceDetail';
import ServicesCta from '@/components/Services/ServicesCta';

const ServicePage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const service = getServiceById(id);

  if (!service) {
    notFound();
  }

  return (
    <div className="w-full h-fit">
      <ServiceDetail service={service} />
      <ServicesCta />
    </div>
  );
};

export default ServicePage;