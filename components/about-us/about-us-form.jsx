import { getAboutUs } from '@/lib/services/about-us-service';
import EditForm from './edit-form';

export default async function AboutUsForm() {
  const aboutUs = await getAboutUs();
  return <EditForm aboutUs={aboutUs} />
}
