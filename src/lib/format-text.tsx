interface FormattedTextProps {
  content: string;
}

export default function FormattedText({ content }: FormattedTextProps) {
  const regex = /(\*\*(.+?)\*\*)|(\*(.+?)\*)|(`([^`]+)`)/g;
  const parts: (string | JSX.Element)[] = [];
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
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < content.length) {
    parts.push(content.slice(lastIndex));
  }

  return <>{parts}</>;
}
