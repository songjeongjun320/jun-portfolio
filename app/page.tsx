import Image from 'next/image'

export default function ProfileSection() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-bl from-teal-400 via-green-200 to-blue-500">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
            <Image
              src="/whoami.jpg"
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="space-y-4 text-slate-800">
            <ul className="space-y-3 text-lg md:text-xl">
              <li className="flex items-center gap-2">
                • Naver MAPs API 연동
              </li>
              <li className="flex items-center gap-2">
                • VSCode, Github, Express 사용하기
              </li>
              <li className="flex items-center gap-2">
                • 서버 배포하기
              </li>
              <li className="flex items-center gap-2">
                • GPTs 앱과 연동하기
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

