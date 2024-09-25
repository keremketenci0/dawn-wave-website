import * as React from "react";
import { ScrollArea } from "@/components/shadcn/ui/scroll-area";

const menuItems = [
  { label: 'Link.home', section: 'Home' },
  { label: 'Link.team', section: 'Team' },
  { label: 'Link.joinUs', section: 'JoinUs' },
  { label: 'Link.contact', section: 'Contact' }
];

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md">
      <div className="p-4">
        {menuItems.map((item) => (
          <div key={item.section} className="text-sm">
            {item.label}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
