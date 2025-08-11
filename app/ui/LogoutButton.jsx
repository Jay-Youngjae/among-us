'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/AuthContext';

export default function LogoutButton({ className = '' }) {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();           // 전역 상태 + localStorage 정리
    router.push('/login'); // 로그인 페이지로 이동
    router.refresh();      // 화면 갱신
  };

  return (
    <button
      onClick={handleLogout}
      className={`px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium ${className}`}
      aria-label="로그아웃"
    >
      로그아웃
    </button>
  );
}
