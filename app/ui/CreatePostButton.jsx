'use client'  // ✅ 클라이언트 컴포넌트로 선언

import { useState } from 'react'
import CreatePostModal from './CreatePostModal'
import { useRouter } from 'next/navigation'

export default function CreatePostButton() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleCreated = () => {
    setIsOpen(false)
    router.refresh()
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-200 hover:bg-blue-300 text-white px-4 py-2 rounded shadow mr-4"
      >
        게시글 생성하기
      </button>

      <CreatePostModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onCreated={handleCreated}
      />
    </>
  )
}
