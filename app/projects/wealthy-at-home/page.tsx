import Link from 'next/link';

// Chat Message Components
function UserMessage({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-end mb-4">
      <div className="max-w-[70%] bg-blue-500 text-white rounded-2xl rounded-tr-sm px-4 py-3">
        {children}
      </div>
    </div>
  );
}

function ClaudeMessage({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-start mb-4">
      <div className="max-w-[70%] bg-gray-200 text-gray-900 rounded-2xl rounded-tl-sm px-4 py-3">
        {children}
      </div>
    </div>
  );
}

function ClaudeQuestion({ question, options }: { question: string; options: string[] }) {
  return (
    <div className="flex justify-start mb-4">
      <div className="max-w-[70%] bg-gray-200 text-gray-900 rounded-2xl rounded-tl-sm px-4 py-3">
        <p className="font-medium mb-3">{question}</p>
        <div className="space-y-2">
          {options.map((option, idx) => (
            <div key={idx} className="flex items-start gap-2 text-sm">
              <span className="font-mono text-gray-600">({String.fromCharCode(97 + idx)})</span>
              <span>{option}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DeploymentLink({ version, url, note }: { version: string; url: string; note?: string }) {
  return (
    <div className="flex justify-start mb-4">
      <div className="max-w-[70%] bg-gray-200 text-gray-900 rounded-2xl rounded-tl-sm px-4 py-3">
        <p className="font-semibold mb-2">🔗 {version}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700 underline break-all"
        >
          {url}
        </a>
        {note && <p className="text-sm text-gray-600 mt-2 italic">{note}</p>}
      </div>
    </div>
  );
}

function ModeIndicator({ mode, children }: { mode: 'plan' | 'execute'; children: React.ReactNode }) {
  const emoji = mode === 'plan' ? '🔵' : '🟢';
  const label = mode === 'plan' ? 'Plan Mode' : 'Execution Mode';

  return (
    <div className="flex justify-start mb-4">
      <div className="max-w-[70%] bg-gray-200 text-gray-900 rounded-2xl rounded-tl-sm px-4 py-3">
        <p className="font-semibold mb-2">
          {emoji} <span className="italic">{label}</span>
        </p>
        {children}
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold text-gray-700">{title}</h2>
      </div>
      {children}
    </div>
  );
}

export default function WealthyAtHomePage() {
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

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Building "Wealthy at Home" with Claude Code</h1>
        <p className="text-gray-600">
          A landing page for booking wealth advisors to visit your home • Built in ~2 hours
        </p>
        <a
          href="https://wealthy-at-home-nz1wez23o-arjuns-projects-2fafffb8.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700 underline text-sm"
        >
          See it live →
        </a>
      </div>

      {/* Chat Interface */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 max-w-4xl">

        {/* Initial Request */}
        <Section title="The Conversation">
          <UserMessage>
            <p>pls take a look at this business: https://www.kynohealth.com/</p>
            <p className="mt-2">I want you to re-create this kind of offering but for Wealthy (which is a portfolio company) - http://wealthy.in/</p>
            <p className="mt-2">If they had a service where you could get a wealth advisor home to advise you in 30 minutes, that would be cool.</p>
          </UserMessage>

          <ModeIndicator mode="plan">
            <p className="mb-3"><em>Entering Plan Mode - I won't write any code yet, just research and understand what you want</em></p>
            <p className="mb-3 text-sm text-gray-600"><em>[Analyzing Kyno Health...]</em></p>
            <p className="mb-3">Interesting! Kyno Health offers "Doctor at Home in 20 Minutes" for ₹999. They've done 23,000+ consultations with a 91% satisfaction rate. It's basically Uber for doctors.</p>
            <p className="text-sm text-gray-600"><em>[Analyzing Wealthy...]</em></p>
          </ModeIndicator>

          <ClaudeMessage>
            <p className="mb-3">Ok, Wealthy is a B2B platform for MFDs (6,000+ partners, ₹5,000+ crore AUM). They offer 1000+ products: mutual funds, stocks, insurance, bonds, PMS, AIFs...</p>
            <p className="font-semibold">But here's my question: Should this be direct-to-consumer (like Kyno) or through Wealthy's existing partner network?</p>
          </ClaudeMessage>

          <ClaudeQuestion
            question="What kind of deliverable do you want?"
            options={[
              'Landing page / Website content',
              'Full web application with booking flow',
              'Pitch deck / Presentation',
            ]}
          />

          <ClaudeQuestion
            question="What's the business model?"
            options={[
              'B2C Direct (like Kyno Health)',
              'B2B2C through MFD partners',
              'Hybrid model',
            ]}
          />

          <ClaudeQuestion
            question="What's the main value proposition?"
            options={[
              'Convenience & Speed (like Kyno)',
              'Expert Quality & Trust',
              'Comprehensive Financial Planning',
            ]}
          />

          <ClaudeQuestion
            question="Should we highlight the 1000+ products?"
            options={[
              'Yes, make it prominent',
              'No, keep it simple',
            ]}
          />

          <UserMessage>
            <p>Landing page content. B2C Direct. Focus on Convenience & Speed. Highlight the 1000+ products.</p>
          </UserMessage>

          <ClaudeMessage>
            <p className="mb-3">Perfect! Let me plan this out...</p>
            <p className="mb-2">I'm thinking:</p>
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li><strong>Service</strong>: "Wealthy Advisor at Your Doorstep in 30 Minutes"</li>
              <li><strong>Pricing</strong>: ₹2,999 (higher than Kyno since wealth advice is more complex)</li>
              <li><strong>Sections</strong>: Hero, How It Works, Services, Pricing (3 tiers), Advisors, Testimonials, FAQ</li>
              <li><strong>Value prop</strong>: Speed + convenience + access to Wealthy's full product ecosystem</li>
            </ul>
            <p className="mt-3">Sound good?</p>
          </ClaudeMessage>

          <UserMessage>
            <p><em>[You approved the plan]</em></p>
          </UserMessage>
        </Section>

        {/* Building Phase */}
        <Section title="🟢 Let's Build This">
          <ModeIndicator mode="execute">
            <p className="mb-3">Switching to Execution Mode. Time to write some code!</p>
            <p className="text-sm text-gray-600 mb-2"><em>[Building Next.js project...]</em></p>
            <p className="text-sm text-gray-600 mb-2"><em>[Setting up Tailwind CSS...]</em></p>
            <p className="text-sm text-gray-600 mb-2"><em>[Creating all 9 major sections...]</em></p>
            <p className="text-sm text-gray-600 mb-4"><em>[Writing copy for hero, pricing, testimonials...]</em></p>
            <p className="font-semibold mb-2">5 minutes later...</p>
            <div className="space-y-1 text-sm">
              <p>✅ Project structure created</p>
              <p>✅ All components built</p>
              <p>✅ Content written</p>
              <p>✅ Responsive design</p>
            </div>
            <p className="text-sm text-gray-600 mt-3"><em>[Deploying to Vercel...]</em></p>
          </ModeIndicator>

          <ClaudeMessage>
            <p className="mb-3">Done! Here's your live site:</p>
            <ul className="list-disc ml-5 space-y-1 text-sm mt-3">
              <li>Hero with headline and CTAs</li>
              <li>Trust bar (50K+ consultations, 4.9★)</li>
              <li>3-step "How It Works"</li>
              <li>Service breakdown (45-min consultation)</li>
              <li>3 pricing tiers (₹2,999 / ₹7,999 / ₹19,999)</li>
              <li>Sample advisor profiles</li>
              <li>Customer testimonials</li>
              <li>FAQ section</li>
              <li>Complete footer</li>
            </ul>
            <p className="mt-3 text-sm">Built in ~15 minutes from scratch. Not bad, right?</p>
          </ClaudeMessage>

          <DeploymentLink
            version="Version 1: Initial MVP"
            url="https://wealthy-at-home-nz1wez23o-arjuns-projects-2fafffb8.vercel.app"
            note="(note: this will show the final version now, but imagine green colors and no images)"
          />
        </Section>

        {/* First Feedback */}
        <Section title="Your First Reaction">
          <UserMessage>
            <p>okay so this green colour is really ugly. i want you to replicate the branding of wealthy as much as you can (because this is supposed to be a wealthy initiative) - use our copy, our colours etc, and even assets from the website (like pictures - right now the website is totally blank)</p>
          </UserMessage>

          <ClaudeMessage>
            <p>😅 Fair point about the green! Let me fix that.</p>
          </ClaudeMessage>

          <ModeIndicator mode="plan">
            <p className="mb-3"><em>Back to Plan Mode - this is a big change, let me research Wealthy's branding first</em></p>
            <p className="text-sm text-gray-600 mb-3"><em>[Analyzing wealthy.in...]</em></p>
            <p className="mb-2">Got it! Here's what I found:</p>
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li><strong>Color</strong>: Purple #6725F4 (not green!)</li>
              <li><strong>Fonts</strong>: DM Serif Display for headings, Lato for body</li>
              <li><strong>Style</strong>: Clean, card-based, professional</li>
              <li><strong>Tone</strong>: Confident, efficiency-focused</li>
              <li><strong>Assets</strong>: Logo and images available on their CDN</li>
            </ul>
          </ModeIndicator>

          <ClaudeMessage>
            <p className="font-semibold">Quick question before I rebuild:</p>
            <p className="mt-2">Should this service mention MFDs at all?</p>
          </ClaudeMessage>

          <UserMessage>
            <p>Wealthy's MFD partners operate under the Wealthy brand name so - for an end user - they're simply talking to a Wealthy advisor. This "at Home" offering is targeted at users so it doesn't need to talk about MFDs</p>
          </UserMessage>

          <ClaudeMessage>
            <p>Perfect, that makes the messaging cleaner.</p>
          </ClaudeMessage>
        </Section>

        {/* Rebrand Phase */}
        <Section title="🎨 The Rebrand">
          <ModeIndicator mode="execute">
            <p className="mb-3"><em>Execution Mode - time to make it actually look like Wealthy</em></p>
            <p className="font-semibold mb-2">Here's what I'm changing:</p>
            <ul className="list-decimal ml-5 space-y-1 text-sm mb-3">
              <li><strong>Colors</strong>: Every single green (#00C853) → Purple (#6725F4)</li>
              <li><strong>Fonts</strong>: Adding DM Serif Display + Lato from Google Fonts</li>
              <li><strong>Logo</strong>: Adding Wealthy's logo from their CDN</li>
              <li><strong>Copy</strong>: "SEBI advisors" → "Wealthy advisors" throughout</li>
              <li><strong>Products</strong>: Adding big section highlighting 1000+ products</li>
              <li><strong>Messaging</strong>: Making it feel like an official Wealthy initiative</li>
            </ul>
            <p className="text-sm text-gray-600 mb-1"><em>[Updating colors in 10+ files...]</em></p>
            <p className="text-sm text-gray-600 mb-1"><em>[Adding fonts...]</em></p>
            <p className="text-sm text-gray-600 mb-1"><em>[Rewriting all copy...]</em></p>
            <p className="text-sm text-gray-600 mb-3"><em>[Adding 1000+ products section...]</em></p>
            <p className="font-semibold">20 minutes later...</p>
          </ModeIndicator>

          <ClaudeMessage>
            <p className="mb-3">Done! Check out the transformation:</p>
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li>✅ Purple everywhere (buttons, checkmarks, badges, gradients)</li>
              <li>✅ Wealthy logo in header and footer</li>
              <li>✅ Professional fonts (DM Serif Display headlines)</li>
              <li>✅ New section showing all 6 product types (MF, Stocks, Insurance, FD, Bonds, PMS/AIFs)</li>
              <li>✅ Every mention updated to "Wealthy advisors"</li>
              <li>✅ Link to wealthy.in in footer</li>
            </ul>
            <p className="mt-3">Much better, right?</p>
          </ClaudeMessage>

          <DeploymentLink
            version="Version 2: Rebranded"
            url="https://wealthy-at-home-nz1wez23o-arjuns-projects-2fafffb8.vercel.app"
            note="(imagine this with Wealthy purple but still no images)"
          />
        </Section>

        {/* Images Request */}
        <Section title="Still Missing Something">
          <UserMessage>
            <p>okay - what about some images? right now the background of the hero image is blank (let alone other stuff)</p>
          </UserMessage>

          <ClaudeMessage>
            <p>You're absolutely right - it's too empty.</p>
          </ClaudeMessage>

          <ModeIndicator mode="plan">
            <p className="mb-3"><em>Plan Mode - let me think about images</em></p>
            <p className="font-semibold">What kind of images do you want?</p>
          </ModeIndicator>

          <ClaudeQuestion
            question="Where should we add images?"
            options={[
              'Hero background',
              'Advisor photos',
              'Customer testimonials',
              'All of the above',
            ]}
          />

          <ClaudeQuestion
            question="Image sources?"
            options={[
              "Use Wealthy's existing assets from their website",
              'Professional stock photos',
              'Mix of both',
            ]}
          />

          <UserMessage>
            <p>Use Wealthy's existing hero image. Add images to Advisors and Testimonials. Mix of Wealthy CDN assets + professional stock photos.</p>
          </UserMessage>
        </Section>

        {/* Adding Images */}
        <Section title="📸 Adding Visual Polish">
          <ModeIndicator mode="execute">
            <p className="mb-3"><em>Execution Mode - time to make it visually rich</em></p>
            <p className="font-semibold mb-2">Adding images:</p>

            <div className="mb-3">
              <p className="font-semibold text-sm mb-1">1. Hero Background</p>
              <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
                <li>Using Wealthy's actual hero image from their CDN</li>
                <li>Adding a white overlay gradient so text is still readable</li>
                <li>Result: Professional, branded hero section</li>
              </ul>
            </div>

            <div className="mb-3">
              <p className="font-semibold text-sm mb-1">2. Advisor Photos</p>
              <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
                <li>Replacing the gradient placeholders (initials like "RM") with real headshots</li>
                <li>3 professional, diverse photos</li>
                <li>Circular with purple borders</li>
                <li>Source: High-quality Unsplash images</li>
              </ul>
            </div>

            <div className="mb-3">
              <p className="font-semibold text-sm mb-1">3. Testimonial Photos</p>
              <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
                <li>Customer profile photos for each testimonial</li>
                <li>Matching the demographics (entrepreneur, engineer, couple)</li>
                <li>Positioned above star ratings</li>
              </ul>
            </div>

            <p className="text-sm text-gray-600 mb-1"><em>[Adding images to components...]</em></p>
            <p className="text-sm text-gray-600 mb-3"><em>[Testing responsive behavior...]</em></p>
          </ModeIndicator>

          <ClaudeMessage>
            <p className="mb-3">Perfect! Images are in:</p>
            <ul className="list-disc ml-5 space-y-1 text-sm">
              <li>✅ Professional hero background from Wealthy</li>
              <li>✅ Real advisor faces (not just initials)</li>
              <li>✅ Customer photos on testimonials</li>
              <li>✅ Everything still loads super fast</li>
            </ul>
          </ClaudeMessage>

          <DeploymentLink
            version="Version 3: Final with Images"
            url="https://wealthy-at-home-nz1wez23o-arjuns-projects-2fafffb8.vercel.app"
          />
        </Section>

        {/* Final Touch */}
        <Section title="The Final Touch">
          <UserMessage>
            <p>great!! can you move this to my coding-projects folder? in /Users/arjunmalhotra/basic-memory/coding-projects</p>
          </UserMessage>

          <ClaudeMessage>
            <p className="mb-2">Easy!</p>
            <p className="text-sm text-gray-600 mb-3"><em>[Moving files...]</em></p>
            <p>Done. Project is now at:</p>
            <p className="font-mono text-sm mt-2 bg-gray-100 px-2 py-1 rounded">
              /Users/arjunmalhotra/basic-memory/coding-projects/wealthy-at-home/
            </p>
          </ClaudeMessage>
        </Section>

      </div>
    </div>
  );
}
