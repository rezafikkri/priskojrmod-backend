import {
  Alert,
  AlertTitle,
} from '../ui/alert';
import Error404 from '../icon/error-404';
import { getCategory } from '@/lib/services/category-service';
import EditForm from './edit-form';

export default async function CategoryForm({ id }) {
  const notFoundAlert = (
    <Alert className="lg:max-w-2/3">
      <Error404 />
      <AlertTitle>Category not found.</AlertTitle>
    </Alert>
  );

  const parsedId = parseInt(id);
  if (isNaN(parsedId)) return notFoundAlert;

  const category = await getCategory(parsedId);

  if (!category) return notFoundAlert;

  return <EditForm category={category} />
}
