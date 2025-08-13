import type { DevProject } from './types';

export const atoms: DevProject = {
  id: 'atoms',
  name: 'Atoms - Capstone',
  description:
    'MCP server and AI Agent workflows using n8n; front and backend performance optimization.',
  url: 'https://atoms.tech/',
  stack: ['Next.js', 'Supabase', 'n8n'],
  logs: [
    {
      id: 'atoms-2025-07-30-pr-mcp1',
      date: '2025-07-30',
      summary:
        'Deployed 6 new MCP server tools for advanced project analysis and reporting.',
      details: `Expanded the MCP server's capabilities with a suite of 6 new tools designed to provide deep insights into project management, powered by Gemini for AI analysis.

**New Tools:**
- **\`get_documents_by_projects\`**: Retrieves all documents, organized by project.
- **\`task_assign\`**: Shows task assignments across team members.
- **\`analyze_doc\`**: AI-powered document summarization and analysis.
- **\`get_project_issues\`**: Retrieves and categorizes project issues.
- **\`progress_reporting\`**: Generates detailed project progress reports with AI insights.
- **\`milestone_tracking\`**: Tracks project milestones and key achievements.`,
      tags: ['MCP', 'Tools', 'Gemini', 'AI', 'API'],
      links: [
        {
          label: 'MCP PR #1',
          href: 'https://github.com/atoms-tech/atoms.tech/pull/1',
        },
      ],
    },
    {
      id: 'atoms-2025-07-30-pr227',
      date: '2025-07-30',
      summary:
        'Fixed a UI overlap issue between the Agent Chat toggle and the Edit Mode button.',
      details: `Resolved a z-index and positioning conflict at the bottom-right of the screen.

**Changes:**
- **Positioning:** Adjusted the \`bottom\` CSS property for both the Agent Toggle and the Edit Mode button to give each its own space.
- **Layout Integration:** On larger screens, the main content area now resizes to make space for the agent panel, preventing the panel from obscuring content. On mobile, the overlay behavior is maintained for a better UX.`,
      tags: ['Bugfix', 'UI', 'CSS', 'Layout'],
      links: [
        {
          label: 'PR #227',
          href: 'https://github.com/atoms-tech/atoms.tech/pull/227',
        },
      ],
    },
    {
      id: 'atoms-2025-07-23-pr206',
      date: '2025-07-23',
      summary:
        'Implemented a message queue in the Agent Chat to handle multiple simultaneous messages.',
      details: `Enhanced the agent chat with a queueing system, allowing users to send multiple messages without waiting for a response to each one. This significantly improves productivity and conversation flow.

**Features:**
- **Message Queuing:** Users can queue up to 5 messages while the agent is processing a response.
- **Automatic Processing:** Queued messages are sent automatically in order as soon as the agent becomes available.
- **Individual Cancellation:** Each message in the queue can be individually cancelled.
- **Input Preservation:** The user's text in the input box is not cleared when a response arrives, preventing accidental data loss.
- **UI Relocation:** Moved the agent panel to the bottom-right corner for better screen real estate management.`,
      tags: ['Chat', 'UX', 'Queue', 'Feature'],
      links: [
        {
          label: 'PR #206',
          href: 'https://github.com/atoms-tech/atoms.tech/pull/206',
        },
      ],
    },
    {
      id: 'atoms-2025-07-20-pr195',
      date: '2025-07-20',
      summary:
        'Major UI overhaul for the chat panel and other application components.',
      details: `A significant visual refresh was implemented, focusing on the chat panel and overall UI consistency.

**UI Improvements:**
- **Resizable Panel:** The chat panel can now be resized by the user.
- **Color & Style Updates:**
    - Changed the "Create New Organization" button from blue to purple.
    - Updated chat panel border for better theme consistency.
    - Matched sidebar border colors.
- **Default State:** The agent panel now defaults to a closed state on page load.`,
      tags: ['UI', 'UX', 'CSS', 'Refactor'],
      links: [
        {
          label: 'PR #195',
          href: 'https://github.com/atoms-tech/atoms.tech/pull/195',
        },
      ],
    },
    {
      id: 'atoms-2025-07-13-pr185',
      date: '2025-07-13',
      summary:
        'Enhanced the Agent Chat to support organization-specific conversation history.',
      details: `Upgraded the chat system to isolate conversation history for each organization, creating a more contextual and organized user experience.

**Key Changes:**
- **Isolated Storage:** Chat history is now saved in \`localStorage\` under a key for each organization ID.
- **Automatic Context Switching:** The chat panel now automatically loads the relevant conversation history when the user switches their pinned organization.
- **Data Migration:** A seamless one-time migration moves existing chat history into the new organization-based structure.
- **Enhanced Settings:** Users can now clear chat history for the current organization or all organizations.
- **Resizable Panel:** The chat panel width is now user-resizable.`,
      tags: ['Chat', 'UX', 'Zustand', 'Feature'],
      links: [
        {
          label: 'PR #185',
          href: 'https://github.com/atoms-tech/atoms.tech/pull/185',
        },
      ],
    },
    {
      id: 'atoms-2025-07-12-pr184',
      date: '2025-07-12',
      summary:
        'Added keyboard shortcuts for the Agent Panel (Ctrl+L) and Help Dialog (Ctrl+/).',
      details: `Improved user workflow and accessibility by refining the application's keyboard shortcuts.

**Updates:**
- **New:** \`Ctrl + L\` now toggles the AI Agent chat panel, providing quick access.
- **Changed:** The help dialog shortcut was changed from \`Shift + ?\` to \`Ctrl + /\` to avoid conflicts with typing the '?' character.`,
      tags: ['UX', 'Accessibility', 'Shortcuts'],
      links: [
        {
          label: 'PR #184',
          href: 'https://github.com/atoms-tech/atoms.tech/pull/184',
        },
      ],
    },
    {
      id: 'atoms-2025-07-10-pr176',
      date: '2025-07-10',
      summary:
        'Introduced a full-featured AI Agent Chat system with N8N and voice integration.',
      details: `Launched a major new feature: an AI-powered chat agent. This system provides real-time assistance and is integrated with both a local AI and external N8N workflows.

**Core Components:**
- **\`AgentPanel\`:** A complete chat interface with message history, typing indicators, and real-time messaging.
- **N8N Integration:** A secure server-side proxy (\`/api/n8n-proxy\`) connects to N8N webhooks for customizable, powerful AI processing, with a fallback to a local AI.
- **Voice Input:** Integrated the Web Speech API for voice-to-text messaging.
- **Persistent State:** Uses Zustand and \`localStorage\` to persist message history and settings.
- **Secure Context:** Safely passes user, organization, and project context to the AI agent.`,
      tags: ['AI', 'Chat', 'Feature', 'N8N', 'Zustand', 'Voice API'],
      links: [
        {
          label: 'PR #176',
          href: 'https://github.com/atoms-tech/atoms.tech/pull/176',
        },
      ],
    },
    {
      id: 'atoms-2025-06-27-pr108',
      date: '2025-06-27',
      summary:
        'Fixed UI bug causing long document names to overflow their containers.',
      details: `Resolved a visual bug on the Regulation Documents page where long filenames would break the layout.

**Solution:**
- Implemented CSS \`truncate\` to add an ellipsis (...) to long names.
- Added a \`title\` attribute to the element, allowing users to see the full filename on hover.
- Improved the Flexbox layout to ensure responsive and consistent behavior.`,
      tags: ['Bugfix', 'UI', 'CSS', 'Accessibility'],
      links: [
        {
          label: 'PR #108',
          href: 'https://github.com/atoms-tech/atoms.tech/pull/108',
        },
      ],
    },
    {
      id: 'atoms-2025-06-17-pr97',
      date: '2025-06-17',
      summary:
        'Updated navigation flow to show "Projects" or "Requirements" tab by default.',
      details: `Adjusted the default navigation behavior for better user workflows.

**Changes:**
- When navigating to an Organization, the **Projects** tab is now shown by default instead of 'Overview'.
- When navigating from a Project, the default tab is now **Requirements Documents**.
- This aligns the initial view with the most common user tasks, improving efficiency.`,
      tags: ['UX', 'Navigation', 'Feature'],
      links: [
        {
          label: 'PR #97',
          href: 'https://github.com/atoms-tech/atoms.tech/pull/97',
        },
      ],
    },
    {
      id: 'atoms-2025-06-17-pr95',
      date: '2025-06-17',
      summary:
        'Fixed a persistent bug where refreshing would reset the active tab on dashboard pages.',
      details: `Resolved a major UX issue by synchronizing the active tab state with URL search parameters (\`?currentTab=...\`). This ensures tab state persists across refreshes and allows for shareable, context-specific URLs.

**Improvements:**
- **State Persistence:** The active tab is now maintained after a page refresh.
- **Shareable URLs:** Users can now link directly to a specific tab.
- **Performance:** Eliminated scroll-jumping on tab-switch by using \`{ scroll: false }\` in Next.js router, leading to a smoother experience.
- **Consistency:** Applied the fix across all dashboards: Organization, Project, and User.`,
      tags: ['Bugfix', 'UX', 'Routing', 'Next.js'],
      links: [
        {
          label: 'PR #95',
          href: 'https://github.com/atoms-tech/atoms.tech/pull/95',
        },
      ],
    },
    {
      id: 'atoms-2025-06-11-pr86',
      date: '2025-06-11',
      summary:
        'Implemented a comprehensive cross-browser testing framework using Playwright.',
      details: `Established a robust automated testing foundation to ensure application consistency across multiple browsers and devices.

**Key Features:**
- **Cross-Browser Support:** Testing configured for Chrome, Firefox, Safari (WebKit), and Edge.
- **Mobile & Responsive Testing:** Includes emulation for Mobile Chrome (Pixel 5) and Mobile Safari (iPhone 12) across various viewports.
- **Comprehensive Test Suites:**
    - **Landing Page:** Validates metadata, component structure, and SEO.
    - **Authentication:** Tests form validation, OAuth flows, and navigation.
    - **Navigation:** Ensures protected routes and middleware redirects work correctly.
    - **UI Components:** Covers theme switching, toast notifications, and error boundaries.
- **Tooling & CI/CD:** Integrated Jest for unit tests, helper utilities, and a compatibility matrix generator. The framework is ready for CI/CD integration with GitHub Actions.`,
      tags: ['Testing', 'Playwright', 'CI/CD', 'Automation'],
      links: [
        {
          label: 'PR #86',
          href: 'https://github.com/atoms-tech/atoms.tech/pull/86',
        },
      ],
    },
  ],
};
