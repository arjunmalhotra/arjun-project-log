import Link from 'next/link';

const projects = [
  {
    id: 'wealthy-at-home',
    title: 'Wealthy at Home',
    date: 'November 2025',
    description: 'On-demand wealth advisory landing page inspired by Kyno Health. Built with Next.js, deployed in ~2 hours.',
    tags: ['Claude Code', 'Next.js', 'Landing Page', 'Wealthy'],
    liveUrl: 'https://wealthy-at-home-nz1wez23o-arjuns-projects-2fafffb8.vercel.app',
    hasBuildLog: true,
  },
  {
    id: 'venture-lord',
    title: 'Venture Lord',
    date: 'October 2025',
    description: 'A VC portfolio simulator game where you invest in startups and compete on the leaderboard.',
    tags: ['Game', 'React', 'Full Stack'],
    liveUrl: 'https://venturelord.vc',
    hasBuildLog: false,
  },
];

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Intro */}
      <div className="prose prose-gray max-w-none">
        <p className="text-lg text-gray-600 leading-relaxed">
          This is a collection of my projects, experiments, and build logs.
          Some are built with Claude Code, others are personal projects.
          Each one is an exploration of what's possible with modern tools and AI assistance.
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:border-gray-300 transition-colors">
            {/* Project Header */}
            <div className="flex justify-between items-start mb-3">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{project.title}</h2>
                <p className="text-sm text-gray-500 mt-1">{project.date}</p>
              </div>
              <div className="flex gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                  >
                    View Live →
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-4">{project.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Build Log Link */}
            {project.hasBuildLog && (
              <Link
                href={`/projects/${project.id}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-gray-700"
              >
                <span>📖</span>
                <span>Read Build Log</span>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
