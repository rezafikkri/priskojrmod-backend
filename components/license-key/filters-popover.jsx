import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Label } from '../ui/label';
import { Filter } from 'lucide-react';
import { Button } from '../ui/button';
import { X } from 'lucide-react';

export default function FiltersPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="text-base px-3 py-1.5 h-auto"><Filter />Filter</Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-80 space-y-5"
        onInteractOutside={(e) => {
          if (e.target?.hasAttribute('lang')) e.preventDefault();
        }}
      >
        <div className="space-y-2 flex items-start gap-4">
          <div className="flex-1">
            <Label className="text-base mb-1.5">App Name</Label>
            <p className="text-muted-foreground text-sm">Filter by secret key app name.</p>
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="shadow-none text-base h-auto! px-3 py-1.5 w-30">
              <SelectValue />
            </SelectTrigger>
            <SelectContent onCloseAutoFocus={(e) => e.preventDefault()}>
              <SelectGroup>
                <SelectItem className="text-base" value="all">All</SelectItem>
                <SelectItem className="text-base" value="apple">Apple</SelectItem>
                <SelectItem className="text-base" value="sider-manager">Sider Manager</SelectItem>
                <SelectItem className="text-base" value="multiswitcher">Multiswitcher Application</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2 flex items-start gap-4">
          <div className="flex-1">
            <Label className="text-base mb-1.5">Can Regenerate</Label>
            <p className="text-muted-foreground text-sm">Filter by regenerate status.</p>
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="shadow-none text-base h-auto! px-3 py-1.5 w-30">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem className="text-base" value="all">All</SelectItem>
                <SelectItem className="text-base" value="yes">Yes</SelectItem>
                <SelectItem className="text-base" value="no">No</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="space-x-3 mt-6 flex">
          <Button className="text-base px-3 py-1.5 h-auto inline-block" variant="outline">
            <X className="icon" /> Clear
          </Button>
          <Button className="text-base px-3 py-1.5 h-auto border border-primary">Apply</Button>
        </div>
      </PopoverContent>
    </Popover>          
  );
}
