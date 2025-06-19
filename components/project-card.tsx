import Image from 'next/image'
import Link from 'next/link'
import { formatDistanceToNow } from 'date-fns'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  views: number
  date: Date
  href: string
}

export function ProjectCard({ title, description, image, views, date, href }: ProjectCardProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-4xl bg-white/90 border-2 border-blue-100 shadow-2xl hover:shadow-2xl hover:border-[#1877F2] transition-all duration-500 hover:scale-[1.03]"
    >
      {/* Image Area */}
              <div className="aspect-[16/9] w-full relative overflow-hidden rounded-4xl">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 rounded-4xl"
        />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#e7f0fd]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-4xl"></div>
        
        {/* Views and Date Overlay */}
                  <div className="absolute top-4 right-4 bg-[#e3e9fc] text-[#1877F2] rounded-4xl px-3 py-1 text-xs font-medium border border-blue-100 shadow">
          {views.toLocaleString()} views
        </div>
        
        {/* Date Badge */}
                  <div className="absolute bottom-4 left-4 bg-[#e3e9fc] text-[#1877F2] rounded-4xl px-3 py-1 text-xs font-medium border border-blue-100 shadow">
          {formatDistanceToNow(date)} ago
        </div>
      </div>

      {/* Content Area */}
      <div className="p-8 space-y-4">
        <h3 className="text-2xl font-extrabold text-[#1877F2] leading-tight">
          {title}
        </h3>
        
        <p 
          className="text-lg text-gray-700 leading-relaxed"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {description}
        </p>
        
        {/* Read More Indicator */}
        <div className="flex items-center text-sm text-[#1877F2] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>View Project</span>
          <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </div>
    </Link>
  )
}
