"use client";

interface FileItem {
  id: number;
  name: string;
  date: string;
}

interface FileDeleteModalProps {
  show: boolean;
  file: FileItem | null;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function FileDeleteModal({
  show,
  file,
  onConfirm,
  onCancel,
}: FileDeleteModalProps) {
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onCancel}
    >
      <div
        className="bg-white rounded-lg p-6 max-w-md w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-lg font-bold text-gray-900 mb-2">파일 삭제</h3>
        <p className="text-gray-600 mb-6">
          정말로 &quot;{file?.name}&quot; 파일을 삭제하시겠습니까?
          <br />이 작업은 되돌릴 수 없습니다.
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            취소
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
          >
            삭제
          </button>
        </div>
      </div>
    </div>
  );
}
