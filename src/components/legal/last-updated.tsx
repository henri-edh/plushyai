import { Calendar } from "lucide-react";

interface LastUpdatedProps {
  date: string;
}

export function LastUpdated({ date }: LastUpdatedProps) {
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground border-l-2 border-primary pl-4 py-2 bg-muted/30 rounded-r">
      <Calendar className="h-4 w-4" />
      <span>
        Last updated: <time dateTime={date}>{date}</time>
      </span>
    </div>
  );
}
