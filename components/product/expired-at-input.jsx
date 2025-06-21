'use client';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Calendar } from '@/components/ui/calendar';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CalendarIcon } from 'lucide-react';
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Button } from '../ui/button';
import { formatDate } from '@/lib/format-date';
import { useState } from 'react';

export default function ExpiredAtInput({
  field,
  description,
}) {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  function handleDateChange({ date, expiredAtField }) {
    const newDate = new Date(expiredAtField.value);
    newDate.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
    expiredAtField.onChange(newDate);
    setIsCalendarOpen(false);
  }

  function handleHourChange({ hour, expiredAtField }) {
    const newDate = new Date(expiredAtField.value);
    newDate.setHours(hour);
    expiredAtField.onChange(newDate);
  }

  function handleMinuteChange({ minute, expiredAtField }) {
    const newDate = new Date(expiredAtField.value);
    newDate.setMinutes(minute);
    expiredAtField.onChange(newDate);
  }

  return (
    <FormItem className="flex-1">
      <FormLabel className="text-base">Expired At</FormLabel>
      <div className="flex items-center">
        <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
          <PopoverTrigger asChild className="shadow-none text-base h-auto! px-3 py-1.5 flex-1">
            <FormControl>
              <Button
                variant={"outline"}
                className={cn(
                  "pl-3 text-left font-normal w-full text-base",
                  !field.value && "text-muted-foreground"
                )}
              >
                {field.value ? (
                  formatDate(Math.floor(field.value.getTime() / 1000))
                ) : (
                    <span>Pick a date</span>
                  )}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </FormControl>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={field.value}
              onSelect={(date) => handleDateChange({ date, expiredAtField: field })}
              disabled={{ before: new Date() }}
              captionLayout="dropdown"
            />
          </PopoverContent>
        </Popover>

        <Select
          onValueChange={(hour) => handleHourChange({ hour, expiredAtField: field })}
          value={field.value ? field.value.getHours() : 0}
          disabled={!field.value}
        >
          <SelectTrigger className="shadow-none text-base h-auto! px-3 py-1.5 ms-3">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel className="text-[15px]">Hour</SelectLabel>
              {Array.from({ length: 24 }, (_, i) => (
                <SelectItem key={i} className="text-base" value={i}>{i.toString().padStart(2, 0)}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <span className="mx-1.5">:</span>
        <Select
          onValueChange={(minute) => handleMinuteChange({ minute, expiredAtField: field })}
          value={field.value ? field.value.getMinutes() : 0}
          disabled={!field.value}
        >
          <SelectTrigger className="shadow-none text-base h-auto! px-3 py-1.5">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel className="text-[15px]">Minute</SelectLabel>
              {[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55].map(m => (
                <SelectItem key={m} className="text-base" value={m}>{m.toString().padStart(2, 0)}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <span className="ms-2">WIB</span>
      </div>
      <FormDescription>{description}</FormDescription>
      <FormMessage />
    </FormItem>
  );
}
