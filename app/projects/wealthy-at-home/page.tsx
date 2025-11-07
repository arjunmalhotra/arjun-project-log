import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';

export default function WealthyAtHomePage() {
  // Read the markdown file
  const filePath = path.join(process.cwd(), 'app/projects/wealthy-at-home/build-log.md');
  const markdown = fs.readFileSync(filePath, 'utf-8');

  return (
    <div>
      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-8"
      >
        <span>←</span>
        <span>Back to Projects</span>
      </Link>

      {/* Markdown Content */}
      <article className="prose prose-gray max-w-none">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </article>
    </div>
  );
}
