import { getFaq } from '@/lib/services/faq-service';
import {
  Alert,
  AlertTitle,
} from '../ui/alert';
import Error404 from '../icon/error-404';
import EditForm from './edit-form';

export default async function FaqForm({ id }) {
  const notFoundAlert = (
    <Alert className="lg:max-w-2/3">
      <Error404 />
      <AlertTitle>FAQ not found.</AlertTitle>
    </Alert>
  );

  const parsedId = parseInt(id);
  if (isNaN(parsedId)) return notFoundAlert;

  const faq = await getFaq(parsedId);

  if (!faq) return notFoundAlert;

  return <EditForm faq={faq} />
}
