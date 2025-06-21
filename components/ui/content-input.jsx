import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
} from '../ui/form';
import { Badge } from '@/components/ui/badge';
import Editor from '../ui/editor';

export default function ContentInput({
  field,
  formState,
  activeLang,
  isResetEditor,
  description,
  label = 'Content',
}) {
  const { errors, isSubmitting } = formState;
  const isContentError = Boolean(errors.content && errors.content[activeLang]);

  return (
    <FormItem>
      <FormLabel className="text-base">
        {label}
        <Badge variant="secondary">{activeLang.toUpperCase()}</Badge>
      </FormLabel>
      <FormControl>
        <Editor
          {...field}
          isError={isContentError}
          isSubmitting={isSubmitting}
          isResetEditor={isResetEditor}
        />
      </FormControl>
      <FormDescription>{description}</FormDescription>
      {isContentError && (
        <p className="text-destructive text-sm">
          {errors[field.name][activeLang].message}
        </p>
      )}
    </FormItem>
  );
}
