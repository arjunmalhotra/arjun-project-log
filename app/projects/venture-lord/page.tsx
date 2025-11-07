import Link from 'next/link';

export default function VentureLordPage() {
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

      {/* Project Content */}
      <article className="prose prose-gray max-w-none">
        <h1>Venture Lord</h1>

        <p className="lead">
          A VC portfolio simulator game where you invest in startups and compete on the leaderboard.
        </p>

        <h2>About the Project</h2>
        <p>
          Venture Lord is a web-based game that simulates venture capital investing. Players start with virtual capital
          and must make strategic investment decisions in various startups. The game features:
        </p>

        <ul>
          <li>Real-time leaderboard with global rankings</li>
          <li>Diverse startup portfolio options</li>
          <li>Dynamic market conditions</li>
          <li>Score tracking and performance metrics</li>
        </ul>

        <h2>Tech Stack</h2>
        <ul>
          <li>React for the frontend</li>
          <li>Node.js backend</li>
          <li>Real-time database for leaderboard</li>
        </ul>

        <h2>Visit the Project</h2>
        <p>
          <a href="https://venturelord.vc" target="_blank" rel="noopener noreferrer">
            Play Venture Lord →
          </a>
        </p>
      </article>
    </div>
  );
}
