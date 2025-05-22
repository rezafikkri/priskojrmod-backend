'use client';

import { useCallback, useState } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from './button';
import { Input } from './input';
import {
  Trash,
  LinkIcon,
  CornerDownLeft,
  ExternalLink,
} from 'lucide-react';
import { ToggleGroupItem } from '@/components/ui/toggle-group';
import { Separator } from './separator';

export default function LinkPopover({
  editor
}) {
  // manage link
  const [url, setUrl] = useState(editor.getAttributes('link').href ?? '');
  const [isOpen, setIsOpen] = useState(false);
  const setLink = useCallback(() => {
    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }

    // update link
    try {
      editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
    } catch (err) {
      console.error(err);
    }
  }, [editor, url]);

  return (
    <Popover onOpenChange={(open) => {
      if (!open) {
        setUrl('');
        editor.chain().focus();
      } else if(editor.isActive('link') && url === '') {
        setUrl(editor.getAttributes('link').href);
      }
      setIsOpen(open);
    }}>
      <PopoverTrigger asChild>
        <ToggleGroupItem
          value="link"
          aria-label="Toggle link"
          className="hover:text-accent-foreground data-[state=on]:text-green-700 dark:data-[state=on]:text-green-600"
          data-state={(editor.isActive('link') || isOpen) ? 'on' : 'off'}
        >
          <LinkIcon className="z-4" />
        </ToggleGroupItem>
      </PopoverTrigger>
      <PopoverContent className="p-0 flex items-center rounded-lg">
        <Input
          className="shadow-none border-0 focus-visible:ring-0 md:text-base h-auto ps-3 pe-1.5 py-2 dark:bg-transparent"
          placeholder="Enter a URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          autoFocus="false"
        />
        <div className="flex right-0 top-0 pe-[0.125rem] items-center gap-[0.125rem]">
          <Button
            variant="ghost"
            className="has-[>svg]:px-2 rounded-t-none rounded-b-none"
            onClick={setLink}
            disabled={url === ''}
          >
            <CornerDownLeft />
          </Button>
          <Separator orientation="vertical" className="h-7!" />
          <Button
            variant="ghost"
            className={`has-[>svg]:px-2 rounded-t-none rounded-b-none hover:cursor-pointer ${url === '' ? 'pointer-events-none opacity-50' : ''}`}
            asChild
          >
            <a
              href={url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ExternalLink />
            </a>
          </Button>
          <Button
            variant="ghost"
            className="has-[>svg]:px-2 rounded-s-none hover:bg-red-100/70 dark:hover:bg-red-300/10"
            disabled={url === ''}
            onClick={() => {
              setUrl('');
              editor.chain().focus().extendMarkRange('link').unsetLink().run();
            }}
          >
            <Trash />
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
