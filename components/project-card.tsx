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
      {/* 이미지 영역: 텍스트와 구분된 별도의 영역으로 설정 */}
      <div className="aspect-[16/9] w-full relative">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* 설명 부분: 이미지 아래에 배경색을 추가하여 구분 */}
      <div className="p-6 bg-gray-900/90 text-white">
        <h3 className="text-2xl font-semibold mb-3">{title}</h3>
        <div className="flex items-center gap-2 text-sm text-gray-300 mb-4">
          <span>{views.toLocaleString()} views</span>
          <span>•</span>
          <span>{formatDistanceToNow(date)} ago</span>
        </div>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </Link>
  )
}
