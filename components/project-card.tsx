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
      className="group relative block overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/30 shadow-xl hover:shadow-2xl hover:border-teal-400/30 transition-all duration-500 hover:scale-[1.02] card-hover"
    >
      {/* Image Area */}
      <div className="aspect-[16/9] w-full relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Views and Date Overlay */}
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1 text-xs text-white font-medium">
          {views.toLocaleString()} views
        </div>
        
        {/* Date Badge */}
        <div className="absolute bottom-4 left-4 bg-gradient-to-r from-teal-400/90 to-blue-400/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white font-medium">
          {formatDistanceToNow(date)} ago
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300 leading-tight">
          {title}
        </h3>
        
        <p 
          className="text-sm text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300"
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
        <div className="flex items-center text-xs text-teal-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>View Project</span>
          <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </div>
    </Link>
  )
}
