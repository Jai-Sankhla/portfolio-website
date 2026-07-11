import type { ReactNode } from "react";

interface FormattedTextProps {
  content: string;
}

export default function FormattedText({ content }: FormattedTextProps) {
  const regex = /(\*\*(.+?)\*\*)|(\*(.+?)\*)|(`([^`]+)`)|(\[([^\]]+)\]\(([^)]+)\))|(==([^=]+)==)|(~([^~]+)~)/g;
  const parts: (string | ReactNode)[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(content)) !== null) {
    if (match.index > lastIndex) {
      parts.push(content.slice(lastIndex, match.index));
    }

    if (match[1]) {
      parts.push(<strong key={parts.length}>{match[2]}</strong>);
    } else if (match[3]) {
      parts.push(<em key={parts.length}>{match[4]}</em>);
    } else if (match[5]) {
      parts.push(<code key={parts.length} className="text-[#1151ff] bg-[#1151ff]/10 px-1.5 py-0.5 rounded text-sm font-mono">{match[6]}</code>);
    } else if (match[7]) {
      parts.push(
        <a
          key={parts.length}
          href={match[9]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1151ff] underline underline-offset-2 hover:opacity-70 transition-opacity"
        >
          {match[8]}
        </a>
      );
    } else if (match[10]) {
      parts.push(
        <mark key={parts.length} className="bg-[#fef08a]/70 text-[#111111] px-1 rounded">
          {match[11]}
        </mark>
      );
    } else if (match[12]) {
      parts.push(
        <span key={parts.length} className="underline decoration-2 underline-offset-4">
          {match[13]}
        </span>
      );
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < content.length) {
    parts.push(content.slice(lastIndex));
  }

  return <>{parts}</>;
}
