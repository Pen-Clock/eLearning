"use client"

interface TextContentProps {
  content: string
}

export default function TextContent({ content }: TextContentProps) {
  return <div className="prose prose-sm max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: content }} />
}
