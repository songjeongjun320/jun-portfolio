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
      className="group relative block overflow-hidden rounded-lg bg-gray-900/90 transition-all hover:scale-105"
    >
      <div className="aspect-[16/9] w-full">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
        <div className="mb-2 flex items-center gap-2 text-sm text-gray-300">
          <span>{views.toLocaleString()} views</span>
          <span>•</span>
          <span>{formatDistanceToNow(date)} ago</span>
        </div>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </Link>
  )
}

