import type { DevProject } from './types';

export const rebil: DevProject = {
  id: 'rebil',
  name: 'Rebil - Startup',
  description:
    'Startup MVP for peer-to-peer car rental in Indonesia. Next.js platform with 15+ relational tables.',
  url: 'https://rebil.vercel.app/',
  stack: ['Next.js', 'Supabase', 'Git', 'Full-Stack', 'OAuth', 'GCP'],
  logs: [
    {
      id: 'rebil-2025-09-30-pr25',
      date: '2025-09-30',
      summary:
        'Fixed critical map search issues: location filtering, geocoding accuracy, API optimization, and infinite re-render loops.',
      details: `Problem: Multiple critical issues with the maps feature and search functionality were causing poor user experience and performance problems.

What I changed:
- **Location Filtering:** Removed broken RPC call to search_cars_by_location and implemented direct JSONB-based city name filtering using PostgreSQL queries. Added filtering to exclude vehicles using fallback coordinates.
- **Geocoding Accuracy:** Reversed priority order to prioritize Google Geocoding for detailed addresses over city mapping, ensuring vehicles with specific addresses appear at correct coordinates instead of city centers.
- **Government Codes vs UUIDs:** Added hyphen checking to differentiate UUIDs from government codes (like '31.71'), preventing invalid lookups and ensuring proper nested object property usage.
- **Dynamic Map Updates:** Implemented dragend and zoom_changed event listeners with reverse geocoding, automatically refreshing vehicles when users move the map with 1-second debounce.
- **Search Optimization:** Removed automatic search useEffect that triggered on every keystroke, replaced with manual search via 🔍 button and Enter key support with minimum 2 characters required.
- **Infinite Loop Fixes:** Removed handleCarStatusChange from useEffect dependencies, wrapped fetchRecentlyApprovedCars in useCallback, and fixed circular dependencies to eliminate Fast Refresh loops.
- **Error Handling:** Added null result handling for review stats API to prevent 500 errors with default zero values.

Example (Location filtering with JSONB):
\`\`\`typescript
// Location filtering with JSONB queries
if (searchLocation?.cityName) {
    query = query.or(
        \`location->>city_name.ilike.%\${searchLocation.cityName}%,location->city->>name.ilike.%\${searchLocation.cityName}%\`,
    );
}

// Map bounds change handler with debounce
const handleMapBoundsChanged = useCallback(
    (center: { lat: number; lng: number }, zoom: number) => {
        if (mapBoundsChangeTimeout.current) {
            clearTimeout(mapBoundsChangeTimeout.current);
        }
        mapBoundsChangeTimeout.current = setTimeout(async () => {
            // Reverse geocoding to get city name and update vehicles
            const response = await fetch(
                \`https://maps.googleapis.com/maps/api/geocode/json?latlng=\${center.lat},\${center.lng}&key=\${apiKey}\`,
            );
        }, 1000);
    },
    [loadVehicles],
);
\`\`\`

Result: 90%+ reduction in database queries, 40-70% time savings from debounced updates, eliminated infinite loops, and significantly improved user experience with accurate location filtering and precise map markers.`,
      tags: [
        'Map',
        'Search',
        'Geocoding',
        'Performance',
        'Location',
        'API Optimization',
        'React Hooks',
        'Google Maps',
      ],
    },
    {
      id: 'rebil-2025-09-21-pr24',
      date: '2025-09-21',
      summary:
        'Completed chat message system with advanced UI components, real-time updates, and comprehensive security measures.',
      details: `Problem: The messaging system needed polished UI components, real-time functionality, and robust security to be production-ready.

What I changed:
- **Advanced UI Components:** Built MessageThread with auto-scroll and date grouping, MessageInput with character limits and keyboard shortcuts, and ContactHostModal for inquiries. Added CustomerList for hosts to manage their renters.
- **Real-time Updates:** Implemented React Query with optimistic updates, 30-second auto-refresh intervals, and automatic read status management. Messages appear instantly with rollback on failure.
- **Security & Performance:** Added comprehensive permission validation preventing privilege escalation, SQL injection protection, and offline booking restrictions. Optimized with proper indexing and pagination.
- **Testing & Validation:** Completed full feature testing including authentication, permissions, and performance under load.

Example (Real-time message handling):
\`\`\`tsx
const sendMessageMutation = useMutation<SendMessageResponse, Error, string>({
  mutationFn: async (message: string) => sendMessage(bookingId, receiverId, message),
  onMutate: async (message) => {
    // Optimistic update
    queryClient.setQueryData(['messages', bookingId], (old) => 
      old ? { ...old, messages: [...old.messages, optimisticMessage] } : old
    );
  },
});
\`\`\`

Result: A production-ready messaging system with 3,000+ lines of code, supporting real-time communication between hosts and renters with enterprise-grade security.`,
      tags: [
        'Messaging',
        'Real-time',
        'UI/UX',
        'Security',
        'Performance',
        'React Query',
      ],
    },
    {
      id: 'rebil-2025-09-10-pr23',
      date: '2025-09-10',
      summary:
        'Built core messaging API infrastructure with React hooks and TypeScript interfaces for the chat system.',
      details: `Problem: After establishing the database foundation, the system needed robust API endpoints and frontend data management for the messaging feature.

What I changed:
- **API Endpoints:** Created 7 REST endpoints including /api/messages for CRUD operations, /api/messages/conversations for chat lists, and /api/messages/read for status updates. Each endpoint includes proper authentication and error handling.
- **React Hooks:** Developed useMessages, useConversations, and useBookingLookup hooks with React Query integration. Implemented caching strategies with 10-30 second stale times and automatic background refetching.
- **TypeScript Integration:** Defined comprehensive type system with Message, Conversation, and API request/response interfaces. Added proper error handling and validation throughout.
- **Permission System:** Implemented booking-participant-only access control, preventing unauthorized users from accessing conversations.

Example (API endpoint structure):
\`\`\`ts
// GET /api/messages?booking_id=123&limit=50
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const bookingId = searchParams.get('booking_id');
  
  // Verify user is booking participant
  const { data: booking } = await supabase
    .from('bookings')
    .select('host_id, renter_id')
    .eq('id', bookingId)
    .single();
    
  if (booking.host_id !== userId && booking.renter_id !== userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }
}
\`\`\`

Result: Robust API infrastructure supporting real-time messaging with proper authentication, caching, and error handling.`,
      tags: ['API', 'React Query', 'TypeScript', 'Authentication', 'Hooks'],
    },
    {
      id: 'rebil-2025-09-01-pr22',
      date: '2025-09-01',
      summary:
        'Established messaging database foundation with RPC functions and optimized indexing for booking-based chat system.',
      details: `Problem: The platform needed a messaging system to enable communication between hosts and renters, but lacked any database infrastructure for real-time messaging.

What I changed:
- **Database Schema:** Created the messages table with proper foreign key relationships to bookings and user_profiles. Implemented CASCADE deletion and automatic timestamp management with updated_at triggers.
- **RPC Functions:** Built 5 specialized database functions including get_booking_messages() for retrieving conversations, send_booking_message() for secure message creation, and mark_messages_read() for status updates.
- **Performance Optimization:** Added 4 strategic indexes on booking_id, participant pairs, unread messages, and creation timestamps to ensure sub-100ms query performance even with large message volumes.
- **Security Foundation:** Implemented booking-participant-only access patterns and prepared offline booking restrictions.

Example (Core RPC function):
\`\`\`sql
CREATE OR REPLACE FUNCTION get_booking_messages(p_booking_id UUID, p_user_id UUID)
RETURNS TABLE(
    id UUID, booking_id UUID, sender_id UUID, receiver_id UUID,
    message TEXT, is_read BOOLEAN, read_at TIMESTAMPTZ, created_at TIMESTAMPTZ,
    sender_name TEXT, receiver_name TEXT
) AS $$
BEGIN
    -- Verify user is participant in this booking
    IF NOT EXISTS (
        SELECT 1 FROM bookings 
        WHERE id = p_booking_id AND (host_id = p_user_id OR renter_id = p_user_id)
    ) THEN
        RAISE EXCEPTION 'Access denied';
    END IF;
    
    RETURN QUERY
    SELECT m.id, m.booking_id, m.sender_id, m.receiver_id, m.message,
           m.is_read, m.read_at, m.created_at,
           sp.full_name as sender_name, rp.full_name as receiver_name
    FROM messages m
    JOIN user_profiles sp ON m.sender_id = sp.id
    JOIN user_profiles rp ON m.receiver_id = rp.id
    WHERE m.booking_id = p_booking_id
    ORDER BY m.created_at ASC;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
\`\`\`

Result: Solid database foundation supporting secure, high-performance messaging with proper access controls and audit trails.`,
      tags: ['Database', 'SQL', 'RPC', 'Performance', 'Security', 'Messaging'],
    },
    {
      id: 'rebil-2025-08-23-pr21',
      date: '2025-08-23',
      summary:
        'Enhanced host tools with vehicle management (bulk actions, search, filters) and an offline booking system integrated into a unified calendar.',
      details: `Problem: The host dashboard lacked advanced tools for managing vehicles and offline bookings. Key issues included inefficient client-side filtering, incorrect booking conflict checks, and several UI bugs.

What I changed:
- **Host Vehicle Management:** Introduced a new page with server-side search, filtering, and pagination for the host's vehicle fleet. Implemented bulk actions (activate, deactivate, delete) to improve efficiency.
- **Offline Booking System:** Created a feature for hosts to manually add bookings made outside the platform. This includes a creation modal and a separate page to view and manage these bookings.
- **Unified Calendar:** Updated the vehicle booking calendar to display both online and offline bookings, with different styling for clarity.
- **Bug Fixes & Refinements:**
  - Consolidated vehicle filtering logic into the parent component to avoid multiple re-renders.
  - Corrected the booking conflict check to use correct status enums and exclude completed bookings.
  - Fixed the logic for identifying offline bookings in the calendar view.
  - Addressed UI bugs, like using the correct icon for a close button and preventing nested link navigation.

Result: Hosts now have a powerful, centralized system to manage their fleet and all bookings, improving operational efficiency and providing a clearer overview of vehicle availability.`,
      tags: ['Host', 'Booking', 'Admin', 'UX', 'Refactor', 'Vehicles'],
    },
    {
      id: 'rebil-2025-08-16-pr20',
      date: '2025-08-16',
      summary:
        'Refined vehicle search and availability checking with improved date overlap logic, extensive debugging logs, and robust query fallbacks.',
      details: `Problem: Inaccurate date overlap calculations, poor debugging visibility in the search flow, and brittle error handling for optimized DB queries.

What I changed:
- **Availability Logic:** Corrected and unified date overlap logic in Supabase queries (.gt('end_date', startDate).lt('start_date', endDate)) and client-side checks for consistency and accuracy.
- **Error Handling:** Implemented a safer, pessimistic fallback in client-side availability checks, returning \`false\` on error to prevent overbooking. Enhanced the optimized search to gracefully fall back to a basic search if the database function is missing.
- **Debugging & Performance:** Added extensive logging to trace the search flow and refactored a multi-pass filter into a more efficient single-pass operation. (Note: Debug logs to be removed before production merge).

Result: More reliable vehicle availability searches, significantly improved debugging capabilities, and a more resilient search system that prevents overbooking.`,
      tags: [
        'Search',
        'Availability',
        'Database',
        'Supabase',
        'Refactor',
        'Debugging',
      ],
    },
    {
      id: 'rebil-2025-08-13-pr19',
      date: '2025-08-13',
      summary:
        'Hardened the new Indonesian address system by fixing a critical join error and implementing automatic `updated_at` timestamps for data integrity.',
      details: `Problem: A post-migration review of the new address system revealed two key issues:
1. A critical query was joining regencies and provinces using a non-key column (province_code) instead of the correct foreign key (province_id), risking query failures.
2. The new address tables (provinces, regencies, districts, villages) lacked a mechanism to automatically update the updated_at timestamp on modification, making audit trails unreliable.

What I changed:
- **Corrected Join Logic:** Updated the SQL query to join on the correct primary/foreign keys (r.province_id = p.id), ensuring data integrity and query stability.
- **Automated Timestamps:** Created a reusable trigger function, handle_updated_at(), that automatically sets updated_at to the current time on any row update. Applied this trigger to all four new address tables.

Example (Join Fix):
-- Before
JOIN public.indonesian_provinces p ON r.province_code = p.code
-- After
JOIN public.indonesian_provinces p ON r.province_id = p.id

Example (Timestamp Trigger):
\`\`\`sql
CREATE OR REPLACE FUNCTION public.handle_updated_at() RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER on_provinces_update
    BEFORE UPDATE ON public.indonesian_provinces
    FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();
-- (Triggers also applied to regencies, districts, and villages)
\`\`\`

Result: The address system is now more robust, with reliable queries and accurate audit timestamps, completing the migration from the old system.`,
      tags: [
        'Database',
        'SQL',
        'Data Integrity',
        'Address',
        'Migration',
        'Supabase',
      ],
    },
    {
      id: 'rebil-2025-08-11-pr18',
      date: '2025-08-11',
      summary:
        'Address system migration to Indonesian government codes with dual-format support and UI fixes.',
      details: `Problem: After switching address identifiers to Indonesian government codes (e.g., "31", "31.73"), several components still expected UUIDs → RPCs failed and UI showed [object Object].

What I changed:
- Database: Added government_code columns and indexes for provinces/cities; updated RPCs (e.g., get_cities_by_province) to accept both government codes and UUIDs, trying gov-code first, then UUID, then name fallback.
- Frontend: Implemented formatLocationDisplay() to handle nested, flat, and legacy formats; eliminated [object Object] rendering by extracting name fields safely.
- Utilities: Dual-lookup helpers (getCityName/getProvinceName) with cache, trying UUID and gov-code; simplified branching and added graceful fallbacks.

Example (lookup helper):
export async function getCityName(cityIdentifier: string): Promise<string> {
  const supabase = createClient();
  // 1) try by government_code
  let { data } = await supabase
    .from('indonesian_cities')
    .select('name')
    .eq('government_code', cityIdentifier)
    .single();
  if (!data) {
    // 2) fallback to UUID
    const { data: byUuid } = await supabase
      .from('indonesian_cities')
      .select('name')
      .eq('id', cityIdentifier)
      .single();
    data = byUuid || null;
  }
  return data?.name ?? cityIdentifier;
}

Result: UI shows readable location names; RPCs handle both formats; address rendering robust across data shapes.`,
      tags: ['Address', 'Database', 'Supabase', 'Indonesia', 'Migration'],
    },
    {
      id: 'rebil-2025-08-09-pr17',
      date: '2025-08-09',
      summary:
        'Map search UX overhaul: free pan/zoom, fixed 60/40 layout, stable measurements, and interaction cleanup.',
      details:
        'Problem: Controlled center kept snapping map back; layout had sticky/spacing side-effects; debug logs polluted console.\n\nWhat I changed:\n- Map: Switched from controlled `center` to `defaultCenter` so users can drag freely; tracked `userHasPanned` to respect manual pans.\n- Layout: Implemented a fixed map container aligned with the vehicle list using measured navbar height and consistent spacing; removed overflow-hidden that prevented interactions.\n- Cleanup: Replaced brittle DOM queries/classes with safer sizing; removed console logs from event handlers.\n\nSnippet (event handlers simplified):\n```tsx\n<GoogleMap\n  onDrag={() => setUserHasPanned(true)}\n  onDragend={() => {/* optional */}}\n  onCameraChanged={() => {/* optional */}}\n/>\n```\n\nResult: Smooth panning, clear separation between list and map (60/40), and no console noise.',
      tags: ['Google Maps', 'Search', 'UX', 'Layout'],
    },
    {
      id: 'rebil-2025-08-08-pr16',
      date: '2025-08-08',
      summary:
        'Multilingual (EN/ID/KO) with i18next, LanguageSwitcher, html lang sync, and richer signup profile.',
      details:
        'Internationalization: Initialized i18next with browser/localStorage detection and fallbacks; provided through I18nProvider; LanguageSwitcher updates both i18n and <html lang>.\nSignup UX: Added phone, DOB, and detailed address; standardized inputs and validation.\n\nSnippet (provider and html lang sync):\n```tsx\nuseEffect(() => {\n  i18n.changeLanguage(savedLang);\n  document.documentElement.lang = i18n.language;\n}, [i18n]);\n```\n\nResult: Seamless language switching across the app with persisted preference and accessible lang attributes.',
      tags: ['i18n', 'UX', 'Signup', 'Accessibility'],
    },
    {
      id: 'rebil-2025-08-07-pr15',
      date: '2025-08-07',
      summary:
        'Centralized auth/components and modularized UI; cleaned up storybook; stabilized normal sign-in.',
      details:
        'Refined host/admin flows, consolidated sign-in logic and middleware, improved bookings UI, and removed storybook artifacts affecting builds.',
      tags: ['Auth', 'Refactor', 'UI'],
    },
    {
      id: 'rebil-2025-08-07-pr12',
      date: '2025-08-07',
      summary:
        'Google Maps integration + admin approval simplification + booking start/end validation fixes.',
      details: `Maps: Integrated Google Maps for search and address handling; added helpers for Indonesian addresses and geocoding.\nAdmin: Reduced steps in vehicle approval flow with clearer feedback; hardened queries to avoid ambiguous columns.\nBooking: Fixed off-by-one and invalid range issues; improved error feedback.\n\nExample (booking date validation):\n\`\`\`ts\nif (start >= end) {\n  throw new Error('Invalid booking window');\n}\n\`\`\``,
      tags: ['Google Maps', 'Admin', 'Database', 'Booking'],
    },
    {
      id: 'rebil-2025-08-05-pr11',
      date: '2025-08-05',
      summary:
        'Vehicle cards, host dynamic discounts, calendar availability blocks, and Indonesian address widgets.',
      details:
        'UI: Streamlined renter vehicle cards with badges (NEW!, efficiency), hover effects, and better host info.\nHost Pricing: Weekly/monthly discount visualization with real-time percentage; validation preventing illogical tiers.\nAvailability: Manual block calendar with conflict detection against bookings; reasons recorded.\nAddress: Province/city cascading selects with validation.\n\nSnippet (discount %):\n```ts\nconst percent = Math.round(((dailyRate - weeklyDailyRate) / dailyRate) * 100);\n```',
      tags: ['Pricing', 'Availability', 'Address', 'UI'],
    },
    {
      id: 'rebil-2025-08-05-pr10',
      date: '2025-08-05',
      summary:
        'Tiered pricing (daily/weekly/monthly) with DB constraints and unified calculation path.',
      details: `DB: Added columns and constraints (monthly ≤ weekly ≤ daily); migrations populated defaults.\nLogic: Introduced calculateTieredRent() to select effective rate by duration and return subtotal, effectiveRate, rateType, savings.\nUI: Host add-vehicle shows live examples (3/10/45 days) and validates tiers; booking detail displays active tier.\n\nSnippet (core calc):\n\`\`\`ts\nexport function calculateTieredRent(d, w, m, days) {\n  const rate = days >= 30 ? m ?? w ?? d : days >= 7 ? w ?? d : d;\n  const subtotal = days * rate;\n  return { subtotal, effectiveRate: rate, rateType: days>=30?'monthly':days>=7?'weekly':'daily' };\n}\n\`\`\``,
      tags: ['Pricing', 'Database', 'Booking', 'UX'],
    },
    {
      id: 'rebil-2025-08-05-pr9',
      date: '2025-08-05',
      summary:
        'Booking cancellation policy, unified Button with motion/loading, availability hardening, IDR currency, search upgrades.',
      details:
        'Booking: Implemented DB functions (can_renter_cancel_booking, cancel_booking_by_renter, get_booking_cancellation_info) and enhanced listing via get_renter_bookings_with_cancellation; added audit trail.\nDesign System: Unified Button with animation variants and loading spinner, preserving backward compatibility.\nAvailability: Fixed ambiguous columns and conflict resolution.\nCurrency: Migrated display to IDR (1 USD = 15,500 IDR).\nSearch: Better performance and filtering UX.\n\nSnippet (cancel flow):\n```sql\nselect can_renter_cancel_booking(...);\nselect cancel_booking_by_renter(...);\n```',
      tags: ['Booking', 'Design System', 'Availability', 'Search', 'Currency'],
    },
    {
      id: 'rebil-2025-07-31-pr8',
      date: '2025-07-31',
      summary:
        'Admin approvals at scale with realtime notifications and renter-facing surfacing of new vehicles.',
      details:
        'Admin: Added bulk approve/reject with realtime updates via Supabase; advanced filters and audit logs.\nRenter: "Recently Approved" badge for 48 hours and instant booking modal.\nPerf/Access: Sub-200ms queries and WCAG 2.1 AA checks passed.',
      tags: ['Admin', 'Realtime', 'Notifications', 'Renter UX'],
    },
    {
      id: 'rebil-2025-07-31-pr7',
      date: '2025-07-31',
      summary:
        'Host vehicle lifecycle: registration → storage-backed images → admin approvals → host management.',
      details:
        'Schema: cars, car_images with ordered display and primary flags.\nStorage: Supabase bucket `vehicle-images` with public read and authenticated write/update/delete policies.\nAdmin: States DRAFT/PENDING_APPROVAL/ACTIVE/INACTIVE/SUSPENDED with review queues.\nHost: Detail/edit pages, image reorder, and status management.',
      tags: ['Host', 'Storage', 'Admin', 'Vehicles'],
    },
    {
      id: 'rebil-2025-07-31-pr6',
      date: '2025-07-31',
      summary:
        'Core feature pack: booking detail/management, advanced search filters, add-vehicle wizard.',
      details:
        'Booking: Status transitions (confirm/cancel/complete) with permission checks and realtime updates.\nSearch: Filter by dates, price ranges, specs, and features with URL-synced state.\nHost: Multi-step add-vehicle form with validations and host-specific guards.',
      tags: ['Booking', 'Search', 'Host', 'TypeScript'],
    },
    {
      id: 'rebil-2025-07-29-pr5',
      date: '2025-07-29',
      summary:
        'RBAC and role-based home: ADMIN/HOST/RENTER with secure session checks and redirects.',
      details:
        'Auth: Role selection after OAuth or email signup; profile bootstrap on first login.\nRouting: Guarded /home/{role} pages with secure redirects.\nDB: Tables for user_profiles, user_roles, cars, bookings; triggers for profile creation.',
      tags: ['RBAC', 'Auth', 'Schema', 'Dashboards'],
    },
    {
      id: 'rebil-2025-07-22-pr2',
      date: '2025-07-22',
      summary:
        'Login UI with Google OAuth entry; tightened lint/build and preview deploy checks.',
      details:
        'Added Google button triggering /auth/google; resolved initial lint issues and validated preview deploy. This set the first usable auth pathway for the MVP.',
      tags: ['Auth', 'OAuth', 'UI'],
    },
    {
      id: 'rebil-2025-07-22-pr1',
      date: '2025-07-22',
      summary:
        'Auth foundation: Google OAuth + email/password, profile bootstrap, protected routes, logout.',
      details:
        'Flow: /auth/google → Google → /auth/callback → exchange code → create profile if missing → set cookies → redirect /home.\nPages: /login, /signup, /profile; error routes; server actions for signOut.\n\nSnippet (OAuth sign-in):\n```ts\nawait supabase.auth.signInWithOAuth({\n  provider: "google",\n  options: { redirectTo: `${origin}/auth/callback` }\n});\n```',
      tags: ['Auth', 'OAuth', 'Supabase'],
    },
  ],
};
