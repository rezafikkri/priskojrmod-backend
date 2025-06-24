import { getCategories } from '@/lib/services/category-service';
import CreateForm from './create-form';
import { getOwners } from '@/lib/services/owner-service';
import { getLicensesWithTranslation } from '@/lib/services/license-service';

export default async function ProductForm() {
  const categories = await getCategories({
    id: true,
    name: true,
  });
  const owners = await getOwners({
    id: true,
    first_name: true,
  });
  const licenses = await getLicensesWithTranslation();

  return <CreateForm categories={categories} owners={owners} licenses={licenses} />;
}
