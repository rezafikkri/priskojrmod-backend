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
}) {
  const { errors, isSubmitting } = formState;
  const isContentError = Boolean(errors.content && errors.content[activeLang]);

  return (
    <FormItem>
      <FormLabel className="text-base">
        Content
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
      <FormDescription>Enter the content.</FormDescription>
      {isContentError && (
        <p className="text-destructive text-sm">
          {errors.content[activeLang].message}
        </p>
      )}
    </FormItem>
  );
}
