import { useState, useRef, useCallback } from 'react';
import { X, UploadCloud, FileImage, FileVideo, Loader2 } from 'lucide-react';

const formatSize = (bytes) => {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const UploadModal = ({ isOpen, onClose }) => {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef(null);

  const addFiles = useCallback((incoming) => {
    const newEntries = Array.from(incoming).map(file => ({
      id: `${file.name}-${file.size}-${Date.now()}`,
      file,
      progress: Math.floor(Math.random() * 60) + 20, // simulated progress 20–80%
    }));
    setFiles(prev => [...prev, ...newEntries]);
  }, []);

  const removeFile = (id) => setFiles(prev => prev.filter(f => f.id !== id));

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    addFiles(e.dataTransfer.files);
  };

  const handleClose = () => {
    setFiles([]);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in"
      onClick={handleClose}
    >
      <div
        className="bg-white w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 flex justify-between items-start">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Upload to My Library</h2>
            <p className="text-sm text-gray-500">Upload and organize your photos & videos</p>
          </div>
          <button onClick={handleClose} className="text-gray-400 hover:text-gray-700 transition-colors p-1">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 pb-4 space-y-4">
          {/* Dropzone */}
          <div
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            onClick={() => inputRef.current?.click()}
            className={`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-colors ${
              isDragging ? 'border-brand bg-red-50' : 'border-gray-300 hover:border-brand hover:bg-gray-50'
            }`}
          >
            <input
              ref={inputRef}
              type="file"
              multiple
              accept="image/*,video/*"
              className="hidden"
              onChange={e => addFiles(e.target.files)}
            />
            <UploadCloud size={36} className="mx-auto mb-3 text-gray-400" />
            <p className="text-sm text-gray-700 mb-1">
              Drag & Drop <span className="text-brand font-medium">Photos & Videos</span> here, or{' '}
              <span className="text-brand font-medium underline">Browse</span>
            </p>
            <p className="text-xs text-gray-400">PNG, JPG, WEBP, GIF, MP4, MOV, WEBM — up to 100MB each</p>
          </div>

          {/* File List */}
          {files.length > 0 && (
            <div className="max-h-56 overflow-y-auto space-y-2 pr-1">
              {files.map(({ id, file, progress }) => {
                const isVideo = file.type.startsWith('video/');
                return (
                  <div key={id} className="flex items-center gap-3 bg-gray-50 rounded-xl px-3 py-2.5">
                    {/* Icon */}
                    <div className="w-8 h-8 rounded-lg bg-white border border-gray-100 flex items-center justify-center shrink-0">
                      {isVideo
                        ? <FileVideo size={16} className="text-brand" />
                        : <FileImage size={16} className="text-brand" />
                      }
                    </div>

                    {/* Name + Progress */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-1">
                        <p className="text-xs font-medium text-gray-800 truncate">{file.name}</p>
                        <span className="text-xs text-gray-400 ml-2 shrink-0">{formatSize(file.size)}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div
                          className="bg-brand h-1.5 rounded-full transition-all"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeFile(id)}
                      className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-200 text-gray-400 hover:text-gray-600 transition-colors shrink-0"
                    >
                      <X size={13} />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
          <button
            onClick={handleClose}
            className="px-5 py-2.5 rounded-lg font-medium text-gray-600 hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
          <button
            disabled={files.length === 0}
            className="px-6 py-2.5 rounded-lg font-medium bg-red-600 text-white hover:bg-red-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
            onClick={() => console.log('Uploading', files.map(f => f.file.name))}
          >
            {files.length > 0 && <Loader2 size={15} className="animate-spin" />}
            Upload {files.length > 0 ? `${files.length} File${files.length > 1 ? 's' : ''}` : 'Files'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
