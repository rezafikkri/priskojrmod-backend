import { Button } from './button';

function hasOtherSectionError(errors, activeLang) {
  if (errors.title && errors.content) {
    if (!errors.title[activeLang] && !errors.content[activeLang]) {
      return true;
    }
  } else if (errors.title && !errors.content && !errors.title[activeLang]) {
    return true;
  } else if (errors.content && !errors.title && !errors.content[activeLang]) {
    return true;
  }
  return false;
}

export default function FormLanguageToggle({
  activeLang,
  onToggle,
  errors,
}) {
  return (
    <div className="space-y-2 mb-6">
      <div className="flex space-x-2 mb-2">
        <Button
          variant="ghost"
          className={activeLang === 'id' ? 'bg-accent' : ''}
          onClick={() => onToggle('id')}
        >
          Indonesia
        </Button>
        <Button
          variant="ghost"
          className={activeLang === 'en' ? 'bg-accent' : ''}
          onClick={() => onToggle('en')}
        >
          English
        </Button>
      </div>
      <p className="text-sm text-muted-foreground">Select a language to enter the content.</p>
      {hasOtherSectionError(errors, activeLang) && (
        <p className="text-destructive text-sm">
          There are errors in the {activeLang === 'id' ? 'English' : 'Indonesian'} section.
        </p>
      )}
    </div>
  );
}
