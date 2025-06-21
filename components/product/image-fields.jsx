'use client';

import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';
import { Checkbox } from '../ui/checkbox';

export default function ImageFields({
  onAppend,
  images,
}) {
  function computeHasThumbnail() {
    return images.some(image => image.isThumbnail);
  }

  const [hasThumbnail, setHasThumbnail] = useState(computeHasThumbnail);
  const [hasAttemptedAdd, setHasAttemptedAdd] = useState(false);
  const [url, setUrl] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [isThumbnail, setIsThumbnail] = useState(false);

  useEffect(() => {
    const computedHasThumbnail = computeHasThumbnail();
    if (computedHasThumbnail !== hasThumbnail) {
      setHasThumbnail(computedHasThumbnail);
    }
  }, [images]);

  function handleAdd() {
    if (!hasAttemptedAdd) {
      setHasAttemptedAdd(true);
    }
    onAppend({
      url,
      width,
      height,
      isThumbnail,
    });
    if (!hasThumbnail && isThumbnail) {
      setHasThumbnail(true);
    } 
    setIsThumbnail(false);
    setUrl('');
  }

  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="url" className="text-base">Url</Label>
        <Input
          type="text"
          id="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="shadow-none md:text-base h-auto px-3 py-1.5"
        />
        <p className="text-muted-foreground text-sm">Enter the image URL.</p>
      </div>
      <div className="flex gap-3">
        <div className="flex-1 space-y-2">
          <Label htmlFor="width" className="text-base">Width</Label>
          <div className="flex">
            <Input
              type="number"
              id="width"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              className="shadow-none md:text-base h-auto px-3 py-1.5 rounded-e-none z-1"
            />
            <span className="inline-block md:text-base h-auto px-3 py-1.5 border border-s-0 rounded-e-md bg-zinc-50 dark:bg-zinc-900/50">px</span>
          </div>
          <p className="text-muted-foreground text-sm">Enter the image width.</p>
        </div>
        <div className="flex-1 space-y-2">
          <Label htmlFor="height" className="text-base">Height</Label>
          <div className="flex">
            <Input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="shadow-none md:text-base h-auto px-3 py-1.5 rounded-e-none z-1"
            />
            <span className="inline-block md:text-base h-auto px-3 py-1.5 border border-s-0 rounded-e-md bg-zinc-50 dark:bg-zinc-900/50">px</span>
          </div>
          <p className="text-muted-foreground text-sm">Enter the image height.</p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <Checkbox
          id="is_thumbnail"
          checked={isThumbnail}
          onCheckedChange={() => setIsThumbnail(prev => !prev)}
          disabled={hasThumbnail}
        />
        <div className="space-y-2">
          <Label htmlFor="is_thumbnail" className="text-base leading-none">Use as Thumbnail</Label>
          <p className="text-muted-foreground text-sm">
            Check if this image should be used as the main thumbnail on the product page.
          </p>
        </div>
      </div>

      <Button
        type="button"
        variant="secondary"
        className="text-base px-3 py-1.5 h-auto! inline-block"
        onClick={handleAdd}
      >
        <Plus className="icon" /> Add Image
      </Button>
    </>
  );
}
